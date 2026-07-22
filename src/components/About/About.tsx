import { IoPersonOutline } from "react-icons/io5";
import TechCard from "../TechCard/TechCard";
import { FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";

export default function About() {
    return (
        <section id="about" className="min-h-[921px] flex flex-col items-center gap-4 py-20 px-40 text-center">
            <h2 className='flex justify-center text-3xl font-bold text-center self-center gap-5'><IoPersonOutline className='text-4xl' /> Sobre mim</h2>
            <div className="flex flex-col gap-4 text-left text-lg indent-8 py-20 px-30">
                <p> Me chamo <span className="text-[var(--text-h)]">Eduardo Vinícius dos Santos Rodrigues</span>, sou estudante da área de <span className="text-[var(--text-h)]">front-end</span> e <span className="text-[var(--text-h)]">back-end</span>. Cresci cercado pelo mundo digital, que sempre despertou minha curiosidade. Cada site, aplicativo ou jogo que eu usava me fazia pensar em como tudo aquilo funcionava por trás da tela. Hoje, meu objetivo é justamente construir essas experiências, entender cada etapa do processo e fazer parte de quem as cria, e não apenas de quem as utiliza.</p>
                <p> Fui formado pela <span className="text-[var(--text-h)]">DevQuest</span>, da <a className="text-[var(--accent)]" href="https://www.instagram.com/devemdobro/" target="_blank" rel="noreferrer">DevEmDobro</a>, onde tive a oportunidade de aprender com excelentes professores. Foi lá que construí uma base em lógica de programação, uma base nas principais tecnologias que utilizo até hoje e boas práticas.</p>
                <p> Gosto de transformar ideias em <span className="text-[var(--text-h)]">interfaces intuitivas</span> e <span className="text-[var(--text-h)]">agradáveis de usar</span>. Trabalho principalmente com <span className="text-[var(--text-h)]">React</span> e <span className="text-[var(--text-h)]">TypeScript</span> no front-end e estou ampliando meus conhecimentos em <span className="text-[var(--text-h)]">Prisma</span> para desenvolver aplicações completas, do banco de dados até a interface.</p>
                <p> O que mais me motiva é dar vida a uma interface. Acredito que pequenos detalhes, como animações, transições e a forma como a aplicação responde às interações do usuário, fazem toda a diferença entre um site que apenas funciona e outro que transmite qualidade e cuidado. É justamente essa atenção aos detalhes que procuro colocar em cada projeto que desenvolvo.</p>
            </div>
            <div className="mt-16">
                <h3 className="mb-8 text-2xl font-semibold text-center text-[var(--text-h)]">
                    Tecnologias que utilizo
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <TechCard icon={<FaReact />} title="React" color="text-sky-400" />
                    <TechCard icon={<TbBrandTypescript />} title="TypeScript" color="text-blue-500" />
                    <TechCard icon={<FaJs />} title="JavaScript" color="text-yellow-400" />
                    <TechCard icon={<RiTailwindCssFill />} title="Tailwind CSS" color="text-cyan-400" />
                    <TechCard icon={<FaHtml5 />} title="HTML5" color="text-orange-500" />
                    <TechCard icon={<FaCss3 />} title="CSS3" color="text-blue-400" />
                    <TechCard icon={<FiFigma />} title="Figma" color="text-pink-500" />
                    <TechCard icon={<FaGitAlt />} title="Git" color="text-red-500" />
                </div>
            </div>

        </section>
    )
}