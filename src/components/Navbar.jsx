import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { links, navigation, profile } from '../data.js';
import Icon from './Icon.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import './Navbar.css';

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="page-width nav-inner">
        <a aria-label={`${profile.name}, home`} className="monogram serif" href="#home" onClick={closeMenu}>
          A<span>D</span>
        </a>
        <nav aria-label="Main navigation" className="nav-links">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a aria-label="GitHub profile" className="nav-social" href={links.github} rel="noreferrer" target="_blank">
            <Icon name="git" />
          </a>
          <ThemeToggle onToggle={onToggleTheme} theme={theme} />
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.25 }}
          >
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}