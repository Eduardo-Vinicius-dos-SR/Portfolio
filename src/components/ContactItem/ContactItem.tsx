import { useTranslation } from "react-i18next";

export default function ContactItem({ href, title, description, children }: { href: string, title: string, description: string, children: React.ReactNode }) {
    const { t } = useTranslation();

    return (
        <li>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${t("contact.accessibility.open")} ${title}`} className="flex items-center p-10 border-t gap-20 pointer duration-300ms ease-in transition-all hover:text-[var(--text-h)]">
                <p className="text-5xl mt-4 flex items-center justify-center gap-12">
                    {children}
                </p>
                <div className="flex flex-col gap-7">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p className="font-bold text-lg">{description}</p>
                </div>
            </a>
        </li>
    )
} 