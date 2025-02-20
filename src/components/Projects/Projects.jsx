import React from "react";

import styles from "./Projects.module.css"

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
      <section className={styles.container}>
            {/* Demo Reel */}
            <div className={styles.demoReel}>
            <h2 className={styles.title}>Demo Reel</h2>
                <div className={styles.videoContainer}>
                    <iframe 
                        src="https://player.vimeo.com/video/1052809432?h=1a55888763&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
           
            {/* Projects List */}
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}> 
                {projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project}/>
                    );
                })}
            </div>
      </section>
    );
};