import './App.css'
import NavItem from './components/NavItem/NavItem'
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import InteractiveCube from './components/InteractiveCube/InteractiveCube';
import Header from './components/Header/Header';

function App() {


  return (
    <div className="App bg-[linear-gradient(162deg,_rgba(28,2,2,1)_1%,_rgba(7,7,46,1)_58%,_rgba(35,7,61,1)_92%)]">
      <Header/>
      <section id="home" className="hero mt-20 pt-40 pb-10 relative flex flex-col justify-center items-center gap-25">

        <div className='flex flex-col gap-4 '>
          <p className='text-2xl'>Olá, visitante!</p>
          <h1 className='text-5xl leading-15'>
            Me chamo <br /><span>Eduardo Vinícius</span>
          </h1>
          <p className='text-2xl'>Desenvolvedor Front-end</p>
          <p className="text-3xl mt-4 flex items-center justify-center gap-12"><span className="w-12 h-[2px] rounded-full bg-white/30"></span> <a className="hover:text-white" href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className="hover:text-white" href="https://github.com/Eduardo-Vinicius-dos-SR" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="hover:text-white" href="mailto:eduardovdsr@email.com?subject=Contato%20pelo%20portfólio&body=Olá,%20Eduardo!" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a> <span className="w-12 h-[2px] rounded-full bg-white/30"></span></p>
        </div>

        <div className='flex flex-col text-2xl items-center gap-6'><p>SCROLL</p><FaArrowDown className='animate-bounce-blink' /></div>

        <InteractiveCube />

      </section>

      <section id="projects">
        {/* <Projects /> */}
      </section>
      <section id="about">
        {/* <About /> */}
      </section>
      <section id="contact">
        {/* <Contact /> */}
      </section>
    </div>
  )
}

export default App
