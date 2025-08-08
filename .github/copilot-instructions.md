## AI Assistant Project Guide

Focused, actionable rules for contributing to this presentation app (Next.js App Router + Tailwind + Framer Motion) about democracy & globalization.

### 1. Arquitectura de Alto Nivel
- Data-driven slides: All narrative content lives in `src/data/parte*.js` as plain JS objects ("sections"). UI is mostly generic; add new content by adding a section file, not new component code.
- A section shape: `{ id, participant, topic, mainImage?, slides:[{ layout, blocks:[] }] }` (see `slides.schema.js`). The renderer (`ui/SlideRenderer.tsx`) decides how to display each `block.kind` + `slide.layout` pair.
- Unificación: `PresentacionCompleta.tsx` imports every `parteX` section, assigns a gradient, flattens slides adding metadata (author, indices, flags) for navigation and transitions.
- Navigation & UX: Custom hooks (`hooks/useControlsVisibility`, `useMultiDeviceNavigation`, `useCursorVisibility`) orchestrate keyboard / multi-device events and auto-hide controls & cursor.
- Layout choices (`SlideLayouts`): `stack`, `grid-2`, `split-2`, `tabs` map to simple Tailwind class sets inside `SlideRenderer.getLayoutClasses()`.

### 2. Patrones de Bloques Soportados
Declarar mediante `BlockKinds` (enum en `slides.schema.js`):
- `cover`, `paragraph`, `bullets`, `split`, `tabs`, `image`, `quote`, `conclusion`, `participants_grid`, `cards_grid`.
Render rules centralizadas en `SlideRenderer` (switch por `block.kind`). Para nuevos tipos: añade constante en `BlockKinds`, implementa rama en `SlideRenderer`, y documenta shape en `slides.schema.js`.

### 3. Convenciones de Contenido
- Español técnico claro; títulos en `Title Case` discreto o frase natural consistente con secciones existentes.
- Listas: frases concisas sin punto final salvo cuando sean oraciones completas. Evita mezclar estilos.
- Mantén `subtitle` de `cover` como síntesis estratégica, no repetir el título.
- Minimiza densidad: agrupa conceptos en `cards_grid` si son comparables; usa `bullets` si no requieren icon/estado.

### 4. Añadir una Nueva Sección (Workflow)
1. Copiar un archivo existente p.ej. `src/data/parte5.js` → `parte7.js`.
2. Cambiar `id` (kebab-case único) y `participant`.
3. Proveer `topic` y `slides` usando `SlideLayouts` & `BlockKinds` importados.
4. Importar y agregar la sección en `PresentacionCompleta.tsx` dentro del array `secciones` asignando `gradiente` Tailwind (bg gradient utilities).
5. Verificar en dev (`npm run dev`) y revisar logs de consola para conteo de slides.

### 5. Animaciones
- Framer Motion: variantes básicos en `slideVariants` y `blockVariants` (entrada con desplazamiento y fade). No introducir animaciones pesadas por bloque; reutiliza patrones.
- Swipe: controlado por `swipePower` y `swipeConfidenceThreshold` en `PresentacionCompleta.tsx`.
- Mantén nuevas animaciones controladas por props/variants para consistencia (usa `transition` corto <0.6s, curvas suaves).

### 6. Estilo y Tailwind
- Gradientes por sección: definir `from-* via-* to-*` en `secciones` (ver ejemplos para paletas coherentes). Mantén contraste alto con texto blanco.
- Evita CSS ad-hoc: usar utilidades Tailwind; agrega clases sólo si ya existen patrones equivalentes.

### 7. Accesibilidad / UX
- Cada imagen requiere `alt` significativo; si decorativa en portada, conserva contexto temático.
- Evita saturar una slide: preferible duplicar slide que sobrecargar `bullets` > 8 ítems.
- Mantén foco narrativo: una idea principal por slide.

### 8. Hooks Clave
- `useControlsVisibility(timeoutMs)` auto-oculta UI: llamar sus setters sólo si cambia interacción.
- `useCursorVisibility`: evita forzar mostrar el cursor al paginar (ver comentarios en `PresentacionCompleta.tsx`).
- `useMultiDeviceNavigation`: expone callbacks (next/previous/first/last/fullscreen); no invocar navegación directa fuera de estos para mantener consistencia multi-dispositivo.

### 9. Extensión de Renderizado
Para un nuevo bloque:
1. Añadir constante en `BlockKinds`.
2. Documentar JSDoc shape.
3. Implementar caso en `SlideRenderer` (mantener animación consistente con `blockVariants`).
4. (Opcional) Actualizar README si añade capacidad significativa.

### 10. Scripts / Tareas
- Dev: `npm run dev` (usa Turbopack). Build: `npm run build`. Start prod: `npm start`. Export estático: `npm run export` (si se necesita versión estática; valida imágenes públicas).
- Lint: `npm run lint` (ESLint 9 flat config). Arreglos: pasa `--fix` manualmente si agregas tarea futura.

### 11. Revisión / QA Manual
Checklist rápida antes de commit grande:
- [ ] Navegación funciona (avance/retroceso, swipe, first/last, fullscreen).
- [ ] Conteo correcto de slides en consola.
- [ ] Ninguna slide con overflow visual grave (texto cortado) en 1280x800.
- [ ] Todas las imágenes cargan o fallback visual aceptable.

### 12. Principios de Contribución
- Favorecer datos sobre lógica: primero modela slide; solo crea nuevo componente si varias secciones lo requieren.
- Evitar duplicar layouts: reutiliza `stack` + varios blocks en lugar de inventar un layout por variación menor.
- Mantener uniformidad semántica: `BlockKinds.CONCLUSION` sólo para cierre, no usar para cualquier cita.

### 13. Ejemplos Breves
Cover minimal:
```js
{ layout: SlideLayouts.STACK, blocks:[ { kind: BlockKinds.COVER, title: "Título", subtitle: "Síntesis", badges:["Sección 8"], image:{src:"/images/algo.jpg", alt:"Descripción"} } ] }
```
Bullets + Cards:
```js
{ layout: SlideLayouts.STACK, blocks:[ { kind: BlockKinds.BULLETS, title:"Claves", items:["Uno","Dos"] }, { kind: BlockKinds.CARDS_GRID, title:"Impacto", cards:[{title:"Positivo", content:["Beneficio"], highlight:"positive"}] } ] }
```

### 14. Qué Evitar
- No crear lógica de paginación dentro de secciones.
- No hardcodear estilos globales dentro de `SlideRenderer` nuevos casos (usar patrones existentes).
- No introducir dependencias externas sin justificación (actual stack es suficiente).

Si algo no está claro, pide ejemplo citando el archivo relevante.

