"use client"
import React, { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) 
    }
  }

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-red-500 select-none">
      {/* Navbar container */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-widest">EMRICK</h1>

        {/* Hamburger button (visible on mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple icon (3 lines) */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-12 text-base">
          {["Home", "About", "Projects", "Skills"].map((section) => (
            <li key={section}>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section)
                }}
                href={`#${section}`}
                className="hover:text-red-500 cursor-pointer transition-colors"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile drop down */}
      {isOpen && (
        <ul className="flex flex-col items-center space-y-4 py-4 border-t border-red-500 md:hidden bg-black">
          {["Home", "About", "Projects", "Skills"].map((section) => (
            <li key={section}>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section)
                }}
                href={`#${section}`}
                className="hover:text-red-500 cursor-pointer transition-colors"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
