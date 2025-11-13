"use client"
import { ArrowDown } from 'lucide-react';
import React from 'react';

export default function Start() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden select-none"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-primary"></div>
        <div
          className="absolute -left-1/4 top-1/4 w-1/2 h-px bg-primary/20 transform -rotate-45"
          style={{ width: '150%' }}
        ></div>
        <div
          className="absolute -right-1/4 bottom-1/4 w-1/2 h-px bg-primary/20 transform -rotate-45"
          style={{ width: '150%' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="relative inline-block">
            <div
              className="absolute -inset-4 -skew-x-12 bg-red-800"
              style={{
                zIndex: 0,
              }}
            ></div>
            <h1 className="relative px-8 py-4 text-black z-10">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
                EMRICK
              </span>
            </h1>
          </div>
         
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl text- tracking-wide text-red-800 font-bold">
              BEGINNER DEVELOPER
            </p>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-red-800 font-semibold">
              DOING MY BEST 24/7 TO IMPROVE
            </p>
          </div>

          <div className="flex justify-center items-center pt-8">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 overflow-hidden border-3 border-red-800 rounded-md -skew-x-12"
              id="view-work-btn"
            >
              <span className=" text-white font-bold relative z-10 tracking-wider transition-colors group-hover:text-black">
                VIEW WORK
              </span>
              <span className="absolute inset-0 bg-red-800 transform  scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute left-1/2 transform -translate-x-1/2 mt-4"
          style={{ bottom: 55 }}
          aria-label="View Work"
        >
          <ArrowDown size={40} className="text-red-700 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
