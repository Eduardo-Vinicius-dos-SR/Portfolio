import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    FaCode,
    FaReact,
    FaPaintBrush,
    FaRocket,
    FaHammer,
} from "react-icons/fa";

export default function Services() {
    const { t } = useTranslation();
    const services = [
        {
            icon: <FaCode className="text-5xl text-[var(--accent)]" />,
            title: t("services.service1.title"),
            description: t("services.service1.description")
        },
        {
            icon: <FaReact className="text-5xl text-sky-400" />,
            title: t("services.service2.title"),
            description: t("services.service2.description")
        },
        {
            icon: <FaPaintBrush className="text-5xl text-pink-400" />,
           title: t("services.service3.title"),
            description: t("services.service3.description")
        },
        {
            icon: <FaRocket className="text-5xl text-yellow-400" />,
            title: t("services.service4.title"),
            description: t("services.service4.description")
        },
    ];
    
        useEffect(() => {
        document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);
    

    return (
        <section
            id="services"
            className="min-h-[921px] flex flex-col items-center gap-4 px-20 py-24"
        >
            <h2 className="flex items-center gap-4 text-3xl font-bold text-[var(--text-h)]">
                <FaHammer className="text-4xl" />
                {t("services.title")}
            </h2>

            <p className="text-lg text-[var(--text)]">
                {t("services.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="
              group
              flex
              gap-6
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--social-bg)]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[var(--accent)]
            "
                    >
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                            {service.icon}
                        </div>

                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-[var(--text-h)]">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-[var(--text)] leading-7">
                                {service.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}