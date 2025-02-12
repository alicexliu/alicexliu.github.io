import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Art } from './components/Art/Art'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <section id="about"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="art"><Art /></section>
      <Footer />
    </div>
  )
}

export default App