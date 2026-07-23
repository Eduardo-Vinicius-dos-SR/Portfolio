import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { PiPlanetFill } from "react-icons/pi";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const nextTheme = {
    light: "dark",
    dark: "cosmos",
    cosmos: "light",
  } as const;

  const icon = {
    light: <MdOutlineWbSunny />,
    dark: <LuMoon />,
    cosmos: <PiPlanetFill />,
  };

  return (
    <button aria-label={t("accessibility.changeTheme")}
      className="pointer-events-auto text-3xl relative pb-1
    cursor-pointer
    after:absolute
    after:left-1/2
    after:bottom-0
    after:h-[2px]
    after:w-0
    after:-translate-x-1/2
    after:bg-[var(--text-h)]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:text-[var(--text-h)]"
      onClick={() => setTheme(nextTheme[theme])}
    >
      {icon[theme]}
    </button>
  );
}