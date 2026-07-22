import { useEffect, useState } from 'react';
import RepoItem from '../RepoItem/RepoItem';
import type { Repo } from '../../types/repo';
import { BsCodeSlash } from 'react-icons/bs';

const reposUrl = "https://api.github.com/users/Eduardo-Vinicius-dos-SR/repos?per_page=3";


export default function Projects() {
    const [repos, setRepos] = useState<Repo[]>([])
    useEffect(() => {

        const cached = sessionStorage.getItem("repos-cache");
        if (cached) {
            setRepos(JSON.parse(cached));
            return;
        }

        let cancelled = false;
        fetch(reposUrl)
            .then((res) => res.json())
            .then((data: Repo[]) => {
                if (!cancelled) {
                    setRepos(data);
                    sessionStorage.setItem("repos-cache", JSON.stringify(data));
                }
            });
        return () => { cancelled = true; };
    }, [])

    return (
        <section id="projects" className="min-h-[921px] flex flex-col p-20">
            <h2 className='flex justify-center text-3xl font-bold text-center gap-5'><BsCodeSlash className='text-4xl' /> Meus Projetos</h2>
            <ul className='flex justify-between gap-14 p-20'>
                {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
            </ul>
        </ section>)
}
