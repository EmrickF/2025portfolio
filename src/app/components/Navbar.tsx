"use client"
import React from "react"

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-black text-white flex items-center justify-between px-10 py-8 sticky top-0 z-50 border-b border-red-500">
      <h1 className="text-xl font-semibold tracking-widest">EMRICK</h1>
      <ul className="flex space-x-12 text-base">
        <li onClick={() => scrollToSection('home')} className="hover:text-red-500 cursor-pointer transition-colors">Home</li>
        <li onClick={() => scrollToSection('about')} className="hover:text-red-500 cursor-pointer transition-colors">About</li>
        <li onClick={() => scrollToSection('projects')} className="hover:text-red-500 cursor-pointer transition-colors">Projects</li>
        <li onClick={() => scrollToSection('skills')} className="hover:text-red-500 cursor-pointer transition-colors">Skills</li>
      </ul>
    </nav>
  )
}