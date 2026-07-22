import { LuSparkles } from "react-icons/lu";
import SkillItem from "../SkillItem/SkillItem";
import { RiComputerLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

export default function Skills() {
    return (
        <section id="skills" className="min-h-[921px] flex flex-col items-center gap-4 p-20 text-center pb-0">
            <h2 className='flex justify-center text-3xl font-bold text-center self-center gap-5'><LuSparkles className='text-4xl' /> Minhas habilidades</h2>
            <div className="w-full flex justify-evenly gap-20 p-20">
                <div className="max-w-[50%] flex flex-col items-center gap-10">
                    <h2 className="flex text-2xl text-center items-center font-semibold gap-4"><RiComputerLine className="text-3xl" /> Hard Skills | Habilidades técnicas</h2>
                    <div className="flex flex-wrap justify-center gap-x-7 gap-y-12">
                        <SkillItem title="Linguagens" listItems={["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React"]} />
                        <SkillItem title="Desenvolvimento" listItems={["Consumo de APIs REST", "Fetch API", "Responsive Design", "Mobile First", "Componentização", "SPA (Single Page Applications)", "SEO básico", "Formulários", "Validação de formulários"]} />
                        <SkillItem title="Ferramentas" listItems={["Git", "GitHub", "Vite", "npm", "Figma", "VS Code"]} />
                        <SkillItem title="Frameworks e bibliotecas" listItems={["React", "React Router", "Tailwind CSS", "Framer Motion"]} />
                        <SkillItem title="Performance" listItems={["Lazy Loading", "Code Splitting"]} />
                    </div>
                </div>
                <div className="max-w-[50%] flex flex-col items-center text-lg gap-10">
                    <h2 className="flex text-2xl text-center items-center font-semibold gap-4"><FaHandsHelping className="text-3xl" /> Soft Skills | Habilidades comportamentais</h2>
                    <SkillItem title="Habilidades" listItems={["Comunicação", "Trabalho em equipe", "Resolução de problemas", "Pensamento analítico", "Organização", "Gestão de tempo", "Adaptabilidade", "Aprendizado contínuo", "Atenção aos detalhes", "Inteligência emocional", "Colaboração"]} />
                </div>
            </div>
        </section >
    )
}