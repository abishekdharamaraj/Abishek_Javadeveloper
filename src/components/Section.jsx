import { motion, useReducedMotion } from 'framer-motion';

export default function Section({ id, kicker, title, children, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby={`${id}-title`} className={`editorial-section ${className}`.trim()} id={id}>
      <div className="page-width section-grid">
        <header className="section-aside">
          {kicker && <span className="section-kicker">{kicker}</span>}
          <h2 className="section-title serif" id={`${id}-title`}>{title}</h2>
        </header>
        <motion.div
          className="section-content"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}