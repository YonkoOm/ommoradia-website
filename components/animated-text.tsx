import React from 'react';
import {
  motion,
  Variants,
  HTMLMotionProps,
  Transition,
  VariantLabels
} from 'framer-motion';

interface Props extends HTMLMotionProps<'span'> {
  text: string;
  delay?: number;
  className?: string;
  letterAnimation?: { color: VariantLabels; transition: Transition };
}

const AnimatedText: React.FC<Props> = ({
  text,
  delay = 0,
  className: styling,
  letterAnimation,
  ...additionalLetterAnimations
}) => {
  const letters: Variants = {
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
      {[...text].map((letter, index) => (
        <motion.span
          variants={letters}
          className={styling}
          animate={letterAnimation}
          {...additionalLetterAnimations}
          key={letter + index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
