import { scroller } from "react-scroll";
import { useSection } from "../../context/SectionContext";
import type { NavItemProps } from "../../interfaces/NavItemProps";
import { useTranslation } from "react-i18next";


export default function NavItem({ to, children, name }: NavItemProps) {
  const { setActiveSection } = useSection()
  const { t } = useTranslation();

  return (
    <li>
      <button aria-label={t("header.accessibility.openSection", {
        section: name,
      })}
        onClick={() => {
          if (to === null) {
            setActiveSection(null);

            scroller.scrollTo("home", {
              smooth: true,
              duration: 500,
            });

            return;
          }

          setActiveSection(to);

          scroller.scrollTo(to, {
            smooth: true,
            duration: 500,
          });
        }}
      >
        <p className=" relative pb-1
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
        >
          {children}</p>
      </button>
    </li>
  );
}