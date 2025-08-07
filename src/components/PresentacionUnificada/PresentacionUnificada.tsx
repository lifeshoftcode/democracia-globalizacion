'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useControlsVisibility } from '@/hooks/useControlsVisibility';

// Type definitions
interface Slide {
  layout: string;
  blocks: Block[];
  [key: string]: unknown;
}

interface Block {
  kind: string;
  title?: string;
  [key: string]: unknown;
}

interface SlideWithMetadata extends Slide {
  investigacionIndex: number;
  slideIndexEnInvestigacion: number;
  tema: string;
  gradiente: string;
  autor: string;
  numeroGlobal: number;
}

interface InvestigacionData {
  id: string;
  participant?: { name: string };
  slides: Slide[];
  [key: string]: unknown;
}

// Importar todas las investigaciones usando los archivos que realmente existen
import parte3 from '@/data/parte3'; // Rosanny - Principios

// Importar componente de slides genérico
import { SlideRenderer } from '@/components/ui';

// Importar componentes de controles
import {
  NavigationControls,
  HeaderControls,
  ProgressBar,
  InvestigationTransition
} from './components';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

// Combinar todas las investigaciones en una sola estructura
const investigaciones = [
  {
    datos: parte3, // Rosanny - Principios
    tema: 'principios',
    gradiente: 'from-slate-900 via-blue-900 to-slate-900'
  }
  // Agregar más investigaciones cuando estén disponibles
];

// Crear array unificado de slides
const todosLosSlides = investigaciones.reduce((acc, investigacion, invIndex) => {
  const slidesConMetadata = investigacion.datos.slides.map((slide: Slide, slideIndex: number): SlideWithMetadata => ({
    ...slide,
    investigacionIndex: invIndex,
    slideIndexEnInvestigacion: slideIndex,
    tema: investigacion.tema,
    gradiente: investigacion.gradiente,
    autor: investigacion.datos.participant?.name || 'Autor desconocido',
    numeroGlobal: acc.length + slideIndex + 1
  }));
  return [...acc, ...slidesConMetadata];
}, [] as SlideWithMetadata[]);

export function PresentacionUnificada() {
  const [[page, direction], setPage] = useState([0, 0]);
  const { showControls } = useControlsVisibility(3000);

  const paginate = useCallback((newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < todosLosSlides.length) {
      setPage([newPage, newDirection]);
    }
  }, [page]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'Escape') {
        // Si está en pantalla completa, salir; si no, reiniciar presentación
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          setPage([0, -1]);
        }
      }
      if (e.key === 'Home') {
        // Ir al inicio
        setPage([0, -1]);
      }
      if (e.key === 'F11' || (e.key === 'f' && (e.ctrlKey || e.metaKey))) {
        // Alternar pantalla completa con F11 o Ctrl+F
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [paginate]);

  const currentSlide = todosLosSlides[page];
  const currentInvestigacion = investigaciones[currentSlide.investigacionIndex];

  const renderSlideContent = () => {
    return <SlideRenderer slide={currentSlide} />;
  };

  // Determinar si es el primer slide de una nueva investigación
  const esInicioDeInvestigacion = currentSlide.slideIndexEnInvestigacion === 0;
  const mostrarTransicion = esInicioDeInvestigacion && currentSlide.investigacionIndex > 0;

  const handleRestart = () => {
    setPage([0, -1]);
  };

  return (
    <div className={`relative h-screen w-full bg-gradient-to-br ${currentSlide.gradiente} overflow-hidden transition-all duration-1000`}>
      {/* Transición de investigación */}
      <InvestigationTransition
        show={mostrarTransicion}
        authorName={currentSlide.autor}
      />

      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {renderSlideContent()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <NavigationControls
        page={page}
        totalSlides={todosLosSlides.length}
        onPaginate={paginate}
        currentSlide={currentSlide}
        currentInvestigacion={currentInvestigacion}
        investigaciones={investigaciones}
        showControls={showControls}
      />

      {/* Progress Bar con división de temas - Siempre visible */}
      <ProgressBar
        page={page}
        totalSlides={todosLosSlides.length}
        investigaciones={investigaciones}
      />

      {/* Header Controls */}
      <HeaderControls
        onRestart={handleRestart}
        currentSlide={currentSlide}
        page={page}
        totalSlides={todosLosSlides.length}
        investigaciones={investigaciones}
        showControls={showControls}
      />
    </div>
  );
}
