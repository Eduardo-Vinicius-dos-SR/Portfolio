import { useState } from 'react'
import './App.css'
import { Link } from 'react-scroll'
import NavItem from './components/NavItem/NavItem'
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import InteractiveCube from './components/InteractiveCube/InteractiveCube';

function App() {


  return (
    <div className="App">
      <header className='h-20 w-full fixed flex flex-row px-9 py-5 justify-between items-center border-b border-b-gray-300'>
        <h2 className='text-3xl font-bold'><a href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank"
          rel="noopener noreferrer">Eduardo Vinícius</a></h2>
        <ul className='flex justify-between items-center gap-10 mr-14'>
          <NavItem to='home'>Home</NavItem>
          <NavItem to='projects'>Projectos</NavItem>
          <NavItem to='about'>Sobre</NavItem>
          <NavItem to='contact'>Contato</NavItem>
        </ul>
      </header>

      <section id="home" className="hero mt-20 pt-50 pb-10 relative flex flex-col justify-center items-center gap-20">

          <div className='flex flex-col gap-4'>
            <p className='text-2xl'>Olá, visitante!</p>
            <h1 className='text-5xl leading-15'>
              Me chamo <br /><span>Eduardo Vinícius</span>
            </h1>
            <p className='text-2xl'>Desenvolvedor Front-end</p>
            <p className="text-3xl mt-4 flex items-center justify-center gap-12"><span className="w-12 h-[2px] rounded-full bg-black/30"></span> <a className="hover:text-black" href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className="hover:text-black" href="https://github.com/Eduardo-Vinicius-dos-SR" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a className="hover:text-black" href="mailto:eduardovdsr@email.com?subject=Contato%20pelo%20portfólio&body=Olá,%20Eduardo!" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a> <span className="w-12 h-[2px] rounded-full bg-black/30"></span></p>
          </div>

          {/* <h3 className="mt-40 text-3xl text-black text-center flex justify-center flex-col items-center gap-7">SCROLL <br /><FaArrowDown className='animate-bounce-blink'/></h3>           */}

          <InteractiveCube/>

        {/* Ideia do cubo? */}
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
