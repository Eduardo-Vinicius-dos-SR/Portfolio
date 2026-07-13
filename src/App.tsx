import { useState } from 'react'
import './App.css'
import { Link } from 'react-scroll'
import NavItem from './components/NavItem/NavItem'

function App() {


  return (
    <div className="App">
      <header className='w-full fixed flex flex-row px-9 py-5 justify-between items-center border-b border-b-gray-300'>
        <h1 className='text-3xl font-bold'><a href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank"
          rel="noopener noreferrer">Eduardo Vinícius</a></h1>
        <ul className='flex justify-between items-center gap-10 mr-14'>
          <NavItem to='home'>Home</NavItem>
          <NavItem to='projects'>Projectos</NavItem>
          <NavItem to='about'>Sobre</NavItem>
          <NavItem to='contact'>Contato</NavItem>
        </ul>
      </header>

      <section id="home">
        {/* <Hero /> */}
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
