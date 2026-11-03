import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme.js';
import Preloader from './components/Preloader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollProgress />
      <AnimatePresence onExitComplete={() => setIntroComplete(true)}>
        {preloaderVisible && <Preloader onComplete={() => setPreloaderVisible(false)} />}
      </AnimatePresence>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero active={introComplete} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}