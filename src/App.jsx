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
      <Hero />
      <Projects />
      <Art />
      <Footer />
    </div>
  )
}

export default App