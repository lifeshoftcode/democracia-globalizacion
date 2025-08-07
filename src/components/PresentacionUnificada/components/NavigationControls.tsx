'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideMetadata {
  autor?: string;
  tema?: string;
  slideIndexEnSeccion?: number;
  slideIndexEnInvestigacion?: number;
  seccionIndex?: number;
  investigacionIndex?: number;
  [key: string]: unknown;
}

interface Investigacion {
  id?: string;
  topic?: string;
  participant?: { name: string };
  datos?: {
    slides?: unknown[];
  };
  [key: string]: unknown;
}

interface NavigationControlsProps {
  page: number;
  totalSlides: number;
  onPaginate: (direction: number) => void;
  currentSlide: SlideMetadata;
  currentInvestigacion: Investigacion;
  investigaciones: Investigacion[];
  showControls: boolean;
}

export function NavigationControls({
  page,
  totalSlides,
  onPaginate,
  currentSlide,
  currentInvestigacion,
  investigaciones,
  showControls
}: NavigationControlsProps) {
  return (
    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20 transition-all duration-500 ${
      showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      {/* Previous Button */}
      <button
        onClick={() => onPaginate(-1)}
        disabled={page === 0}
        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Current Investigation Info */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl px-6 py-3 min-w-[350px] text-center">
        <div className="flex items-center justify-center space-x-3 mb-1">
          <div className="w-3 h-3 rounded-full bg-white/60" />
          <span className="text-white font-medium text-sm">
            {currentSlide.tema || 'Sin tema'}
          </span>
          <span className="text-white/90 text-lg font-bold">
            {(currentSlide.slideIndexEnSeccion ?? currentSlide.slideIndexEnInvestigacion ?? 0) + 1}/{currentInvestigacion?.datos?.slides?.length || 1}
          </span>
        </div>
        
        <div className="text-white/60 text-xs">
          Tema {(currentSlide.seccionIndex ?? currentSlide.investigacionIndex ?? 0) + 1} de {investigaciones.length}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPaginate(1)}
        disabled={page === totalSlides - 1}
        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
