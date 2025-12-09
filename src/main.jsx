import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './Contact.jsx'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProjects from './components/myproject.jsx'
// BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<App />}>
        </Route>
        <Route path='/myprojects' element={<MyProjects />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
