import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
  text: string;
  delay: number;
}

const AnimatedLetters: React.FC<Props> = ({
  text,
  delay,
  ...additionalAnimations
}) => {
  const spanVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 }
    }
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.075, delayChildren: delay }}
      className="flex"
    >
      {[...text].map((letter, index: number) => (
        <motion.span
          variants={spanVariant}
          {...additionalAnimations}
          key={letter + index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
