import React from "react";
import { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Utils.css";
import { useGithubRepos } from "./utils/useGithubRepos.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import duckAnimation from "./assets/animations/duck_loading2.json";
import TopBar from "./components/TopBar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Carousel from "./components/Carousel.jsx";
import Technologies from "./components/Technologies.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const { data: repositories, loading } = useGithubRepos();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

if (loading) {
  return (
    <div className="app-container">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <main className="loader-full-page">
        <div className="loader-content">
          <DotLottieReact
            data={duckAnimation}
            loop
            autoplay
          />
          <h2 className="loader-text">El patito esta buscando la página</h2>
        </div>
      </main>
    </div>
  );
}

  return (
    <div className="app-container">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <AboutMe />
      <Carousel repositories={repositories} />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
