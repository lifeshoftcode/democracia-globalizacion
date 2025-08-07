'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PresentacionCompleta } from '@/components/PresentacionCompleta';

const sections = [
  { 
    id: 'principios-democracia', 
    title: 'Principios de la Democracia',
    author: 'Rosanny Ramos Medina',
    component: PresentacionCompleta 
  }
  // Agregar más investigaciones aquí
];

export function SeccionPageClient() {
  const params = useParams();
  const currentId = params.id as string;
  
  const currentIndex = sections.findIndex(section => section.id === currentId);
  const currentSection = sections[currentIndex];
  const prevSection = sections[currentIndex - 1];
  const nextSection = sections[currentIndex + 1];

  if (!currentSection) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sección no encontrada</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const ComponentToRender = currentSection.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Navigation Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 z-50 p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white"
            >
              <Home className="w-5 h-5" />
            </Link>
            
            {prevSection && (
              <Link 
                href={`/seccion/${prevSection.id}`}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            )}
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-center">
            <h2 className="font-semibold">{currentSection.title}</h2>
            <p className="text-sm text-white/70">{currentSection.author}</p>
          </div>

          <div className="flex items-center space-x-4">
            {nextSection && (
              <Link 
                href={`/seccion/${nextSection.id}`}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pt-20"
      >
        <ComponentToRender />
      </motion.div>

      {/* Progress Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-6 left-6 text-white/60 text-sm"
      >
        Sección {currentIndex + 1} de {sections.length}
      </motion.div>
    </div>
  );
}
