import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header'
import Home from './pages/Home'
import Navbar from './componants/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Contactus from './pages/Contactus'
function App() {
  return (
    <div className='bgcol'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contac-us" element={<Contactus/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
