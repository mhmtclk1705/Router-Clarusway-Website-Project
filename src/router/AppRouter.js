import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Footer from '../components/Footer'
import Card from '../components/Card'
const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/card" element={<Card/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter