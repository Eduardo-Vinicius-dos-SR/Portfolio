import { PiStudent } from "react-icons/pi";

export default function Formation() {
    return(
        <section id="formation" className="min-h-[921px] flex flex-col items-center gap-4 p-20 text-center">
            <h2 className='flex justify-center text-3xl font-bold text-center self-center'><PiStudent className='mr-5 text-4xl' /> Minha formação</h2>
        </section>
    )
}