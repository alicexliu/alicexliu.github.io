// src/components/Projects/Details/Cat2048Detail.jsx
import React from "react";
import styles from "../ProjectDetail.module.css";
import { getImageUrl } from "../../../utils";

export const Cat2048Detail = () => {
  return (
    <>
      <p className={styles.description}>
        For the final project of my introductory computer science course (CIS 1200),
        I created <strong>Cat 2048</strong> — a reimagining of the classic 2048 game
        that uses hand-drawn cat images (including famous meme cats!) instead of numbers.
      </p>

      <p className={styles.description}>
        The game logic and features were built around four key core concepts:
      </p>

      <ul className={styles.bulletList}>
        <li>
          <strong>2D Arrays:</strong> Used to represent the game grid, tracking each tile’s position and value.
          This allowed for efficient iteration when checking for merges or updating the board.
        </li>
        <li>
          <strong>Collections (LinkedLists):</strong> Implemented an undo feature by storing previous board states
          and scores in linked lists, allowing users to undo moves multiple times efficiently.
        </li>
        <li>
          <strong>File I/O:</strong> Added Save and Load buttons so players could save their current game state to a file
          and reload it later to resume play.
        </li>
        <li>
          <strong>JUnit Testing:</strong> Wrote unit tests to validate core game mechanics, such as merging tiles correctly,
          and to handle edge cases, ensuring robust gameplay.
        </li>
      </ul>

      <p className={styles.description}>
        This project combined creative art and technical design, and taught me how to structure code cleanly
        while adding features like undo, save/load, and testing.
      </p>
    </>
  );
};

export default Cat2048Detail;
