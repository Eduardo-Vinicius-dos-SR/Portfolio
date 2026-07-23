import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import InteractiveCube from "../InteractiveCube/InteractiveCube";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <main id="home" className="pt-40 relative flex flex-col justify-center items-center gap-25 border-b">

            <div className='h-[80dvh] max-h-screen flex flex-col gap-40 items-center justify-evenly text-center'>
                <div className='flex flex-col gap-4 items-center justify-center text-2xl'>
                    <p>{t("hero.welcome")}</p>
                    <h1 className='text-5xl leading-15'>
                        {t("hero.title")} <br /><span>Eduardo Vinícius</span>
                    </h1>
                    <h3>{t("hero.subtitle")}</h3>
                    <p className="text-4xl mt-4 flex items-center justify-center gap-12 ">
                        <span className="w-12 h-[2px] rounded-full bg-[var(--text)]"></span>
                        <a aria-label={`${t("hero.accessibility.open")} LinkedIn`} className="duration-300ms ease-in transition-all hover:text-[var(--text-h)]" href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a aria-label={`${t("hero.accessibility.open")} GitHub`} className="duration-300ms ease-in transition-all hover:text-[var(--text-h)]" href="https://github.com/Eduardo-Vinicius-dos-SR" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a aria-label={`${t("hero.accessibility.open")} email`} className="duration-300ms ease-in transition-all hover:text-[var(--text-h)]" href="mailto:eduardovdsr@email.com?subject=Contato%20pelo%20portfólio&body=Olá,%20Eduardo!" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                        <span className="w-12 h-[2px] rounded-full bg-[var(--text)]"></span>
                    </p>
                </div>

                <div className='flex flex-col text-2xl items-center gap-8'><p>{t("hero.scroll")}</p><FaArrowDown className='animate-(--animate-bounce-blink)' /></div>
            </div>
            <InteractiveCube />

        </main>
    )
}