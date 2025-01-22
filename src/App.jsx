import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Art } from './components/Art/Art'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Art />
    </div>
  )
}

export default App