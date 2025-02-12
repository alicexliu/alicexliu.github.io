// ArtCard.jsx
import React, { useState } from "react";
import styles from "./ArtCard.module.css";
import { getImageUrl } from "../../utils";

export const ArtCard = ({ artwork }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail View */}
      <div className={styles.thumbnailContainer} onClick={() => setIsOpen(true)}>
        <img
          src={getImageUrl(artwork.imageSrc)}
          alt={artwork.title || "Artwork thumbnail"}
          className={styles.thumbnail}
        />
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={getImageUrl(artwork.imageSrc)}
              alt={artwork.title || "Artwork detail"}
              className={styles.modalImage}
            />
            {artwork.title && <div className={styles.modalTitle}>{artwork.title}</div>}
          </div>
        </div>
      )}
    </>
  );
};