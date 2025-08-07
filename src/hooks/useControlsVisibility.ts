import { useState, useEffect, useCallback, useRef } from 'react';

export function useControlsVisibility(timeout: number = 3000) {
  const [showControls, setShowControls] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Función para mostrar controles y reiniciar el temporizador
  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    
    // Limpiar timeout anterior si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Establecer nuevo timeout para ocultar controles
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, timeout);
  }, [timeout]);

  // Detectar actividad del usuario
  useEffect(() => {
    const handleMouseMove = () => {
      showControlsTemporarily();
    };

    const handleMouseClick = () => {
      showControlsTemporarily();
    };

    const handleTouch = () => {
      showControlsTemporarily();
    };

    // Solo mostrar controles con teclas específicas (no navegación)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Solo mostrar controles con teclas que no sean de navegación
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        showControlsTemporarily();
      }
    };

    // Mostrar controles inicialmente
    showControlsTemporarily();

    // Agregar event listeners específicos
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouch);
    // Removemos 'scroll' para que la ruedita del mouse no muestre controles

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouch);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showControlsTemporarily]);

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { showControls, showControlsTemporarily };
}
