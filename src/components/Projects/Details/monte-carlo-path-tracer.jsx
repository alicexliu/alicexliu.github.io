import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const MonteCarloPathTracerDetail = () => {
  return (
    <>
      <p className={styles.description}>
        For my graduate level course "Advanced Rendering" (CIS 4610), I programmed a GPU-based Monte Carlo Path Tracer in GLSL
        using concepts from this book:{" "}
        <a href="https://www.pbr-book.org/" target="_blank" rel="noopener noreferrer">
          Physically Based Rendering
        </a>.
        My implementation supports multiple sampling methods, lighting integrators, physically based materials, and light sources.
      </p>

      <div className={styles.mediaRow}>
        <figure className={styles.mediaItem}>
          <img
            src={getImageUrl("projects/myCornellBoxFull.png")}
            alt="Cornell Box with Full Integration"
            className={styles.media}
          />
          <figcaption className={styles.caption}>Cornell Box w full integration</figcaption>
        </figure>
        <figure className={styles.mediaItem}>
          <img
            src={getImageUrl("projects/myNoLight.png")}
            alt="Cornell Box with no lights"
            className={styles.media}
          />
          <figcaption className={styles.caption}>Cornell Box w only env light</figcaption>
        </figure>
      </div>

      <div className={styles.mediaRow}>
        <figure className={styles.mediaItem}>
          <img
            src={getImageUrl("projects/myRoughMirrorFull.png")}
            alt="Cornell Box with rough mirror"
            className={styles.media}
          />
          <figcaption className={styles.caption}>Cornell Box w rough mirror</figcaption>
        </figure>
        <figure className={styles.mediaItem}>
          <img
            src={getImageUrl("projects/mySpotLightFull.png")}
            alt="Cornell Box with spotlight"
            className={styles.media}
          />
          <figcaption className={styles.caption}>Cornell Box w spotlight</figcaption>
        </figure>
      </div>      

      <div className={styles.mediaRow}>
        <figure className={styles.mediaItem}>
          <img
            src={getImageUrl("projects/glasskirby.png")}
            alt="Glass Kirby"
            className={styles.media}
          />
          <figcaption className={styles.caption}>Glass Kirby</figcaption>
        </figure>
        <figure className={styles.mediaItem}>
          <img
            src={getImageUrl("projects/carby.png")}
            alt="Car Kirby"
            className={styles.media}
          />
          <figcaption className={styles.caption}>Car Kirby</figcaption>
        </figure>
      </div>
    </>
  );
};

export default MonteCarloPathTracerDetail;
