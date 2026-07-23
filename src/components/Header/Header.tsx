import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import NavItem from "../NavItem/NavItem";
import ThemeSwitcher from "../ThemeButton/ThemeButton";

export default function Header() {
    const { t } = useTranslation();

    return (
        // <header className='h-20 w-full fixed top-4 flex px-15 py-5 justify-between gap-10 items-center text-lg z-90 bg-[var(--code-bg)]'>
        <header className='h-20 w-full fixed top-4 flex px-15 py-5 justify-between gap-10 items-center text-lg z-90'>
            <div className="flex w-full justify-between gap-10 border-r-2 border-(--border)">
                <h2 className='text-3xl font-bold pointer-events-auto'><a aria-label={t("accessibility.linkedin")} href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank"
                    rel="noopener noreferrer" className="relative pb-1 cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[var(--text-h)] after:transition-all
    after:duration-300 hover:after:w-full hover:text-[var(--text-h)]">Eduardo Vinícius</a></h2>
                <ul className='flex justify-between items-center gap-10 mr-10 pointer-events-auto'>
                    <NavItem name={t("header.home")} to='home'>{t("header.home")}</NavItem>
                    <NavItem name={t("header.projects")} to='projects'>{t("header.projects")}</NavItem>
                    <NavItem name={t("header.about")} to='about'>{t("header.about")}</NavItem>
                    <NavItem name={t("header.contact")} to='contact'>{t("header.contact")}</NavItem>
                </ul>
            </div>
            <LanguageSelector />
            <ThemeSwitcher />
        </header>
    )
}