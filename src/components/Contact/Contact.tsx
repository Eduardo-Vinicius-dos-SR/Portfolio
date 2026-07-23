import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactItem from "../ContactItem/ContactItem";
import { LuMessageCircleMore } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Contact() {
    const { t } = useTranslation();

    useEffect(() => {
    document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}, []);

    return (
        <section id="contact" className="min-h-[921px] flex flex-col gap-4 text-center p-20">
            <h2 className='flex justify-center text-3xl font-bold text-center gap-5'><LuMessageCircleMore className='text-4xl' /> Meus contatos</h2>
            <ul className='flex flex-wrap justify-center items-center gap-25 py-20 px-40'>
                <ContactItem href="https://www.linkedin.com/in/eduardo-vinícius-dos-santos-r-719955336/" title="LinkedIn" description={t("contact.description1", {
                    local: "LinkedIn",
                })} ><FaLinkedin /></ContactItem>
                <ContactItem href="https://github.com/Eduardo-Vinicius-dos-SR/" title="GitHub" description={t("contact.description2", {
                    local: "GitHub",
                })}  ><FaGithub /></ContactItem>
                <ContactItem href="mailto:eduardovdsr@email.com?subject=Contato%20pelo%20portfólio&body=Olá,%20Eduardo!" title="Email" description={t("contact.emailMessage")} ><FaEnvelope /></ContactItem>
            </ul>
        </section>
    )
}