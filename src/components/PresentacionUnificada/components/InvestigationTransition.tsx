'use client';

import { motion } from 'framer-motion';

interface InvestigationTransitionProps {
  show: boolean;
  authorName: string;
}

export function InvestigationTransition({
  show,
  authorName
}: InvestigationTransitionProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute top-5 right-5 z-30 bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3"
    >
      <p className="text-white text-lg font-medium">
        {authorName}
      </p>
    </motion.div>
  );
}
