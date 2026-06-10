import { useState } from "react";
import "../styles/TopBar.css";
import darkDuck from "../assets/svg/dark-duck.svg";
import lightDuck from "../assets/svg/light-duck.svg";

const TopBar = ({ theme, toggleTheme }) => {
  const isDark = theme == "dark";

  const duckIcon =
    theme === "dark"
      ? lightDuck
      : darkDuck;

  return (
    <header className="top-bar">
      <div className="top-bar-logo">Pablo Orbea Benitez</div>
      <div className={`top-bar-switch ${theme}`} onClick={toggleTheme}>
        <img src={duckIcon} className="top-bar-handle" alt="Duck Icon" />
      </div>
    </header>
  );
};

export default TopBar;
