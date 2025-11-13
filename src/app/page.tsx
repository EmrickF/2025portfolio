import React from 'react'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import  Skills  from './components/Skills'
import Start from './components/Start'
import Footer from './components/footer'

export default function page() {
  return (
    
    <div>
      <Navbar />
      <div id="Home">
        <Start />
      </div>
      <div id="About">
        <Aboutme />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Skills">
        <Skills />
      </div>
       <div id="Footer">
        <Footer />
      </div>
    </div>
 
  )
}