'use client';

interface SimpleProgressBarProps {
  page: number;
  totalSlides: number;
}

export function SimpleProgressBar({ page, totalSlides }: SimpleProgressBarProps) {
  const progressPercentage = ((page + 1) / totalSlides) * 100;

  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-20">
      <div 
        className="h-full transition-all duration-300 bg-white/60"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
