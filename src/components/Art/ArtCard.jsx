import React, { useState } from "react";
import styles from "./ArtCard.module.css";
import { getImageUrl } from "../../utils";

export const ArtCard = ({ artwork }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVideo = artwork.imageSrc.toLowerCase().endsWith(".mp4");

  return (
    <>
      {/* Thumbnail View */}
      <div className={styles.thumbnailContainer} onClick={() => setIsOpen(true)}>
        {isVideo ? (
          <video
            className={styles.thumbnail}
            src={getImageUrl(artwork.imageSrc)}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={getImageUrl(artwork.imageSrc)}
            alt={artwork.title || "Artwork thumbnail"}
            className={styles.thumbnail}
          />
        )}
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {isVideo ? (
              <video
                className={styles.modalImage}
                src={getImageUrl(artwork.imageSrc)}
                controls
                autoPlay
                loop
              />
            ) : (
              <img
                src={getImageUrl(artwork.imageSrc)}
                alt={artwork.title || "Artwork detail"}
                className={styles.modalImage}
              />
            )}
            {artwork.title && <div className={styles.modalTitle}>{artwork.title}</div>}
          </div>
        </div>
      )}
    </>
  );
};
