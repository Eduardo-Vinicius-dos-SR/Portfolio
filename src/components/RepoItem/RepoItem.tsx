import { useEffect, useState } from 'react';
import ProjectPreview from "../ProjectPreview/ProjectPreview";
import type { Repo } from '../../types/repo';
import type { LanguageData } from '../../types/language';

const LANGUAGE: LanguageData[] = [
    { key: "CSS", color: "text-blue-500" },
    { key: "JavaScript", color: "text-yellow-500" },
    { key: "Python", color: "text-green-500" },
    { key: "HTML", color: "text-orange-500" },
    { key: "TypeScript", color: "text-blue-600" },
    { key: "React", color: "text-cyan-500" },
];

export default function RepoItem({ repo }: { repo: Repo }) {
    const [languages, setLanguages] = useState<string[]>([])

    useEffect(() => {
        fetch(repo.languages_url)
            .then((res) => res.json())
            .then((data) => {
                setLanguages(Object.keys(data));
            });
    }, [repo.languages_url])

    return (
        <li key={repo.id} className='min-w-40'>
            <div className='h-full flex flex-col gap-8 rounded-2xl bg-[var(--social-bg)] p-8 '>
                <h2 className='text-xl font-bold pb-2 px-4 truncate' style={{ fontSize: "clamp(0.75rem, 5cqw, 1.25rem)" }}><a href={repo.html_url} target='_blank' rel="noreferrer" className='relative pb-1 cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[var(--text-h)] after:transition-all
    after:duration-300 hover:after:w-full hover:text-[var(--text-h)]'>{repo.name}</a></h2>
                {repo.homepage && (
                    <a href={repo.homepage} aria-label={`Ir para o repositório de ${repo.name} no Github`} target="_blank" rel="noreferrer" className='px-5'>
                        <ProjectPreview url={repo.homepage} />
                    </a>
                )}
                <p className='text-base text-muted-foreground'>{repo.description}</p>
                <ul className="flex flex-wrap gap-2 justify-center">
                    {languages.map(language => {
                        const lang = LANGUAGE.find((item) => item.key === language);
                        return (<li key={language}><p className={`text-sm bg-[var(--code-bg)] px-3 py-1 border cursor-default ${lang?.color ?? ""} rounded-full`}>{language}</p></li>)
                    })}
                </ul>
            </div>

        </li>
    )
}
