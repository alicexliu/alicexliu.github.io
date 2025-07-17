import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark mode

  useEffect(() => {
    // Read theme from localStorage or attribute
    const storedTheme = localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme");
    setIsDarkMode(storedTheme === "dark");

    // Listen for changes to theme (if ThemeToggle updates it)
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(newTheme === "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Alice Liu

        <img
          src={isDarkMode ? "/assets/catfavicon.png" : "/assets/catfaviconblack.png"}
          alt="Logo"
          className={styles.logo}
        />
      </a>
      <div className={styles.menu}>
        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll("projects"); }}>Projects</a>
          </li>
          <li>
            <a href="#art" onClick={(e) => { e.preventDefault(); handleScroll("art"); }}>Art</a>
          </li>
          <li className={styles.themeToggleItem}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};
