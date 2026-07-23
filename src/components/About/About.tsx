import { IoPersonOutline } from "react-icons/io5";
import TechCard from "../TechCard/TechCard";
import { FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="min-h-[921px] flex flex-col items-center gap-4 py-20 px-40 text-center">
            <h2 className='flex justify-center text-3xl font-bold text-center self-center gap-5'><IoPersonOutline className='text-4xl' /> {t("about.title")}</h2>
            <div className="flex flex-col gap-4 text-left text-lg indent-8 py-20 px-30">
                <p>  <Trans
                    i18nKey="about.paragraph1"
                    components={[
                        <span className="text-[var(--text-h)]" />
                    ]}
                /></p>
                <p>
                    <Trans
                        i18nKey="about.paragraph2"
                        components={[
                            <span className="text-[var(--text-h)]" />,
                            <a
                                href="https://www.instagram.com/devemdobro/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[var(--accent)]"
                            />,
                        ]}
                    />
                </p>
                <p><Trans
                    i18nKey="about.paragraph3"
                    components={[ <span className="text-[var(--text-h)]" />
                    ]}
                /></p>
                <p>{t("about.paragraph4")}</p>
            </div>
            <div className="mt-16">
                <h3 className="mb-8 text-2xl font-semibold text-center text-[var(--text-h)]">
                    {t("about.h3")}
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