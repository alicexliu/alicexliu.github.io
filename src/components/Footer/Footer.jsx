import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p>© 2025 Alice Liu</p>
        <p>Made with <span className={styles.heart}>♥</span> by Alice</p>
      </div>
    </footer>
  );
};