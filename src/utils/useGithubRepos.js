import { useEffect, useState } from "react";

const CACHE_KEY = "github_repos_cache";
const CACHE_EXPIRATION = 1000 * 60 * 60 * 24; 

export const useGithubRepos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { repos, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > CACHE_EXPIRATION;

          if (!isExpired) {
            setData(repos);
            setLoading(false);
            return; 
          }
        }

        const res = await fetch("https://api.github.com/users/Pabloob/repos?sort=updated");
        
        if (!res.ok) throw new Error("Error en la petición a GitHub (Posible límite de tasa)");
        
        const repos = await res.json();

        const filteredRepos = repos.filter(repo => repo.name !== "Pabloob.github.io");

        const reposWithLangs = await Promise.all(
          filteredRepos.map(async (repo) => {
            const langRes = await fetch(repo.languages_url);
            const fetchedLanguages = await langRes.json();
            return { ...repo, fetchedLanguages };
          })
        );

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            repos: reposWithLangs,
            timestamp: Date.now(),
          })
        );

        setData(reposWithLangs);
      } catch (error) {
        console.error("Error cargando datos de GitHub:", error);
        
        const fallbackCache = localStorage.getItem(CACHE_KEY);
        if (fallbackCache) {
            setData(JSON.parse(fallbackCache).repos);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};