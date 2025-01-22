import React from 'react'

import styles from "./Hero.module.css"
import heroImage from "../../../assets/hero/heroImage.png"

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
                I'm interested in software engineering, game development, and animation!
            </p>
            <a href="mailto:alicepopilliu@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Hero image of me" className={styles.heroImg}/>
    </section>
  )
}
