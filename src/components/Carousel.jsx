import { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import RepositoryCard from "./RepositoryCard.jsx";
import "../styles/Repository.css";

const Carousel = ({ repositories }) => {
  const [page, setPage] = useState(0);

  const handleNavigation = (direction) => {
    if (repositories.length === 0) return;

    setPage((prev) => {
      if (direction === "prev") {
        return prev === 0 ? repositories.length - 1 : prev - 1;
      }
      return prev === repositories.length - 1 ? 0 : prev + 1;
    });
  };

  const currentRepo = repositories[page];

  return (
    <section className="repo-section">
      <ArrowBackIos
        className="repo-arrow"
        onClick={() => handleNavigation("prev")}
      />


      {currentRepo ? (
        <RepositoryCard
          name={currentRepo.name}
          description={currentRepo.description}
          url={currentRepo.html_url}
          languages={currentRepo.fetchedLanguages}
        />
      ) : (
        <p>No se encontraron repositorios.</p>
      )}

      <ArrowForwardIos
        className="repo-arrow"
        onClick={() => handleNavigation("next")}
      />
    </section>
  );
};
export default Carousel;
