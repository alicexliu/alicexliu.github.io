import React, { useEffect } from 'react';
import styles from './App.module.css';

import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Art } from './components/Art/Art';
import { Footer } from './components/Footer/Footer';
import { ProjectDetail } from './components/Projects/ProjectDetail';
import ScrollToProjects from './components/Projects/ScrollToProjects';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className={styles.App}>
      <Router>
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <section id="about"><Hero /></section>
                <section id="projects"><Projects /></section>
                <section id="art"><Art /></section>
                <Footer />
              </>
            }
          />

          {/* Project Details */}
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* New route for back button */}
          <Route path="/back-to-projects" element={<ScrollToProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
