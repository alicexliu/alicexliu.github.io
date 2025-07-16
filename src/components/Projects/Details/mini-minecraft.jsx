// src/components/Projects/Details/MiniMinecraftDetail.jsx
import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const MiniMinecraftDetail = () => {
  return (
    <>
      <p className={styles.description}>
        In this project, my team and I built a 3D Minecraft-inspired engine from scratch
        in C++ using OpenGL. It includes chunked terrain generation, block editing,
        texture atlases, and real-time lighting.
      </p>
      {/* <img
        className={styles.media}
        src={getImageUrl("projects/minecraft2.png")}
        alt="Screenshot of Mini Minecraft terrain"
      /> */}
      <div className={styles.media}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/kr7ze2p7Tx8"
          title="Mini Minecraft Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default MiniMinecraftDetail;
