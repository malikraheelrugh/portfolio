import Header from './components/header'
import './App.css'
import AboutSkills from './components/aboutskill'
import ProgressBar from './components/progressbar'
import Footer from './components/footer'
import Projects from './components/SomeProjects'
import AboutUs from './components/AboutUs'
import MyProjects from './components/myproject'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>

      <section id='home'>
        <Header ></Header>
      </section>
      <section id='skills'>
        <AboutSkills></AboutSkills>
      </section>
      <section id='projects'>
        <Projects></Projects>
      </section>
      <section id='aboutus'>
        <AboutUs></AboutUs>
      </section>
      <section id='progress'>
        <ProgressBar></ProgressBar>
      </section>
      <Footer></Footer>

    </>
  )
}

export default App
