export type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    languages_url: string;
    stargazers_count: number;
};