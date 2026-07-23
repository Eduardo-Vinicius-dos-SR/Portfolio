import type { TechCardProps } from "../../types/techCardProps";


export default function TechCard({ icon, title, color, }: TechCardProps) {
    return (
        <div className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--accent-bg)] py-8 px-2 transition-all duration-300 hover:-translate-y-2 hover:border-[#c084fc]">
            <div className={`text-6xl ${color} transition-transform duration-300 group-hover:scale-110 `}>
                {icon}
            </div>

            <span className="font-medium text-[var(--text-h)]">
                {title}
            </span>
        </div>
    );
}