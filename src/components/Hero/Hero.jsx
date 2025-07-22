import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}> 
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alice!</h1>
        <p className={styles.description}>
          I'm a junior at the University of Pennsylvania studying Digital Media Design, an interdisciplinary program that combines computer science and art. 
        </p>
        <p className={styles.description}>
          I'm interested in computer graphics, game development, software engineering, and animation!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:alicepopilliu@gmail.com" className={styles.iconButton}>
            <FaEnvelope size={27.5} />
          </a>

          <a href="https://github.com/alicexliu" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            <FaGithub size={32} />
          </a>

          <a href="https://linkedin.com/in/aliceliuu" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
      {/* <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} /> */}
      <img src={getImageUrl("hero/kirbymecropped.PNG")} alt="Kirby drawing of me" className={styles.heroImg} />
    </section>
  );
};
