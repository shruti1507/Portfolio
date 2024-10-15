import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Sevice from './components/Sevice'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Sevice />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
