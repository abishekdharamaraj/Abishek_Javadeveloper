import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data.js';
import Icon from './Icon.jsx';
import Section from './Section.jsx';

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="projects" kicker="Personal project" title={<>One considered <em>application.</em></>}>
      <div className="projects-list">
        {projects.map((project) => (
          <motion.article className="project-row" key={project.name} whileHover={reduceMotion ? undefined : { x: 5 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="project-title serif">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul aria-label="Technologies used" className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag.name}><Icon name={tag.icon} />{tag.name}</li>
              ))}
            </ul>
            <a className="project-github" href={project.href} rel="noreferrer" target="_blank">
              <Icon name="external" /> View on GitHub
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}