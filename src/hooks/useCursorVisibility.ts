'use client';

import { useEffect, useRef, useCallback } from 'react';

interface UseCursorVisibilityProps {
  hideWithControls: boolean;
  showControls: boolean;
  delay?: number;
}

export function useCursorVisibility({
  hideWithControls,
  showControls,
  delay = 3000
}: UseCursorVisibilityProps) {
  const cursorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHiddenRef = useRef(false);

  const showCursor = useCallback(() => {
    document.body.style.cursor = 'default';
    isHiddenRef.current = false;
  }, []);

  const hideCursor = useCallback(() => {
    if (hideWithControls) {
      document.body.style.cursor = 'none';
      isHiddenRef.current = true;
    }
  }, [hideWithControls]);

  const resetCursorTimer = useCallback(() => {
    if (cursorTimeoutRef.current) {
      clearTimeout(cursorTimeoutRef.current);
    }

    // Mostrar cursor inmediatamente cuando se mueve
    showCursor();

    // Programar ocultación después del delay
    cursorTimeoutRef.current = setTimeout(() => {
      hideCursor();
    }, delay);
  }, [showCursor, hideCursor, delay]);

  useEffect(() => {
    if (!hideWithControls) {
      showCursor();
      return;
    }

    // Manejar movimiento del mouse
    const handleMouseMove = () => {
      resetCursorTimer();
    };

    // Manejar clics del mouse
    const handleMouseClick = () => {
      resetCursorTimer();
    };

    // Manejar teclas del teclado (solo teclas que no sean de navegación)
    const handleKeyPress = (e: KeyboardEvent) => {
      // Solo mostrar cursor con teclas que no sean de navegación
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        resetCursorTimer();
      }
    };

    // Agregar event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseClick);
    document.addEventListener('keydown', handleKeyPress);
    // No agregamos listener para scroll/wheel para evitar que la ruedita muestre el cursor

    // Iniciar el timer
    resetCursorTimer();

    return () => {
      // Limpiar event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseClick);
      document.removeEventListener('keydown', handleKeyPress);
      
      // Limpiar timeout
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
      
      // Restaurar cursor al desmontar
      showCursor();
    };
  }, [hideWithControls, delay, resetCursorTimer]);

  // Sincronizar con el estado de los controles
  useEffect(() => {
    if (!hideWithControls) return;

    if (showControls) {
      showCursor();
    } else if (!isHiddenRef.current) {
      // Solo ocultar si no está ya oculto por inactividad
      const timer = setTimeout(hideCursor, 500);
      return () => clearTimeout(timer);
    }
  }, [showControls, hideWithControls, hideCursor]);

  return {
    isCursorHidden: isHiddenRef.current,
    showCursor,
    hideCursor,
    resetCursorTimer
  };
}
