import Header from './components/header'
import './App.css'
import AboutSkills from './components/aboutskill'
import ProgressBar from './components/progressbar'
import Footer from './components/footer'
import Projects from './components/SomeProjects'
import AboutUs from './components/AboutUs'
import MyProjects from './components/myproject'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate()
  return (
    <>

      <section id='home'>
        <Header ></Header>
      </section>
      <section id='skills'>
        <AboutSkills ></AboutSkills >
      </section>
      <section id='projects'>
        <div className="headingDiv mt-5 d-flex">
          <h1 className=' h1 ' > <span className='purple'>#</span>Projects </h1>
          <p className='line'></p>
          <button className={`projectBtn mainBtn`} onClick={() => navigate("/myprojects")}>View all {"~~>"}</button>
        </div>
        <Projects ></Projects>
      </section>
      <section id='aboutus'>
        <AboutUs ></AboutUs>
      </section>
      <section id='progress'>
        <ProgressBar ></ProgressBar>
      </section>
      <Footer></Footer>

    </>
  )
}

export default App
