# find-orphans.ps1
# Lista archivos .ts/.tsx/.js/.jsx dentro de src/ que no son importados por ningún otro archivo.
# - Solo escanea src/
# - No excluye por convención (page/layout/route/template, middleware, etc.)
# - Soporta alias de tsconfig.json (compilerOptions.baseUrl / paths)
# - Salida: File, Relative, FullName
# - Opcional: Exporta CSV (-OutCsv), mover a cuarentena (-Delete -Quarantine),
#             eliminar (-Delete) o enviar a Papelera (-Delete -Recycle)

param(
  [string]$Root = (Get-Location),
  [string[]]$Ext = @('ts','tsx','js','jsx'),
  [string]$OutCsv,
  [switch]$Delete,
  [switch]$Quarantine,
  [switch]$Recycle
)

Write-Host "find-orphans (solo src/, sin exclusiones por convención)" -ForegroundColor Cyan

# Validaciones de flags
if ($Quarantine -and $Recycle) {
  Write-Error "No combines -Quarantine y -Recycle. Usa solo uno."
  exit 1
}

# Directorios a excluir dentro de src
$excludeDirRx = '\\(node_modules|\.next|dist|build|coverage|\.git)\\'
$include = $Ext | ForEach-Object { "*.$_" }

# Definir carpeta src
$srcRoot = Join-Path $Root 'src'
if (-not (Test-Path $srcRoot)) {
  Write-Error "No existe la carpeta: $srcRoot"
  exit 1
}

# Archivos candidatos: SOLO src/
$files = Get-ChildItem -Path $srcRoot -Recurse -Include $include -File |
  Where-Object {
    $_.FullName -notmatch $excludeDirRx -and
    $_.Name -notmatch '\.d\.ts$'
  }

# Cargar tsconfig.json (para alias)
$tscfgPath = Join-Path $Root 'tsconfig.json'
$aliasMap = @()
if (Test-Path $tscfgPath) {
  try {
    $tscfg = Get-Content $tscfgPath -Raw | ConvertFrom-Json -ErrorAction Stop
    $baseUrl = if ($tscfg.compilerOptions.baseUrl) { Join-Path $Root $tscfg.compilerOptions.baseUrl } else { $Root }
    if ($tscfg.compilerOptions.paths) {
      foreach ($k in $tscfg.compilerOptions.paths.PSObject.Properties.Name) {
        $targets = $tscfg.compilerOptions.paths.$k
        if ($targets -isnot [System.Collections.IEnumerable]) { $targets = @($targets) }
        $aliasMap += [pscustomobject]@{ key=$k; targets=$targets; base=$baseUrl }
      }
    }
  } catch {
    Write-Verbose "No se pudo leer tsconfig.json: $_"
  }
}

# Regex para import/export/require/dynamic import
$rx = '(?m)(?:import\s+(?:.+?\s+from\s+)?|export\s+.+?\s+from\s+|require\(|import\()\s*["'']([^"'']+)["'']'

$exts = @('.ts','.tsx','.js','.jsx')

function Try-Resolve {
  param([string]$p)
  foreach ($e in $exts) { if (Test-Path "$p$e") { return (Resolve-Path "$p$e").ProviderPath } }
  if (Test-Path $p) { return (Resolve-Path $p).ProviderPath }
  foreach ($e in $exts) {
    $idx = Join-Path $p ("index$e")
    if (Test-Path $idx) { return (Resolve-Path $idx).ProviderPath }
  }
  return $null
}

function Resolve-Relative {
  param([string]$BaseDir,[string]$Spec)
  if ($Spec -notmatch '^\.' ) { return $null }
  $s = ($Spec -replace '/','\')
  return Try-Resolve (Join-Path $BaseDir $s)
}

function Resolve-Alias {
  param([string]$Spec)
  if (-not $aliasMap) { return $null }
  foreach ($a in $aliasMap) {
    $k = $a.key; $targets = $a.targets
    # Soporta "@/*", "@/components/*", etc.
    $rxk = [regex]::Escape($k).Replace('\*','(.*)')
    $m = [regex]::Match($Spec, "^$rxk$")
    if ($m.Success) {
      $suffix = if ($m.Groups.Count -gt 1) { $m.Groups[1].Value } else { '' }
      foreach ($t in $targets) {
        $t2 = $t.Replace('*',$suffix).Replace('/','\')
        $candidate = Join-Path $a.base $t2
        $res = Try-Resolve $candidate
        if ($res) { return $res }
      }
    }
  }
  return $null
}

# Recolectar rutas referenciadas (solo las que terminen dentro de src/)
$refPaths = New-Object 'System.Collections.Generic.HashSet[string]'

foreach ($f in $files) {
  $dir = Split-Path $f.FullName
  $matchInfos = Select-String -Path $f.FullName -Pattern $rx -AllMatches -ErrorAction SilentlyContinue
  if ($matchInfos) {
    foreach ($mi in $matchInfos) {
      foreach ($m in $mi.Matches) {
        if ($m.Groups.Count -lt 2) { continue }
        $spec = $m.Groups[1].Value
        $p = Resolve-Relative -BaseDir $dir -Spec $spec
        if (-not $p) { $p = Resolve-Alias -Spec $spec }
        if ($p -and $p.StartsWith($srcRoot, [StringComparison]::OrdinalIgnoreCase)) {
          $refPaths.Add($p) | Out-Null
        }
      }
    }
  }
}

# Filtrar huérfanos: archivos en src/ que NADIE importó (sin excepciones por convención)
$orphans = $files | Where-Object {
  -not $refPaths.Contains($_.FullName)
}

# Salida con columna 'File'
$result = $orphans |
  Sort-Object FullName |
  Select-Object @{n='File'; e={$_.Name}},
                @{n='Relative'; e={ Resolve-Path -Relative $_.FullName }},
                FullName

if (-not $result -or $result.Count -eq 0) {
  Write-Host "✅ No se encontraron huérfanos en src/." -ForegroundColor Green
  if ($OutCsv) { "" | Out-File -Encoding utf8 $OutCsv }
  return
}

# Acciones finales
if ($OutCsv) {
  $result | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $OutCsv
  Write-Host "📄 Orphans exportados a: $OutCsv"
}

if ($Delete) {
  if ($Quarantine) {
    $trash = Join-Path $Root ".quarantine"
    New-Item -ItemType Directory -Force -Path $trash | Out-Null
    $result | ForEach-Object {
      $dest = Join-Path $trash $_.File
      # Evitar colisiones de nombre
      $i = 1
      while (Test-Path $dest) {
        $dest = Join-Path $trash ("{0}.{1}{2}" -f ([System.IO.Path]::GetFileNameWithoutExtension($_.File)), $i, ([System.IO.Path]::GetExtension($_.File)))
        $i++
      }
      Move-Item $_.FullName -Destination $dest
    }
    Write-Host "🟡 Movidos a cuarentena: $trash"
  }
  elseif ($Recycle) {
    # Enviar a Papelera (solo archivos)
    Add-Type -AssemblyName Microsoft.VisualBasic
    foreach ($row in $result) {
      [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile(
        $row.FullName,
        [Microsoft.VisualBasic.FileIO.UIOption]::OnlyErrorDialogs,
        [Microsoft.VisualBasic.FileIO.RecycleOption]::SendToRecycleBin
      )
    }
    Write-Host "🗑️ Archivos enviados a la Papelera de reciclaje."
  }
  else {
    $result | ForEach-Object { Remove-Item $_.FullName -Force }
    Write-Host "🗑️ Archivos eliminados permanentemente."
  }
  return
}

# Si no hay acción de borrado, mostrar listado
$result
