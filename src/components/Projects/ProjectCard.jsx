import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./ProjectCard.module.css"
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project, projectId }) => {
  const { title, imageSrc, description, skills } = project;

  return (
    <Link to={`/projects/${project.slug}`} className={styles.link}>
      <div className={styles.container}>
          <img 
              src={getImageUrl(imageSrc)} 
              alt={`Image of ${title}`} 
              className={styles.image}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                  <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
          </div>
      </div>
    </Link>
  );
};
