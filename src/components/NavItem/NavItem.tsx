import { scroller } from "react-scroll";
import type { ReactNode } from "react";
import { useSection, type SectionKey } from "../../context/SectionContext";

interface NavItemProps {
  to: SectionKey;
  children: ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  const { setActiveSection } = useSection()

  return (
    <li>
      <button onClick={() => {
        setActiveSection(to); setTimeout(() => scroller.scrollTo(to, { smooth: true, duration: 500 }), 50);
      }}>
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