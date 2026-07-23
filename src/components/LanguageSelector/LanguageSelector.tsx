import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];
  const currentLanguage = languages.find((language) => language.code === i18n.language);

  return (
    <div className="relative">
      <button aria-label={t("accessibility.changeLanguage")}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--social-bg)] px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--text-h)]"
      >
        <TfiWorld />  {currentLanguage?.name}
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--social-bg)] shadow-xl">
          {languages.map((language) => (
            <li className="hover:text-[var(--text-h)]" key={language.code}>
              <button aria-label={language.name}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition"
                onClick={() => i18n.changeLanguage(language.code)}
              >
                <span>{language.flag}</span>
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}