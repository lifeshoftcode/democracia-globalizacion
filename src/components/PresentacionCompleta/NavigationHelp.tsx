'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NavigationHelpProps {
  show: boolean;
  supportsTouch: boolean;
  supportsGamepad: boolean;
}

export function NavigationHelp({ show, supportsTouch, supportsGamepad }: NavigationHelpProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-8 bg-black/80 backdrop-blur-sm text-white p-6 rounded-xl shadow-2xl max-w-sm z-40"
        >
          <h3 className="font-bold text-lg mb-4 text-center">
            💡 Controles de Navegación
          </h3>
          
          <div className="space-y-3 text-sm">
            {/* Controles básicos */}
            <div className="bg-white/10 rounded-lg p-3">
              <h4 className="font-semibold mb-2">⌨️ Teclado</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span>← →</span><span>Navegar</span>
                <span>F</span><span>Pantalla completa</span>
                <span>ESC</span><span>Salir pantalla completa</span>
                <span>Home</span><span>Ir al inicio</span>
              </div>
            </div>

            {/* Touch */}
            {supportsTouch && (
              <div className="bg-white/10 rounded-lg p-3">
                <h4 className="font-semibold mb-2">👆 Gestos Táctiles</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span>Swipe ←→</span><span>Navegar</span>
                  <span>Swipe ↑↓</span><span>Navegar</span>
                </div>
              </div>
            )}

            {/* Gamepad */}
            {supportsGamepad && (
              <div className="bg-white/10 rounded-lg p-3">
                <h4 className="font-semibold mb-2">🎮 Gamepad</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span>A/B</span><span>Navegar</span>
                  <span>D-pad</span><span>Direccional</span>
                </div>
              </div>
            )}

            {/* Controles remotos */}
            <div className="bg-white/10 rounded-lg p-3">
              <h4 className="font-semibold mb-2">📱 Control & Pantalla</h4>
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <span>Control remoto</span><span>Funciona como ← →</span>
                <span>Botón pantalla</span><span>Pantalla completa</span>
              </div>
              <div className="text-xs text-center text-white/70">
                La mayoría de controles remotos de presentación funcionan 
                automáticamente con esta aplicación
              </div>
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-white/60">
            Este mensaje se ocultará automáticamente
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
