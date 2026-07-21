import { useEffect, useState } from 'react';
import RepoItem from '../RepoItem/RepoItem';
import type { Repo } from '../../types/repo';

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
        <section id="projects" className="flex flex-col bg-[#0A0A23] p-20">
            <h2 className='text-3xl font-bold text-center'>Meus Projetos</h2>
            <ul className='flex justify-between gap-14 p-20'>
                {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
            </ul>
        </ section>)
}
