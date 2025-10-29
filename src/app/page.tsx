import React from 'react'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Start from './components/Start'

export default function page() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Start />
      </div>
      <div id="about">
        <Aboutme />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
  )
}