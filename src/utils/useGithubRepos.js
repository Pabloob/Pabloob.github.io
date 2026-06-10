import { useEffect, useState } from "react";

export const useGithubRepos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = token ? { Authorization: `token ${token}` } : {};

    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Pabloob/repos?sort=updated", { headers });
        const repos = await res.json();

        const reposWithLangs = await Promise.all(
          repos.map(async (repo) => {
            const langRes = await fetch(repo.languages_url, { headers });
            const fetchedLanguages = await langRes.json();
            return { ...repo, fetchedLanguages };
          })
        );

        setData(reposWithLangs);
      } catch (error) {
        console.error("Error cargando datos de GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};