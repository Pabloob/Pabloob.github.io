import React from "react";
import languagesData from "../assets/userData/languages.json";
import { iconMap } from "../utils/iconMap.js";
import "../styles/Technologies.css";

const Technologies = () => {
  const { languages } = languagesData;

  return (
    <section className="tech-section">
      <div className="tech-title">Mis Tecnologías</div>
      <div className="tech-grid">
        {languages.map((langObj) => {
          const langKey = langObj.name.toLowerCase().trim();
          const iconSrc = iconMap[langKey];

          return (
            <div className="tech-item" key={langObj.name}>
              {iconSrc ? (
                <>
                  <img
                    src={iconSrc}
                    alt={`Icono de ${langObj.name}`}
                    className="tech-icon"
                  />
                  <span className="tech-name">{langObj.name}</span>
                </>
              ) : (
                <div className="tech-name">?</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
