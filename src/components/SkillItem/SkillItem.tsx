export default function SkillItem({ title, listItems }: { title: string | null, listItems: string[] }) {
    return (
        <div className="flex flex-col justify-start text-lg text-left gap-2 border-l px-5">
            {title && <h2>{title}:</h2>}
            <ul className="flex flex-col gap-[2px]">
                {listItems.map(item => (<li><p>{item}</p></li>))}
            </ul>
        </div>
    )
}