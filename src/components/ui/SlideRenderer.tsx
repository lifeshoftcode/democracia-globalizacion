'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Block {
  kind: string;
  title?: string;
  subtitle?: string;
  text?: string;
  items?: string[];
  badges?: string[];
  image?: { src: string; alt: string };
  cite?: string;
  left?: { heading?: string; items: string[] };
  right?: { heading?: string; items: string[] };
  tabs?: Array<{ label: string; blocks: Block[] }>;
  behavior?: string;
  src?: string;
  alt?: string;
  caption?: string;
  participants?: Array<{ name: string; topic: string; code?: string }>;
}

interface Slide {
  layout: string;
  blocks: Block[];
}

interface SlideRendererProps {
  slide: Slide;
  className?: string;
}

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export function SlideRenderer({ slide, className = "" }: SlideRendererProps) {
  const [imageLoadErrors, setImageLoadErrors] = useState<{[key: string]: boolean}>({});
  
  const handleImageError = (blockIndex: number) => {
    setImageLoadErrors(prev => ({
      ...prev,
      [blockIndex]: true
    }));
  };

  const renderBlock = (block: Block, index: number) => {
    switch (block.kind) {
      case 'cover':
        const hasImageError = imageLoadErrors[index];
        const hasImage = block.image && !hasImageError;
        
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <div className={`space-y-4 ${!hasImage ? 'my-16' : ''}`}>
              <h1 className={`font-bold text-white ${!hasImage ? 'text-7xl mb-8' : 'text-6xl'}`}>
                {block.title}
              </h1>
              {block.subtitle && (
                <p className={`text-white/80 mx-auto ${!hasImage ? 'text-3xl max-w-5xl mb-12' : 'text-2xl max-w-4xl'}`}>
                  {block.subtitle}
                </p>
              )}
              {block.badges && (
                <div className="flex justify-center gap-3 mt-6">
                  {block.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`bg-white/20 rounded-full text-white font-medium ${!hasImage ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-base'}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {block.image && !hasImageError && (
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 via-green-400/20 to-blue-600/20 rounded-3xl blur-xl animate-pulse"></div>
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={640}
                  height={384}
                  onError={() => handleImageError(index)}
                  className="relative mx-auto w-[40rem] h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/60 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl ring-6 ring-white/20 hover:ring-white/50"
                />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-1/2 -left-4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute bottom-1/4 -right-4 w-5 h-5 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              </div>
            )}
            
            {!hasImage && (
              <div className="flex justify-center mt-8">
                <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </motion.div>
        );

      case 'paragraph':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white mb-4">
                {block.title}
              </h2>
            )}
            <p className="text-xl text-white/90 leading-relaxed">
              {block.text}
            </p>
          </motion.div>
        );

      case 'bullets':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white mb-6">
                {block.title}
              </h2>
            )}
            <ul className="space-y-3">
              {block.items?.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  className="flex items-start gap-3 text-white/90"
                >
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-xl leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );

      case 'split':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                {block.title}
              </h2>
            )}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                {block.left?.heading && (
                  <h3 className="text-xl font-semibold text-white/90">
                    {block.left.heading}
                  </h3>
                )}
                <ul className="space-y-2">
                  {block.left?.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {block.right?.heading && (
                  <h3 className="text-xl font-semibold text-white/90">
                    {block.right.heading}
                  </h3>
                )}
                <ul className="space-y-2">
                  {block.right?.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );

      case 'conclusion':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-sm">
              {block.title && (
                <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  {block.title}
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                </h2>
              )}
              <p className="text-2xl text-white/95 leading-relaxed font-medium italic max-w-4xl mx-auto">
                {block.text}
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              </div>
            </div>
          </motion.div>
        );

      case 'quote':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4"
          >
            <blockquote className="text-3xl italic text-white/90 max-w-4xl mx-auto">
              &quot;{block.text}&quot;
            </blockquote>
            {block.cite && (
              <cite className="text-xl text-white/70">— {block.cite}</cite>
            )}
          </motion.div>
        );

      case 'image':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white mb-6">
                {block.title}
              </h2>
            )}
            <Image
              src={block.src!}
              alt={block.alt!}
              width={800}
              height={600}
              className="mx-auto max-w-full max-h-96 object-contain rounded-lg shadow-2xl"
            />
            {block.caption && (
              <p className="text-white/70 text-sm">{block.caption}</p>
            )}
          </motion.div>
        );

      case 'tabs':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                {block.title}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {block.tabs?.map((tab, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {tab.label}
                  </h3>
                  <div className="space-y-4">
                    {tab.blocks.map((tabBlock, j) => (
                      <div key={j}>
                        {renderBlock(tabBlock, j)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'participants_grid':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                {block.title}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {block.participants?.map((participant, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.1) + (i * 0.1) }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {participant.name}
                    </h3>
                    {participant.code && (
                      <p className="text-xs text-white/60 font-mono">
                        {participant.code}
                      </p>
                    )}
                    <p className="text-white/80 text-sm leading-relaxed">
                      {participant.topic}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'cards_grid':
        return (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {block.title && (
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                {block.title}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {block.cards?.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.1) + (i * 0.1) }}
                  className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 ${
                    card.highlight === 'positive' 
                      ? 'bg-green-500/10 border-green-400/30 hover:bg-green-500/20' 
                      : card.highlight === 'negative'
                      ? 'bg-red-500/10 border-red-400/30 hover:bg-red-500/20'
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {card.icon && (
                        <span className="text-2xl">{card.icon}</span>
                      )}
                      <h3 className="text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {card.content.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-white/80 text-lg leading-relaxed">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return (
          <div key={index} className="text-white text-center">
            Tipo de bloque no soportado: {block.kind}
          </div>
        );
    }
  };

  const getLayoutClasses = () => {
    switch (slide.layout) {
      case 'stack':
        return 'space-y-8';
      case 'grid-2':
        return 'grid grid-cols-2 gap-8';
      case 'split-2':
        return 'space-y-8';
      case 'tabs':
        return 'space-y-8';
      default:
        return 'space-y-8';
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center p-8 ${className}`}>
      <div className={`max-w-6xl w-full ${getLayoutClasses()}`}>
        {slide.blocks.map((block, index) => renderBlock(block, index))}
      </div>
    </div>
  );
}
