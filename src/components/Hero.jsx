import { motion, useReducedMotion } from 'framer-motion';
import { links, profile } from '../data.js';
import Terminal from './Terminal.jsx';

export default function Hero({ active }) {
  const reduceMotion = useReducedMotion();
  const heroMotion = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: reduceMotion ? 0.01 : 0.95, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section aria-labelledby="hero-title" className="hero page-width" id="home">
      <svg aria-hidden="true" className="hero-engraving" focusable="false" viewBox="0 0 720 720">
        <circle cx="360" cy="360" r="286" /><circle cx="360" cy="360" r="258" /><circle cx="360" cy="360" r="224" />
        <path d="M360 28v37m0 590v37M28 360h37m590 0h37M125 125l27 27m416 416 27 27m0-470-27 27M152 568l-27 27M360 108v42m0 420v42M108 360h42m420 0h42" />
        <path d="M360 136a224 224 0 0 1 224 224M584 360a224 224 0 0 1-224 224" />
        <circle className="dial-center" cx="360" cy="360" r="3" />
      </svg>
      <div className="hero-meta">
        <span>{profile.role}</span>
        <span className="availability">{profile.location}</span>
      </div>
      <div className="hero-main">
        <div className="hero-title-mask">
          <motion.h1
            className="hero-title serif"
            id="hero-title"
            initial={reduceMotion ? false : { y: '112%', opacity: 0 }}
            animate={active ? { y: 0, opacity: 1 } : { y: '112%', opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 1.05, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
          </motion.h1>
        </div>
        <motion.div className="hero-rule" initial={{ scaleX: 0 }} animate={{ scaleX: active ? 1 : 0 }} style={{ originX: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }} />
        <motion.p className="hero-lead" {...heroMotion(0.8)}>{profile.lead}</motion.p>
        <motion.div className="hero-actions" {...heroMotion(0.98)}>
          <a className="button button-primary" href="#contact">Get in touch</a>
          <a className="button button-outline" href={links.github} rel="noreferrer" target="_blank">GitHub</a>
        </motion.div>
      </div>
      <Terminal active={active} />
      <motion.div className="hero-bottom" {...heroMotion(0.65)}>
        <span>Java <b>·</b> Spring Boot <b>·</b> REST APIs <b>·</b> MySQL</span>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}