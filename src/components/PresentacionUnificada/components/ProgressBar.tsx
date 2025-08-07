'use client';

interface Investigacion {
  id?: string;
  topic?: string;
  participant?: { name: string };
  datos?: {
    slides?: unknown[];
  };
  [key: string]: unknown;
}

interface ProgressBarProps {
  page: number;
  totalSlides: number;
  investigaciones: Investigacion[];
}

export function ProgressBar({
  page,
  totalSlides,
  investigaciones
}: ProgressBarProps) {
  // Calcular el progreso total
  const progressPercentage = ((page + 1) / totalSlides) * 100;
  
  // Calcular puntos de división entre investigaciones
  const divisionPoints = investigaciones.reduce((acc, investigacion, index) => {
    if (index === 0) return acc;
    
    const slidesAntes = investigaciones
      .slice(0, index)
      .reduce((sum, inv) => sum + (inv.datos?.slides?.length || 0), 0);
    
    const percentage = (slidesAntes / totalSlides) * 100;
    acc.push(percentage);
    return acc;
  }, [] as number[]);

  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-20">
      {/* Barra de progreso principal */}
      <div 
        className="h-full transition-all duration-300 bg-white/60"
        style={{ width: `${progressPercentage}%` }}
      />
      
      {/* Marcadores de división entre investigaciones */}
      {divisionPoints.map((point: number, index: number) => (
        <div
          key={index}
          className="absolute top-0 w-0.5 h-full bg-white/40"
          style={{ left: `${point}%` }}
        />
      ))}
    </div>
  );
}
