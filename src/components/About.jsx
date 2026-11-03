import { profile } from '../data.js';
import Section from './Section.jsx';

export default function About() {
  return (
    <Section id="about" kicker="A little about my work" title={<>From data to <em>dependable systems.</em></>}>
      <p className="about-statement serif">{profile.aboutStatement}</p>
      <p className="about-copy">{profile.aboutCopy}</p>
      <div className="about-facts">
        <span>{profile.experience}</span>
        <span>{profile.backendExperience}</span>
        <span>{profile.location}</span>
      </div>
    </Section>
  );
}