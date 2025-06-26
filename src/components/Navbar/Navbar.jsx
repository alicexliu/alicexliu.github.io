import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { FiMenu, FiX } from "react-icons/fi"; // ⬅️ import icons

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Alice Liu</a>
      <div className={styles.menu}>
        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
            }}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              handleScroll("projects");
            }}>Projects</a>
          </li>
          <li>
            <a href="#art" onClick={(e) => {
              e.preventDefault();
              handleScroll("art");
            }}>Art</a>
          </li>
          <li className={styles.themeToggleItem}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};
