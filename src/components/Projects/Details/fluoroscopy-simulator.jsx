// src/components/Projects/Details/MiniMinecraftDetail.jsx
import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const FluoroscopyDetail = () => {
  return (
    <>
      <p className={styles.description}>
        As a VR Research Intern for Penn Medicine, I developed a fluoroscopy simulator for the Meta Quest 2/3. 
      </p>
      {/* <img
        className={styles.media}
        src={getImageUrl("projects/minecraft2.png")}
        alt="Screenshot of Mini Minecraft terrain"
      />
      <video className={styles.media} controls>
        <source src={getImageUrl("projects/minecraft_demo.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </>
  );
};

export default FluoroscopyDetail;