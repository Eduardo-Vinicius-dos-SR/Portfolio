import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { useSection } from './context/SectionContext';
import { lazy, Suspense, useEffect } from 'react';

const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Formation = lazy(() => import("./components/Formation/Formation"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Technologies = lazy(() => import("./components/Technologies/Technologies"));

const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  projects: <Projects />,
  contact: <Contact />,
  about: <About />,
  technologies: <Technologies />,
  formation: <Formation />,
  skills: <Skills />,
};

const PRELOADERS = [
  () => import('./components/Projects/Projects'),
  () => import('./components/Contact/Contact'),
  () => import('./components/About/About'),
  () => import('./components/Technologies/Technologies'),
  () => import('./components/Formation/Formation'),
  () => import('./components/Skills/Skills'),
];

function App() {
  const { activeSection } = useSection()

  useEffect(() => {
    if (activeSection !== 'home') return;
    requestAnimationFrame(() => {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [activeSection]);

  useEffect(() => {
    const idle = (window as any).requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200));
    idle(() => {
      PRELOADERS.forEach((preload) => preload());
    });
  }, []);

  return (
    <div className="App text-[var(--text)]" style={{ background: "var(--bg)" }}>
      <Header />
      <Hero />

      <AnimatePresence mode='wait'>
        {activeSection && SECTION_COMPONENTS[activeSection] && (
          <motion.div key={activeSection} id={activeSection} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.8 }} onAnimationComplete={() => {
            document.getElementById(activeSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            <Suspense fallback={<div className="min-h-[921px] flex justify-center items-center text-center text-xl">Carregando...</div>}>
              {SECTION_COMPONENTS[activeSection]}
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export default App