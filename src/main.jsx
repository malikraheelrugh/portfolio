import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './Contact.jsx'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyProjects from './components/myproject.jsx'
BrowserRouter
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      </Route>
    </Routes>
    <Routes>
      <Route path='/myprojects' element={<MyProjects />}>
      </Route>
    </Routes>
    <Routes>
      <Route path='/contact' element={<Contact />}>
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
)
