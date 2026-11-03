import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(onComplete, reduceMotion ? 50 : 1550);
    return () => window.clearTimeout(timer);
  }, [onComplete, reduceMotion]);

  return (
    <motion.div
      animate={{ y: 0 }}
      className="preloader"
      exit={{ y: '-101%', transition: { duration: reduceMotion ? 0.01 : 0.95, ease: [0.76, 0, 0.24, 1] } }}
      initial={{ y: 0 }}
      role="presentation"
    >
      <svg aria-hidden="true" className="preloader-mark" viewBox="0 0 132 96">
        <motion.path
          animate={{ pathLength: 1, fill: 'var(--gold)' }}
          d="M8 78 35 17l27 61M18 56h34M3 78h17m31 0h17m-36-54h22M67 18h14c23 0 35 12 35 30S104 78 81 78H67zM61 18h20m-20 60h20"
          initial={{ pathLength: 0, fill: 'transparent' }}
          transition={{
            pathLength: { duration: reduceMotion ? 0.01 : 1.05, ease: [0.22, 1, 0.36, 1] },
            fill: { duration: reduceMotion ? 0.01 : 0.35, delay: reduceMotion ? 0 : 0.8 },
          }}
        />
      </svg>
    </motion.div>
  );
}