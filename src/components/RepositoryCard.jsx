import "../styles/Repository.css";
import { iconMap } from "../utils/iconMap.js";

const RepositoryCard = ({ name, description, url, languages }) => {
  const langList = languages ? Object.keys(languages) : [];

  return (
    <div className="repo-card">
      <a href={url} target="_blank" rel="noreferrer" className="repo-title">
        {name}
      </a>

      <p className="repo-description">
        {description || "Sin descripción disponible"}
      </p>

      <div className="repo-lang-list">
        {langList.length > 0 ? (
          langList.map((lang) => {
            const iconSrc = iconMap[lang.toLowerCase().trim()];
            if (!iconSrc) return null;

            return (
              <div className="repo-lang-item" key={lang} title={lang}>
                <img src={iconSrc} className="repo-lang-icon" alt={lang} />
                <span className="repo-lang-text">{lang}</span>
              </div>
            );
          })
        ) : (
          <span className="repo-lang-name">Markdown / Otros</span>
        )}
      </div>
    </div>
  );
};

export default RepositoryCard;
