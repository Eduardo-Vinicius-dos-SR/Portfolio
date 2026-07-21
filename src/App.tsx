import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const reposUrl = "https://api.github.com/users/Eduardo-Vinicius-dos-SR/repos?per_page=3";

type LanguageData = {
  key: string;
  hoverClass: string;
};

const LANGUAGE: LanguageData[] = [
  { key: "CSS", hoverClass: "hover:text-blue-500" },
  { key: "JavaScript", hoverClass: "hover:text-yellow-500" },
  { key: "Python", hoverClass: "hover:text-green-500" },
  { key: "HTML", hoverClass: "hover:text-orange-500" },
  { key: "TypeScript", hoverClass: "hover:text-blue-600" },
  { key: "React", hoverClass: "hover:text-cyan-500" },
];

type Repo = {
  [x: string]: any;
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
};

function ProjectPreview({ url }: { url: string }) {
  const hasValidUrl = url && url.trim().length > 0;

  if (!hasValidUrl) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-xs text-muted-foreground">
        Preview em breve
      </div>
    );
  }

  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <img
      src={screenshotUrl}
      alt="Preview do site"
      className={"flex aspect-video rounded-lg border"}
      loading="lazy"
    />
  );
}

function RepoItem({ repo }: { repo: Repo }) {
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
      <div className='flex flex-col gap-5 rounded-2xl bg-[var(--bg)] p-8 '>
        <h2 className='text-xl font-bold pb-2 px-4 truncate' style={{ fontSize: "clamp(0.75rem, 5cqw, 1.25rem)" }}><a href={repo.html_url} target='_blank' rel="noreferrer" className='relative pb-1 cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[var(--text-h)] after:transition-all
    after:duration-300 hover:after:w-full hover:text-[var(--text-h)]'>{repo.name}</a></h2>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noreferrer" className='px-5'>
            <ProjectPreview url={repo.homepage} />
          </a>
        )}
        <p className='text-base text-muted-foreground'>{repo.description}</p>
        <ul className="flex flex-wrap gap-2 justify-center">
          {languages.map(language => {
            const lang = LANGUAGE.find((item) => item.key === language);
            return (<li key={language}><p className={`text-sm bg-[var(--bg)] px-3 py-1 border cursor-default ${lang?.hoverClass ?? ""} rounded-full`}>{language}</p></li>)
          })}
        </ul>
      </div>

    </li>
  )
}

function ProjectsPanel() {
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
    <ul className='flex justify-between gap-14 px-20 py-10'>
      {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
    </ul>)
}

function App() {
  return (
    <div className="App bg-[linear-gradient(162deg,_rgba(28,2,2,1)_1%,_rgba(7,7,46,1)_58%,_rgba(35,7,61,1)_92%)]">
      <Header />
      <Hero />
      <section id="projects">
        <ProjectsPanel />
      </section>
      <section id="about">
        {/* <About /> 
          https://api.github.com/users/Eduardo-Vinicius-dos-SR
          
          // type EduardoData = {
          //   avatar_url: string;
          //   login: string;
          //   url: string;
          //   hireable: boolean | null; 
          //   reposQuantity: number;
          // }
        */}
      </section>
      <section id="contact">
        {/* <Contact /> */}
      </section>
    </div>
  )
}


export default App