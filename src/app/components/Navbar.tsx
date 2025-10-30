"use client"
import React from "react"
import Link from "next/link"

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between px-10 py-8 sticky top-0 z-50 border-b border-red-500">
      <h1 className="text-xl font-semibold tracking-widest">EMRICK</h1>
      <ul className="flex space-x-12 text-base">
        <li>
          <a 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }} 
            href="#home" 
            className="hover:text-red-500 cursor-pointer transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }} 
            href="#about" 
            className="hover:text-red-500 cursor-pointer transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('projects')
            }} 
            href="#projects" 
            className="hover:text-red-500 cursor-pointer transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('skills')
            }} 
            href="#skills" 
            className="hover:text-red-500 cursor-pointer transition-colors"
          >
            Skills
          </a>
        </li>
      </ul>
    </nav>
  )
}