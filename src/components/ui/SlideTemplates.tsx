'use client';

import { motion } from 'framer-motion';
import { 
  SlideContainer, 
  SlideHeader, 
  SlideAuthorInfo, 
  SlideImage, 
  SlideCard, 
  SlideGrid, 
  SlideListItem, 
  SlideHighlightBox,
  SlideText,
  SlideStatCard
} from './SlideComponents';

// Tipos para slides específicos
export interface PortadaSlideData {
  titulo: string;
  subtitulo: string;
  autor: string;
  identificacion: string;
  fecha?: string;
  imagen?: string;
  descripcionImagen?: string;
}

export interface IntroduccionSlideData {
  titulo: string;
  contenido: string;
  puntosClave: string[];
}

export interface ContenidoSlideData {
  titulo: string;
  subtitulo?: string;
  items: Array<{
    numero?: number;
    titulo: string;
    descripcion: string;
    icono?: string;
    color?: 'blue' | 'red' | 'green' | 'orange' | 'purple';
  }>;
}

export interface ResumenSlideData {
  titulo: string;
  subtitulo?: string;
  puntos: string[];
  mensaje?: string;
}

export interface ConclusionSlideData {
  titulo: string;
  contenido: string;
  puntosClave: string[];
  llamadoAccion?: string;
}

// Slide de portada reutilizable
export function PortadaSlideTemplate({ 
  slide, 
  gradientColors = 'from-blue-400 to-cyan-400',
  showImage = true 
}: { 
  slide: PortadaSlideData;
  gradientColors?: string;
  showImage?: boolean;
}) {
  return (
    <SlideContainer maxWidth="4xl">
      {showImage && slide.imagen && (
        <SlideImage 
          src={slide.imagen}
          alt={slide.descripcionImagen || slide.titulo}
          width={400}
          height={300}
          delay={0.2}
        />
      )}
      
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent mb-6 text-center`}
      >
        {slide.titulo}
      </motion.h1>
      
      <SlideText size="2xl" delay={0.6} className="mb-8">
        {slide.subtitulo}
      </SlideText>
      
      <SlideAuthorInfo 
        autor={slide.autor}
        identificacion={slide.identificacion}
        fecha={slide.fecha}
        delay={0.8}
      />
    </SlideContainer>
  );
}

// Slide de introducción reutilizable
export function IntroduccionSlideTemplate({ 
  slide,
  columns = 4,
  iconType = 'number'
}: { 
  slide: IntroduccionSlideData;
  columns?: 1 | 2 | 3 | 4;
  iconType?: 'number' | 'dot' | 'check';
}) {
  return (
    <SlideContainer maxWidth="7xl">
      <SlideHeader titulo={slide.titulo} delay={0} />
      
      <SlideText delay={0.2} className="mb-8">
        {slide.contenido}
      </SlideText>
      
      <SlideGrid columns={columns} delay={0.4}>
        {slide.puntosClave.map((punto, index) => (
          <SlideCard key={index} index={index} delay={0.6}>
            <SlideListItem 
              content={punto}
              index={index}
              icon={iconType}
              delay={0}
            />
          </SlideCard>
        ))}
      </SlideGrid>
    </SlideContainer>
  );
}

// Slide de contenido principal (principios, amenazas, etc.)
export function ContenidoSlideTemplate({ 
  slide,
  columns = 3,
  showNumbers = true
}: { 
  slide: ContenidoSlideData;
  columns?: 1 | 2 | 3 | 4;
  showNumbers?: boolean;
}) {
  return (
    <SlideContainer maxWidth="6xl">
      <SlideHeader 
        titulo={slide.titulo}
        subtitulo={slide.subtitulo}
        delay={0}
      />
      
      <SlideGrid columns={columns} gap={8}>
        {slide.items.map((item, index) => (
          <SlideStatCard
            key={index}
            numero={showNumbers ? (item.numero || index + 1) : ''}
            titulo={item.titulo}
            descripcion={item.descripcion}
            icono={item.icono}
            index={index}
            delay={0.4}
            color={item.color || 'blue'}
          />
        ))}
      </SlideGrid>
    </SlideContainer>
  );
}

// Slide de resumen reutilizable
export function ResumenSlideTemplate({ 
  slide,
  variant = 'primary'
}: { 
  slide: ResumenSlideData;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}) {
  return (
    <SlideContainer maxWidth="5xl">
      <SlideHeader 
        titulo={slide.titulo}
        subtitulo={slide.subtitulo}
        delay={0}
      />
      
      <SlideGrid columns={3} gap={4} delay={0.2} className="mb-12">
        {slide.puntos.map((punto, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
          >
            <span className="text-white text-lg font-medium">{punto}</span>
          </motion.div>
        ))}
      </SlideGrid>
      
      {slide.mensaje && (
        <SlideHighlightBox variant={variant} delay={1.2}>
          <p className="text-xl text-white font-medium">{slide.mensaje}</p>
        </SlideHighlightBox>
      )}
    </SlideContainer>
  );
}

// Slide de conclusión reutilizable
export function ConclusionSlideTemplate({ 
  slide,
  variant = 'success'
}: { 
  slide: ConclusionSlideData;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}) {
  return (
    <SlideContainer maxWidth="5xl">
      <SlideHeader titulo={slide.titulo} delay={0} />
      
      <SlideText delay={0.2} className="mb-12">
        {slide.contenido}
      </SlideText>
      
      <SlideGrid columns={2} gap={6} delay={0.4} className="mb-12">
        {slide.puntosClave.map((punto, index) => (
          <SlideCard key={index} index={index} delay={0.6}>
            <SlideListItem 
              content={punto}
              index={index}
              icon="check"
              delay={0}
            />
          </SlideCard>
        ))}
      </SlideGrid>
      
      {slide.llamadoAccion && (
        <SlideHighlightBox variant={variant} delay={1.2}>
          <h3 className="text-2xl font-bold text-white mb-4">Llamado a la Acción</h3>
          <p className="text-xl text-white font-medium">{slide.llamadoAccion}</p>
        </SlideHighlightBox>
      )}
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-center mt-12"
      >
        <p className="text-gray-400 text-lg">
          Gracias por su atención
        </p>
      </motion.div>
    </SlideContainer>
  );
}
