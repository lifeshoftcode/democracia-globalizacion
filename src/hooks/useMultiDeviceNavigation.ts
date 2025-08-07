'use client';

import { useEffect, useCallback, useRef } from 'react';

interface UseMultiDeviceNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleFullscreen: () => void;
}

export function useMultiDeviceNavigation({
  onNext,
  onPrevious,
  onFirst,
  onLast,
  onToggleFullscreen
}: UseMultiDeviceNavigationProps) {
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Navegación con teclado (incluye controles remotos que simulan teclas)
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    // Navegación básica
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      onPrevious();
    }
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      onNext();
    }

    // Controles adicionales
    if (e.key === 'Home') {
      e.preventDefault();
      onFirst();
    }
    
    if (e.key === 'End') {
      e.preventDefault();
      onLast();
    }

    // Pantalla completa
    if (e.key === 'F11' || e.key === 'f' || e.key === 'F5') {
      e.preventDefault();
      onToggleFullscreen();
    }

    // Salir de pantalla completa
    if (e.key === 'Escape') {
      e.preventDefault();
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        onFirst(); // Volver al inicio si no está en fullscreen
      }
    }

    // Controles numéricos (para ir a slides específicos)
    if (e.key >= '1' && e.key <= '9') {
      // Se podría implementar navegación directa por números
      console.log(`Navegación directa al slide ${e.key} (por implementar)`);
    }
  }, [onNext, onPrevious, onFirst, onLast, onToggleFullscreen]);

  // Navegación con mouse wheel (scroll)
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    // Debounce para evitar navegación muy rápida
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    
    wheelTimeoutRef.current = setTimeout(() => {
      if (e.deltaY > 0) {
        onNext(); // Scroll hacia abajo = siguiente
      } else if (e.deltaY < 0) {
        onPrevious(); // Scroll hacia arriba = anterior
      }
    }, 100);
  }, [onNext, onPrevious]);

  // Navegación con gestos táctiles (swipe)
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    
    const minSwipeDistance = 50;
    
    // Swipe horizontal tiene prioridad
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        onPrevious(); // Swipe derecha = anterior
      } else {
        onNext(); // Swipe izquierda = siguiente
      }
    }
    // Swipe vertical
    else if (Math.abs(deltaY) > minSwipeDistance) {
      if (deltaY > 0) {
        onPrevious(); // Swipe abajo = anterior
      } else {
        onNext(); // Swipe arriba = siguiente
      }
    }
    
    touchStartRef.current = null;
  }, [onNext, onPrevious]);

  // Navegación con botones del mouse
  const handleMouseDown = useCallback((e: MouseEvent) => {
    // Botón derecho del mouse = siguiente
    if (e.button === 2) {
      e.preventDefault();
      onNext();
    }
    // Botón del medio (wheel click) = pantalla completa
    else if (e.button === 1) {
      e.preventDefault();
      onToggleFullscreen();
    }
    // Botones adicionales del mouse (si existen)
    else if (e.button === 3) { // Botón "Atrás"
      e.preventDefault();
      onPrevious();
    }
    else if (e.button === 4) { // Botón "Adelante"
      e.preventDefault();
      onNext();
    }
  }, [onNext, onPrevious, onToggleFullscreen]);

  // Prevenir menú contextual del botón derecho
  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  // Navegación con gamepad/control (experimental)
  const handleGamepadInput = useCallback(() => {
    const gamepads = navigator.getGamepads();
    for (let i = 0; i < gamepads.length; i++) {
      const gamepad = gamepads[i];
      if (gamepad) {
        // Botón A = siguiente
        if (gamepad.buttons[0]?.pressed) {
          onNext();
        }
        // Botón B = anterior
        if (gamepad.buttons[1]?.pressed) {
          onPrevious();
        }
        // D-pad
        if (gamepad.buttons[14]?.pressed) onPrevious(); // Izquierda
        if (gamepad.buttons[15]?.pressed) onNext();     // Derecha
        if (gamepad.buttons[12]?.pressed) onPrevious(); // Arriba
        if (gamepad.buttons[13]?.pressed) onNext();     // Abajo
      }
    }
  }, [onNext, onPrevious]);

  useEffect(() => {
    // Event listeners
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('contextmenu', handleContextMenu);

    // Gamepad polling (si está disponible)
    let gamepadInterval: NodeJS.Timeout;
    if (typeof navigator !== 'undefined' && 'getGamepads' in navigator) {
      gamepadInterval = setInterval(handleGamepadInput, 100);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('contextmenu', handleContextMenu);
      
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
      
      if (gamepadInterval) {
        clearInterval(gamepadInterval);
      }
    };
  }, [handleKeyPress, handleWheel, handleTouchStart, handleTouchEnd, handleMouseDown, handleContextMenu, handleGamepadInput]);

  return {
    // Información sobre dispositivos detectados
    supportsTouch: typeof window !== 'undefined' && 'ontouchstart' in window,
    supportsGamepad: typeof navigator !== 'undefined' && 'getGamepads' in navigator,
  };
}
