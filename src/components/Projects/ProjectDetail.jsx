// ProjectDetail.jsx
import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";

export const ProjectDetail = () => {

  const { slug } = useParams();
  console.log("Slug from URL:", slug);

  const project = projects.find((p) => p.slug === slug);
  console.log("Found project:", project);

  if (!project) return <h2 className={styles.description}>Project Not Found!</h2>;

  // Dynamically import the detail component by slug
  const DetailComponent = lazy(() =>
    import(`./Details/${slug}.jsx`).catch(() => ({
      default: () => <p>More details coming soon!</p>
    }))
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={project.title}
        className={styles.media}
      />
      <ul className={styles.skills}>
        {project.skills.map((skill, idx) => (
          <li key={idx} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <Suspense fallback={<div>Loading details...</div>}>
        <DetailComponent />
      </Suspense>
    </section>
  );
};
