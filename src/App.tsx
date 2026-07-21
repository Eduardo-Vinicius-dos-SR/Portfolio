import { AnimatePresence, motion } from 'framer-motion';
import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Formation from './components/Formation/Formation';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Technologies from './components/Technologies/Technologies';
import { useSection } from './context/SectionContext';
import { useEffect } from 'react';

const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  projects: <Projects />,
  contact: <Contact />,
  about: <About />,
  technologies: <Technologies />,
  formation: <Formation />,
  skills: <Skills />,
};

function App() {
  const { activeSection } = useSection()

  useEffect(() => {
    if (activeSection !== 'home') return;
    requestAnimationFrame(() => {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [activeSection]);

  return (
    <div className="App bg-[linear-gradient(162deg,_rgba(28,2,2,1)_1%,_rgba(7,7,46,1)_58%,_rgba(35,7,61,1)_92%)]">
      <Header />
      <Hero />

      <AnimatePresence mode='wait'>
        {activeSection && SECTION_COMPONENTS[activeSection] && (
          <motion.div key={activeSection} id={activeSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} onAnimationComplete={() => {
            document.getElementById(activeSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            {SECTION_COMPONENTS[activeSection]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export default App