import React from "react";
import styles from "./Art.module.css";
import artworks from "../../data/art.json";
import { ArtCard } from "./ArtCard";

export const Art = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  // Extract unique categories from artworks
  const categories = ["all", ...new Set(artworks.map((art) => art.category.toLowerCase()))];

  // Filter artworks based on selected category
  const filteredArt = artworks.filter((art) =>
    selectedCategory === "all" ? true : art.category.toLowerCase() === selectedCategory
  );

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Artworks</h2>

      {/* Category Filters */}
      <div className={styles.categoryFilters}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`${styles.categoryButton} ${
              selectedCategory === cat ? styles.active : ""
            }`}
          >
            {cat === "3d" ? "3D" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Art Grid */}
      <div className={styles.artGrid}>
        {filteredArt.map((artwork, id) => (
          <ArtCard key={id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
};