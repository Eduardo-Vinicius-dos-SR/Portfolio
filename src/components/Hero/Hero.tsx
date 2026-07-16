import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import InteractiveCube from "../InteractiveCube/InteractiveCube";

export default function Hero() {
    return (
        <section id="home" className="hero pt-40 pb-20 relative flex flex-col justify-center items-center gap-25">
 
            <div className='h-[80dvh] max-h-screen flex flex-col gap-40 items-center justify-evenly text-center'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <p className='text-2xl'>Olá, visitante!</p>
                    <h1 className='text-5xl leading-15'>
                        Me chamo <br /><span>Eduardo Vinícius</span>
                    </h1>
                    <p className='text-2xl'>Desenvolvedor Front-end</p>
                    <p className="text-3xl mt-4 flex items-center justify-center gap-12 "><span className="w-12 h-[2px] rounded-full bg-white/30"></span> <a className="duration-300ms ease-in transition-all hover:text-white" href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a className="duration-300ms ease-in transition-all hover:text-white" href="https://github.com/Eduardo-Vinicius-dos-SR" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a className="duration-300ms ease-in transition-all hover:text-white" href="mailto:eduardovdsr@email.com?subject=Contato%20pelo%20portfólio&body=Olá,%20Eduardo!" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a> <span className="w-12 h-[2px] rounded-full bg-white/30"></span></p>
                </div>

                <div className='flex flex-col text-2xl items-center gap-6'><p>SCROLL</p><FaArrowDown className='animate-bounce-blink' /></div>
            </div>
            <InteractiveCube />

        </section>
    )
}