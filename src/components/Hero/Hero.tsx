import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import InteractiveCube from "../InteractiveCube/InteractiveCube";

export default function Hero() {
    return (
        <main id="home" className="pt-40 relative flex flex-col justify-center items-center gap-25 border-b">

            <div className='h-[80dvh] max-h-screen flex flex-col gap-40 items-center justify-evenly text-center'>
                <div className='flex flex-col gap-4 items-center justify-center text-2xl'>
                    <p>Olá, visitante!</p>
                    <h1 className='text-5xl leading-15'>
                        Me chamo <br /><span>Eduardo Vinícius</span>
                    </h1>
                    <p>Desenvolvedor Front-end</p>
                    <p className="text-4xl mt-4 flex items-center justify-center gap-12 ">
                        <span className="w-12 h-[2px] rounded-full bg-[var(--text)]"></span>
                        <a aria-label={`Abrir LinkedIn`} className="duration-300ms ease-in transition-all hover:text-[var(--text-h)]" href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a aria-label={`Abrir GitHub`} className="duration-300ms ease-in transition-all hover:text-[var(--text-h)]" href="https://github.com/Eduardo-Vinicius-dos-SR" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a aria-label={`Abrir email`} className="duration-300ms ease-in transition-all hover:text-[var(--text-h)]" href="mailto:eduardovdsr@email.com?subject=Contato%20pelo%20portfólio&body=Olá,%20Eduardo!" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                        <span className="w-12 h-[2px] rounded-full bg-[var(--text)]"></span>
                    </p>
                </div>

                <div className='flex flex-col text-2xl items-center gap-6'><p>SCROLL</p><FaArrowDown className='animate-bounce-blink' /></div>
            </div>
            <InteractiveCube />

        </main>
    )
}