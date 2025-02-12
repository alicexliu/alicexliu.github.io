import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

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
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
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
        </ul>
      </div>
    </nav>
  );
};