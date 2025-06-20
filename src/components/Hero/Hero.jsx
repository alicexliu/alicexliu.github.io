import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Alice!</h1>
            <p className={styles.description}>
                I'm a junior at the University of Pennsylvania studying Digital Media Design, an interdisiplinary program that combines computer science and art. 
            </p>
            <p className={styles.description}>
                I'm interested in computer graphics, game development, software engineering, and animation!
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
