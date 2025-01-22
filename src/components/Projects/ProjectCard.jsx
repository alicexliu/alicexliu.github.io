import React from 'react'

import styles from "./ProjectCard.module.css"
import { getImageUrl } from "../../utils";

export const ProjectCard = ({project : {title, imageSrc, description, skills}}) => {
  return (
    <div className={styles.container}>
        <img 
            src={getImageUrl(imageSrc)} 
            alt={`Image of ${title}`} 
            className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
            <ul>
                {skills.map((skill, id) => {
                    <li key={id}>{skill}</li>
                })}
            </ul>
    </div>
  )
}
