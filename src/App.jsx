import { useState } from 'react'
import './App.css'
import { Link } from 'react-scroll'

function App() {


  return (
    <div className="App">
      <header className='w-full fixed flex px-9 py-5 justify-between items-center border-b border-b-gray-300'>
        <h1 className='text-3xl font-bold'>Eduardo Vinícius</h1>
        <ul className='flex justify-between items-center gap-10 mr-14'>
          <li><Link
            to="home"
            smooth={true}
            duration={500}
            className='cursor-pointer'
          >
            Home
          </Link></li>

          <li><Link
            to="projects"
            smooth={true}
            duration={500}
            className='cursor-pointer'
          >
            Projectos
          </Link></li>

          <li><Link
            to="about"
            smooth={true}
            duration={500}
            className='cursor-pointer'
          >
            Sobre
          </Link></li>

          <li><Link
            to="contact"
            smooth={true}
            duration={500}
            className='cursor-pointer'
          >
            Contact
          </Link></li>
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
