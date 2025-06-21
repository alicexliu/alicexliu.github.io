import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <button
      className={styles.toggleButton}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FiSun size={26} /> : <FiMoon size={26} />}
    </button>
  );
};
