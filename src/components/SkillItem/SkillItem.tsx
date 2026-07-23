export default function SkillItem({ title, listItems }: { title?: string, listItems: string[] }) {
    return (
        <div className="flex flex-col justify-start text-lg text-left gap-2 border-l px-5">
            {title && <h2>{title}:</h2>}
            <ul>
                {listItems.map((item, index) => (<li key={index}><p>{item}</p></li>))}
            </ul>
        </div>
    )
}