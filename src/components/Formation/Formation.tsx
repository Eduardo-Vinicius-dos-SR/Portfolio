import { PiStudent } from "react-icons/pi";

export default function Formation() {
    return(
        <section id="formation" className="min-h-[921px] flex flex-col items-center gap-4 p-20 text-center">
            <h2 className='flex justify-center text-3xl font-bold text-center self-center gap-5'><PiStudent className='text-4xl' /> Minha formação</h2>
            <ul className="flex flex-col gap-4 text-left text-xl indent-8 py-20 px-30">
                <li><span className="text-[var(--text-h)]">Ensino Médio </span>Completo.</li>
                <li><span className="text-[var(--text-h)]">Português (Nativo)</span></li>
                <li>Curso de <span className="text-[var(--text-h)]">Inglês</span> no <span className="text-[var(--text-h)]">Duolingo</span>. (Score 86)</li>
                <li>Curso de <span className="text-[var(--text-h)]">Desenvolvimento Web Full Stack</span> na <span className="text-[var(--text-h)]">DevQuest</span>, da <a className="text-[var(--accent)]" href="https://www.instagram.com/devemdobro/" target="_blank" rel="noreferrer">DevEmDobro</a>.</li>
                <li>Curso de <span className="text-[var(--text-h)]">Lógica de Programação</span> na <span className="text-[var(--text-h)]">DevQuest</span>, da <a className="text-[var(--accent)]" href="https://www.instagram.com/devemdobro/" target="_blank" rel="noreferrer">DevEmDobro</a>.</li>
            </ul>
        </section>
    )
}