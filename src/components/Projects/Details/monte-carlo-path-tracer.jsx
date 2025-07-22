import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const MonteCarloPathTracerDetail = () => {
  return (
    <>
      <p className={styles.description}>
        For my graduate level Advanced Rendering course (CIS 4610), I created a GPU-based Monte Carlo Path Tracer in GLSL.
      </p>

    </>
  );
};

export default MonteCarloPathTracerDetail;
