import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects.json";
import styles from "./ProjectDetail.module.css";
import { getImageUrl } from "../../utils";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return <h2>Under Construction</h2>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>← Back to Projects</Link>
      <h1 className={styles.title}>{project.title}</h1>
      <img 
        src={getImageUrl(project.imageSrc)} 
        alt={project.title} 
        className={styles.image}
      />
      <p className={styles.description}>{project.description}</p>
      <h3>Skills Used:</h3>
      <ul className={styles.skills}>
        {project.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      {/* Optional: Add more sections here like links, video demo, breakdowns, etc. */}
    </div>
  );
};
