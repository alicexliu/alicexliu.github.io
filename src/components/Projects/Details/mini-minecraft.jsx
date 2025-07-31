import React from "react";
import styles from "../ProjectDetail.module.css";

export default function MiniMinecraftDetail() {
  return (
    <>
      <p className={styles.description}>
        For this project, my team and I built a 3D Minecraft-inspired engine from scratch
        in C++ with OpenGL and Qt. I worked on procedural terrain generation, biomes, asset placement, texturing, and animation.
      </p>

      <h3 className={styles.subheading}>🌱 Procedural Terrain & Biomes</h3>
      <p className={styles.description}>
        I implemented four unique biomes: desert, grassland, mountain, and icy.
        Using Perlin noise and Fractal Brownian Motion (FBM), I generated natural-looking terrain
        and blended smoothly between biomes based on temperature and moisture noise.
        For example, I inverted the absolute value of Perlin noise to create sharp mountain peaks,
        and tweaked noise parameters to shape grasslands.
      </p>

      <h3 className={styles.subheading}>🌵 Procedural Asset Placement</h3>
      <p className={styles.description}>
        To make the world feel alive, I procedurally placed assets like trees, cacti, flowers, and mushrooms.
        I combined noise functions with randomness to vary placement, heights, and types,
        and adjusted Vertex Buffer Object (VBO) data to handle special cases like criss-crossed flowers or smaller cacti.
        Assets were biome-specific: cacti in deserts, frozen trees in icy biomes, and so on.
      </p>

      <h3 className={styles.subheading}>🎨 Texturing & Animation</h3>
      <p className={styles.description}>
        I added texture mapping by creating UV buffers and linking block faces to their texture coordinates. 
        To animate textures (like water), I offset UVs over time in the shader. 
        I also split the WBOs into opaque and transparent groups to ensure correct render order, 
        drawing opaque blocks first and transparent ones after. I animated water blocks using two different sine functions, 
        one based on time and the x position, and another based on time and the y position, for a more natural wave effect,
        and added subtle wiggling to assets like grass and flowers to bring the scene to life.
      </p>

      <h3 className={styles.subheading}>🛠 Technical Challenges & Highlights</h3>
      <p className={styles.description}>
        This project helped me deepen my understanding of procedural content generation,
        GPU rendering pipelines, and optimizing rendering order for transparent objects.
        Balancing randomness and control in noise functions was especially challenging but rewarding.
      </p>

      <div className={styles.mediaGrid}>
        <iframe
          className={styles.media}
          width="100%"
          height="425"
          src="https://www.youtube.com/embed/kr7ze2p7Tx8"
          title="Mini Minecraft Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
