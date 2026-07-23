import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { PiStudent } from "react-icons/pi";

export default function Formation() {
    const { t } = useTranslation();

    useEffect(() => {
    document.getElementById("formation")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}, []);

    return (
        <section
            id="formation"
            className="min-h-[921px] flex flex-col items-center gap-4 p-20 text-center"
        >
            <h2 className="flex justify-center self-center gap-5 text-3xl font-bold">
                <PiStudent className="text-4xl" />
                {t("formation.title")}
            </h2>

            <ul className="flex flex-col gap-4 py-20 px-30 text-left text-xl list-disc">
                <li><p>{t("formation.formation1")}</p></li>

                <li>{t("formation.formation2")}</li>

                <li>
                    <Trans
                        i18nKey="formation.formation3"
                        components={[
                            <span className="text-[var(--text-h)]" />,
                            <span className="text-[var(--text-h)]" />
                        ]}
                    />
                </li>

                <li>
                    <Trans
                        i18nKey="formation.formation4"
                        components={[
                            <span className="text-[var(--text-h)]" />,
                            <span className="text-[var(--text-h)]" />,
                            <a
                                className="text-[var(--accent)]"
                                href="https://www.instagram.com/devemdobro/"
                                target="_blank"
                                rel="noreferrer"
                            />
                        ]}
                    />
                </li>

                <li>
                    <Trans
                        i18nKey="formation.formation5"
                        components={[
                            <span className="text-[var(--text-h)]" />,
                            <span className="text-[var(--text-h)]" />,
                            <a
                                className="text-[var(--accent)]"
                                href="https://www.instagram.com/devemdobro/"
                                target="_blank"
                                rel="noreferrer"
                            />
                        ]}
                    />
                </li>
            </ul>
        </section>
    );
}