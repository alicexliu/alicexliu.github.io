import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

<section id="about">...</section>

export const Hero = () => {
  return (
    <section className={styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Alice!</h1>
            <p className={styles.description}>
                I'm a sophomore studying Digital Media Design, an interdisiplinary program that combines computer science and art
                at the University of Pennsylvania. 
            </p>
            <p className={styles.description}>
                I'm interested in software engineering, computer graphics, game development, and animation!
            </p>
            <div className={styles.buttonContainer}>
              <a href="mailto:alicepopilliu@gmail.com" className={styles.iconButton}>
                <img src={getImageUrl("hero/mail.png")} alt="Mail" className={styles.icon} />
              </a>

              <a href="https://github.com/alicexliu" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
                <img src={getImageUrl("hero/github.png")} alt="GitHub" className={styles.icon} />
              </a>

              <a href="https://linkedin.com/in/aliceliuu" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
                <img src={getImageUrl("hero/linkedin.png")} alt="LinkedIn" className={styles.icon} />
              </a>
            </div>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
    </section>
  )
}
