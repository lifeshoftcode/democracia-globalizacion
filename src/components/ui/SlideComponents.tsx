'use client';

import { motion } from 'framer-motion';
import { User, Calendar, Book } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

// Tipos para los componentes reutilizables
export interface BaseSlideProps {
  children?: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export interface SlideHeaderProps {
  titulo: string;
  subtitulo?: string;
  className?: string;
  gradientColors?: string;
  delay?: number;
}

export interface SlideAuthorInfoProps {
  autor: string;
  identificacion: string;
  fecha?: string;
  delay?: number;
}

export interface SlideImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
}

export interface SlideCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  index?: number;
}

export interface SlideGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8 | 12;
  className?: string;
  delay?: number;
}

export interface SlideListItemProps {
  content: string;
  index: number;
  icon?: 'number' | 'dot' | 'check' | ReactNode;
  delay?: number;
  iconColor?: string;
}

export interface SlideHighlightBoxProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
  delay?: number;
}

// Contenedor base para slides
export function SlideContainer({ children, className = '', maxWidth = '5xl' }: BaseSlideProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
}

// Header de slide con título y subtítulo
export function SlideHeader({ 
  titulo, 
  subtitulo, 
  className = '', 
  gradientColors = 'from-blue-400 to-cyan-400',
  delay = 0 
}: SlideHeaderProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent mb-4`}>
        {titulo}
      </h2>
      {subtitulo && (
        <p className="text-xl text-gray-300">{subtitulo}</p>
      )}
    </motion.div>
  );
}

// Información del autor
export function SlideAuthorInfo({ autor, identificacion, fecha, delay = 0.8 }: SlideAuthorInfoProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="flex items-center justify-center space-x-6 text-gray-400"
    >
      <div className="flex items-center space-x-2">
        <User className="w-5 h-5" />
        <span>{autor}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Book className="w-5 h-5" />
        <span>{identificacion}</span>
      </div>
      {fecha && (
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>{fecha}</span>
        </div>
      )}
    </motion.div>
  );
}

// Imagen de slide con animación
export function SlideImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = '', 
  delay = 0.2 
}: SlideImageProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`mb-8 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto rounded-2xl shadow-2xl"
      />
    </motion.div>
  );
}

// Card reutilizable para contenido
export function SlideCard({ 
  children, 
  className = '', 
  hoverEffect = true, 
  delay = 0, 
  index = 0 
}: SlideCardProps) {
  const hoverClasses = hoverEffect ? 'hover:border-white/40 hover:bg-white/10' : '';
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1 }}
      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Grid responsivo para organizar contenido
export function SlideGrid({ 
  children, 
  columns = 3, 
  gap = 6, 
  className = '', 
  delay = 0.4 
}: SlideGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
  };

  const gapClasses = {
    4: 'gap-4',
    6: 'gap-6', 
    8: 'gap-8',
    12: 'gap-12'
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`grid ${gridClasses[columns]} ${gapClasses[gap]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Item de lista con diferentes tipos de iconos
export function SlideListItem({ 
  content, 
  index, 
  icon = 'number', 
  delay = 0.6,
  iconColor = 'bg-blue-500'
}: SlideListItemProps) {
  const renderIcon = () => {
    if (typeof icon === 'object') {
      return icon; // ReactNode personalizado
    }
    
    switch (icon) {
      case 'number':
        return (
          <div className={`w-8 h-8 ${iconColor} rounded-full flex items-center justify-center text-white font-bold`}>
            {index + 1}
          </div>
        );
      case 'dot':
        return <div className={`w-2 h-2 ${iconColor.replace('bg-', 'bg-')} rounded-full mt-2 flex-shrink-0`} />;
      case 'check':
        return (
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">✓</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      className="flex items-start space-x-3 text-gray-300"
    >
      {renderIcon()}
      <span className="text-white">{content}</span>
    </motion.div>
  );
}

// Caja destacada para contenido importante
export function SlideHighlightBox({ 
  children, 
  variant = 'primary', 
  className = '', 
  delay = 1.2 
}: SlideHighlightBoxProps) {
  const variantClasses = {
    primary: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
    secondary: 'from-gray-500/20 to-slate-500/20 border-gray-400/30',
    success: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
    warning: 'from-yellow-500/20 to-orange-500/20 border-yellow-400/30',
    error: 'from-red-500/20 to-pink-500/20 border-red-400/30'
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`text-center bg-gradient-to-r ${variantClasses[variant]} backdrop-blur-sm rounded-2xl p-8 border ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Componente para texto largo con animación
export function SlideText({ 
  children, 
  className = '', 
  size = 'xl',
  delay = 0.2 
}: {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  delay?: number;
}) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`${sizeClasses[size]} text-gray-300 text-center leading-relaxed ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Componente para número destacado o estadística
export function SlideStatCard({ 
  numero, 
  titulo, 
  descripcion, 
  icono, 
  index = 0, 
  delay = 0,
  color = 'blue'
}: {
  numero: string | number;
  titulo: string;
  descripcion: string;
  icono?: ReactNode | string;
  index?: number;
  delay?: number;
  color?: 'blue' | 'red' | 'green' | 'orange' | 'purple';
}) {
  const colorClasses = {
    blue: 'bg-blue-500 text-blue-400',
    red: 'bg-red-500 text-red-400',
    green: 'bg-green-500 text-green-400',
    orange: 'bg-orange-500 text-orange-400',
    purple: 'bg-purple-500 text-purple-400'
  };

  return (
    <SlideCard delay={delay} index={index}>
      <div className="text-center">
        {icono && (
          <div className="text-6xl mb-4">
            {typeof icono === 'string' ? icono : icono}
          </div>
        )}
        <div className={`w-12 h-12 ${colorClasses[color].split(' ')[0]} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
          {numero}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {titulo}
        </h3>
        <p className="text-gray-300 text-center leading-relaxed">
          {descripcion}
        </p>
      </div>
    </SlideCard>
  );
}
