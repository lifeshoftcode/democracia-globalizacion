'use client';

import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SlideMetadata {
  autor: string;
  tema: string;
  numeroGlobal: number;
  [key: string]: unknown;
}

interface SimpleNavigationProps {
  page: number;
  totalSlides: number;
  onPaginate: (direction: number) => void;
  currentSlide: SlideMetadata;
  showControls: boolean;
}

export function SimpleNavigation({
  page,
  totalSlides,
  onPaginate,
  currentSlide,
  showControls
}: SimpleNavigationProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Detectar cambios en el estado de pantalla completa
  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', checkFullscreen);
    return () => document.removeEventListener('fullscreenchange', checkFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error al cambiar modo de pantalla:', error);
    }
  };
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

      {/* Current Slide Info */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl px-6 py-3 min-w-[350px] text-center">
        <div className="flex items-center justify-center space-x-3 mb-1">
          <div className="w-3 h-3 rounded-full bg-white/60" />
          <span className="text-white font-medium text-sm">
            {currentSlide?.tema || 'Cargando...'}
          </span>
          <span className="text-white/90 text-lg font-bold">
            {page + 1}/{totalSlides}
          </span>
        </div>
        
        <div className="text-white/60 text-xs">
          {currentSlide?.autor || 'Equipo de Investigación'}
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

      {/* Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
        title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
      >
        {isFullscreen ? (
          <Minimize className="w-6 h-6 text-white" />
        ) : (
          <Maximize className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
