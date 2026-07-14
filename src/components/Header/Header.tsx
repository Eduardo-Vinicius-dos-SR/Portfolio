import NavItem from "../NavItem/NavItem";

export default function Header() {
    return (
        // bg-[linear-gradient(162deg,_rgba(28,2,2,1)_1%,_rgba(7,7,46,1)_58%,_rgba(35,7,61,1)_92%)]
        <header className='h-20 w-full fixed z-50 flex flex-row px-9 py-5 justify-between items-center'>
            <h2 className='text-3xl font-bold '><a href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank"
                rel="noopener noreferrer" className="relative pb-1 cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[var(--text-h)] after:transition-all
    after:duration-300 hover:after:w-full hover:text-[var(--text-h)]">Eduardo Vinícius</a></h2>
            <ul className='flex justify-between items-center gap-10 mr-14'>
                <NavItem to='home'>Home</NavItem>
                <NavItem to='projects'>Projectos</NavItem>
                <NavItem to='about'>Sobre</NavItem>
                <NavItem to='contact'>Contato</NavItem>
            </ul>
        </header>
    )
}