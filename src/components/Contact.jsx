import { links, profile } from '../data.js';
import Section from './Section.jsx';

export default function Contact() {
  return (
    <Section id="contact" kicker="Start a conversation" title={<>Open to the <em>right next step.</em></>}>
      <p className="contact-statement serif">{profile.contactStatement}</p>
      <a className="contact-email serif" href={profile.emailHref} rel="noreferrer" target="_blank">{profile.email}</a>
      <nav aria-label="Contact links" className="contact-links">
        <a href={links.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
        <a href={links.github} rel="noreferrer" target="_blank">GitHub</a>
        <a href={links.resume} rel="noreferrer" target="_blank">Download résumé</a>
        <a href={profile.phoneHref}>{profile.phone}</a>
      </nav>
    </Section>
  );
}