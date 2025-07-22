import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const MayaOutlinerDetail = () => {
  return (
    <>
      <p className={styles.description}>
        As part of a team of two, I developed a Python plug-in for Autodesk Maya to help artists better organize complex scenes.
        This tool helps artists save time by allowing them to visually color code and label scene objects all in one place,
        making it easier to navigate and manage large, complex projects.
      </p>

      <p className={styles.description}>
        I implemented the main UI window, bulk renaming functionality, and color changing features to recolor objects in the Outliner.
        I also added palette saving so users could reuse custom color palettes across different projects.
        The plug-in comes with preset colors and supports user‑defined palettes through RGB sliders (built by my teammate).
      </p>

    </>
  );
};

export default MayaOutlinerDetail;
