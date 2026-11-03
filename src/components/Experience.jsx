import { motion, useReducedMotion } from 'framer-motion';
import { experience } from '../data.js';
import Section from './Section.jsx';

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="experience" kicker="Professional experience" title={<>A path shaped by <em>curiosity.</em></>}>
      <div className="timeline">
        <motion.div
          aria-hidden="true"
          className="timeline-line"
          initial={{ scaleY: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: reduceMotion ? 0.01 : 1.35, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        />
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            key={`${item.role}-${item.date}`}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <span aria-hidden="true" className={`timeline-marker${index === 0 ? ' is-current' : ''}`} />
            <p className="timeline-date">{item.date}</p>
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}