'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useControlsVisibility } from '@/hooks/useControlsVisibility';
import { useMultiDeviceNavigation } from '@/hooks/useMultiDeviceNavigation';
import { useCursorVisibility } from '@/hooks/useCursorVisibility';
import { SlideRenderer } from '@/components/ui';

// Type definitions
interface Block {
  kind: string;
  title?: string;
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  cite?: string;
  highlight?: string;
  [key: string]: unknown;
}

interface Slide {
  layout: string;
  blocks: Block[];
  [key: string]: unknown;
}

interface SlideWithMetadata extends Slide {
  seccionIndex: number;
  slideIndexEnSeccion: number;
  gradiente: string;
  autor: string;
  tema: string;
  numeroGlobal: number;
  seccionId: string;
  esPortada: boolean;
  esPrimerSlideDeSeccion: boolean;
}

// Importar la portada y todas las secciones
import deckCover from '@/data/parte0';
import sectionScarlin from '@/data/parte1';
import sectionJohany from '@/data/parte2';
import sectionRosanny from '@/data/parte3';
import sectionNelson from '@/data/parte4';
import sectionChristopher from '@/data/parte5';
import sectionSociedadNoPolitica from '@/data/parte6';

// Importar componentes de controles
import { SimpleNavigation } from './SimpleNavigation';
import { SimpleProgressBar } from './SimpleProgressBar';
import { InvestigationTransition } from '../PresentacionUnificada/components';

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

// Configuración de secciones con gradientes temáticos
const secciones = [
    {
        id: 'portada',
        slides: [deckCover],
        participant: { name: 'Equipo de Investigación' },
        topic: 'Presentación Principal',
        gradiente: 'from-slate-900 via-purple-900 to-slate-900'
    },
    {
        ...sectionScarlin,
        gradiente: 'from-blue-900 via-indigo-900 to-purple-900'
    },
    {
        ...sectionJohany,
        gradiente: 'from-green-900 via-teal-900 to-blue-900'
    },
    {
        ...sectionRosanny,
        gradiente: 'from-slate-900 via-blue-900 to-slate-900'
    },
    {
        ...sectionNelson,
        gradiente: 'from-purple-900 via-pink-900 to-red-900'
    },
    {
        ...sectionChristopher,
        gradiente: 'from-red-900 via-orange-900 to-yellow-900'
    },
    {
        ...sectionSociedadNoPolitica,
        gradiente: 'from-emerald-900 via-green-900 to-teal-900'
    }
];

console.log('Secciones:', secciones.map(s => ({ id: s.id, slideCount: s.slides?.length })));

// Crear array unificado de slides con metadata
const todosLosSlides = secciones.reduce((acc, seccion, seccionIndex) => {
    const slides = seccion.slides || [];
    const slidesConMetadata = slides.map((slide: Slide, slideIndex: number): SlideWithMetadata => ({
        ...slide,
        seccionIndex,
        slideIndexEnSeccion: slideIndex,
        gradiente: seccion.gradiente,
        autor: seccion.participant?.name || 'Desconocido',
        tema: seccion.topic || 'Sin tema',
        numeroGlobal: acc.length + slideIndex + 1,
        seccionId: seccion.id,
        esPortada: seccionIndex === 0,
        esPrimerSlideDeSeccion: slideIndex === 0
    }));
    return [...acc, ...slidesConMetadata];
}, [] as SlideWithMetadata[]);

export function PresentacionCompleta() {
    const [[page, direction], setPage] = useState([0, 0]);
    const { showControls } = useControlsVisibility(3000);

    // Control de visibilidad del cursor
    const { resetCursorTimer } = useCursorVisibility({
        hideWithControls: true,
        showControls,
        delay: 3000
    });

    const paginate = (newDirection: number) => {
        const newPage = page + newDirection;
        if (newPage >= 0 && newPage < todosLosSlides.length) {
            setPage([newPage, newDirection]);
            // Removed resetCursorTimer() to avoid showing cursor during navigation
        }
    };

    const goToFirst = () => {
        setPage([0, -1]);
        // Removed resetCursorTimer() to avoid showing cursor during navigation
    };
    
    const goToLast = () => {
        setPage([todosLosSlides.length - 1, 1]);
        // Removed resetCursorTimer() to avoid showing cursor during navigation
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        // Keep this one as fullscreen toggle is an intentional action
        resetCursorTimer();
    };

    // Usar el hook de navegación multi-dispositivo
    useMultiDeviceNavigation({
        onNext: () => paginate(1),
        onPrevious: () => paginate(-1),
        onFirst: goToFirst,
        onLast: goToLast,
        onToggleFullscreen: toggleFullscreen
    });

    const currentSlide = todosLosSlides[page];

    // Determinar si mostrar transición
    const mostrarTransicion = currentSlide?.esPrimerSlideDeSeccion && currentSlide?.seccionIndex > 0;

    if (!currentSlide) {
        return (
            <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-3xl font-bold mb-4">Cargando presentación...</h1>
                    <p className="text-white/60">Preparando {todosLosSlides.length} slides</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative h-screen w-full bg-gradient-to-br ${currentSlide.gradiente} overflow-hidden transition-all duration-1000`}>
            {/* Transición de sección */}
            <InvestigationTransition
                show={mostrarTransicion}
                authorName={currentSlide.autor}
            />

            {/* Contenido del slide */}
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
                    onDragStart={() => resetCursorTimer()}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                        resetCursorTimer(); // Reiniciar cursor después del drag
                    }}
                    className="absolute inset-0"
                >
                    <SlideRenderer slide={currentSlide} />
                </motion.div>
            </AnimatePresence>

            {/* Controles de navegación */}
            <SimpleNavigation
                page={page}
                totalSlides={todosLosSlides.length}
                onPaginate={paginate}
                currentSlide={currentSlide}
                showControls={showControls}
            />

            {/* Barra de progreso */}
            <SimpleProgressBar
                page={page}
                totalSlides={todosLosSlides.length}
            />

            {/* Información de debug (solo en desarrollo) */}
            {process.env.NODE_ENV === 'development' && (
                <div className="fixed bottom-4 left-4 bg-black/50 text-white p-2 rounded text-xs space-y-1">
                    <div>Slide {page + 1}/{todosLosSlides.length} |
                        Sección: {currentSlide.tema} |
                        Autor: {currentSlide.autor}</div>
              
                </div>
            )}

        </div>
    );
}
