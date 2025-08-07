'use client';

import { Home, Maximize, Minimize } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SlideMetadata {
  autor?: string;
  tema?: string;
  numeroGlobal?: number;
  investigacionIndex?: number;
  [key: string]: unknown;
}

interface Investigacion {
  id?: string;
  topic?: string;
  participant?: { name: string };
  [key: string]: unknown;
}

interface HeaderControlsProps {
  onRestart: () => void;
  currentSlide: SlideMetadata;
  page: number;
  totalSlides: number;
  investigaciones: Investigacion[];
  showControls: boolean;
}

export function HeaderControls({
  onRestart,
  currentSlide,
  page,
  totalSlides,
  investigaciones,
  showControls
}: HeaderControlsProps) {
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
    <>
      {/* Control Buttons Container - Se ocultan con inactividad */}
      <div className={`absolute top-6 left-6 flex space-x-2 z-20 transition-all duration-500 ${
        showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          title="Volver al inicio"
        >
          <Home className="w-5 h-5 text-white" />
        </button>

        {/* Fullscreen Toggle Button */}
        <button
          onClick={toggleFullscreen}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 text-white" />
          ) : (
            <Maximize className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Author info y progreso entre temas - Siempre visible */}
      <div className="absolute top-6 right-6 text-white/70 text-sm z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 text-right">
          <p className="font-medium">{currentSlide.autor}</p>
          <p className="text-xs opacity-75">
            Tema {(currentSlide.investigacionIndex ?? 0) + 1}/{investigaciones.length} | Total: {page + 1}/{totalSlides}
          </p>
        </div>
      </div>
    </>
  );
}
