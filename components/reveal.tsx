'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type FadeInProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      className={className ? `reveal ${className}` : 'reveal'}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
