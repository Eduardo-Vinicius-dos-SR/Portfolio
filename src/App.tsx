import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App bg-[linear-gradient(162deg,_rgba(28,2,2,1)_1%,_rgba(7,7,46,1)_58%,_rgba(35,7,61,1)_92%)]">
      <Header />
      <Hero />
      <Projects />
      <section id="about">
        {/* <About /> 
          https://api.github.com/users/Eduardo-Vinicius-dos-SR
          
          // type EduardoData = {
          //   avatar_url: string;
          //   login: string;
          //   url: string;
          //   hireable: boolean | null; 
          //   reposQuantity: number;
          // }
        */}
      </section>
      <section id="contact">
        {/* <Contact /> */}
      </section>
    </div>
  )
}


export default App