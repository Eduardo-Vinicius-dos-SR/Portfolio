import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Formation from './components/Formation/Formation';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div className="App bg-[linear-gradient(162deg,_rgba(28,2,2,1)_1%,_rgba(7,7,46,1)_58%,_rgba(35,7,61,1)_92%)]">
      <Header />
      <Hero />
      <Projects active={false} />
      <Contact active={true} />
      <About active={false} />
      {
        // https://api.github.com/users/Eduardo-Vinicius-dos-SR

        // type EduardoData = {
        //   avatar_url: string;
        //   login: string;
        //   url: string;
        //   hireable: boolean | null; 
        //   reposQuantity: number;
        // }
      }
      <Technologies active={false} />
      <Formation active={false} />
      <Skills active={false} />
    </div>
  )
}


export default App