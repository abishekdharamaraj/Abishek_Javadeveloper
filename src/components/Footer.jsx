import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer safe-bottom">
      <div className="page-width footer-inner">
        <a aria-label="Back to top" className="monogram serif" href="#home">A<span>D</span></a>
        <p>© 2026 Abishek D</p>
        <span className="footer-place">{profile.location}</span>
      </div>
    </footer>
  );
}