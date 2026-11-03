import { motion, useReducedMotion } from 'framer-motion';
import './Terminal.css';

const startupLines = [
  'Starting PortfolioApplication',
  'Tomcat started on port 8080',
  'Connected to MySQL',
  'Security filter chain ready',
  'Started PortfolioApplication',
];

export default function Terminal({ active }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      aria-label="Spring Boot application startup demonstration"
      className="terminal-card"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="terminal-top">
        <span>Local development</span>
        <span aria-hidden="true" className="terminal-dots"><i /><i /><i /></span>
      </div>
      <div aria-live="off" className="terminal-lines">
        <p className="terminal-command">~/portfolio $ mvn spring-boot:run</p>
        {startupLines.map((line, index) => (
          <motion.p
            className="terminal-line"
            key={line}
            initial={reduceMotion ? false : { opacity: 0, y: 5 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.35, delay: reduceMotion ? 0 : 1.1 + index * 0.18 }}
          >
            <span className="terminal-info">INFO</span> {line}
          </motion.p>
        ))}
        <motion.p
          className="terminal-line terminal-ready"
          initial={reduceMotion ? false : { opacity: 0, y: 5 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.35, delay: reduceMotion ? 0 : 2.1 }}
        >
          Ready for requests<span aria-hidden="true" className="terminal-cursor" />
        </motion.p>
      </div>
    </motion.aside>
  );
}