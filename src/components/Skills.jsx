import { skills } from '../data.js';
import Icon from './Icon.jsx';
import Section from './Section.jsx';

export default function Skills() {
  return (
    <Section className="skills-section" id="skills" kicker="Tools and disciplines" title={<>Built on <em>good fundamentals.</em></>}>
      <div className="skills-columns">
        {skills.map((group) => (
          <article className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill.name}><Icon name={skill.icon} /><span>{skill.name}</span></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}