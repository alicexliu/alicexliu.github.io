import React, { Suspense, lazy, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";

export const ProjectDetail = () => {
  const { slug } = useParams();

  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("Slug from URL:", slug);
  const project = projects.find((p) => p.slug === slug);
  console.log("Found project:", project);

  if (!project)
    return <h2 className={styles.description}>Project Not Found!</h2>;

  // Dynamically import the detail component by slug
  const DetailComponent = lazy(() =>
    import(`./Details/${slug}.jsx`).catch(() => ({
      default: () => (
        <p className={styles.description}>
          Currently under construction, more details coming soon!
        </p>
      )
    }))
  );

  return (
    <section className={styles.container}>
      <Link to="/back-to-projects" className={styles.backButton}>
        ← Back to Projects
      </Link>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={project.title}
        className={styles.media}
      />
      <p className={styles.description}>
        <strong>Tech Stack:</strong>{" "}
        {project.skills.join(", ")}
      </p>

      <Suspense fallback={<div>Loading details...</div>}>
        <DetailComponent />
      </Suspense>
    </section>
  );
};
