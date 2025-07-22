// src/components/Projects/Details/VRFluoroDetail.jsx
import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const FluoroscopyDetail = () => {
  return (
    <>
      <p className={styles.description}>
        I developed a standalone virtual reality (VR) fluoroscopy simulator to train radiology residents,
        as part of a summer research internship with Penn Medicine (funded by PURM). Fluoroscopy machines are medical imaging
        devices that use X-rays to produce real-time images of the body's internal structures and functions.
        The simulator replicates key features of real fluoroscopy machines, allowing trainees to practice in a safe,
        repeatable environment without using radiation.
      </p>

      <img
        className={styles.media}
        src={getImageUrl("projects/vrfluoro_general.png")}
        alt="General view of the VR fluoroscopy simulator"
      />

      <p className={styles.description}>
        Built in Unity for the Meta Quest 2 and 3 headsets, the simulator achieved an average of 72 FPS and featured
        realistic 3D models created in Blender. I constructed a functional virtual fluoroscope that can display pseudo real-time
        X-ray images from DICOM files. I also implemented collimation to limit the x-ray beam area, added a bounding box preview,
        and supported multiple imaging modes (still image, rapid sequence, and fluoro).
      </p>

      <img
        className={styles.media}
        src={getImageUrl("projects/vrfluoro_rotations.png")}
        alt="Different patient and detector rotations with corresponding x-ray views"
      />

      <p className={styles.description}>
        The simulator dynamically updates x-ray images based on patient rotation and detector position.
        Additionally, I designed user experience (UX) and user interface (UI) elements to make tutorial scenes beginner-friendly.
        Planned future work includes adding real-time model deformation (e.g., swallowing) and tower lock and exposure weighting.
      </p>
    </>
  );
};

export default FluoroscopyDetail;
