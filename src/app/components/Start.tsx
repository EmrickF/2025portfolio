"use client";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const imageAnimations: { [key: string]: Variants } = {
  fromBottom: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
}

const images = [
  {
    src: "/axel2.png",
    alt: "Game character",
    animation: "fromBottom",
    delay: 0,
    pos: "right-[30%] top-[54%] sm:left-[25%] sm:top-[54%]",
  },
]

export default function Start() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) setKey((prev) => prev + 1);
  }, [isInView]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#home") setKey((prev) => prev + 1);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden select-none"
    >
      <div className="absolute inset-0 z-0">
        {images.map((img) => (
          <motion.div
            key={`${img.src}-${key}`}
            variants={imageAnimations[img.animation]}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: img.delay }}
            className={`absolute w-120 h-120 md:w-150 md:h-110 ${img.pos}}`}
          >
<div className="relative w-full h-full select-none">
  <div className="absolute inset-0" />
       <Image
          src={img.src}
         alt={img.alt}
         fill
         className={`object-contain pointer-events-none relative z-10 `}
         />
      </div>
          </motion.div>
        ))}
      </div>

      {/* Center text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="relative inline-block">
            <div
              className="absolute -inset-4 -skew-x-12 bg-red-800"
              style={{ zIndex: 0 }}
            ></div>
            <h1 className="relative px-8 py-4 text-black z-10">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
                EMRICK
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl tracking-wide text-red-800 font-bold">
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
              <span className="text-white font-bold relative z-10 tracking-wider transition-colors group-hover:text-black">
                VIEW WORK
              </span>
              <span className="absolute inset-0 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          </div>
        </div>

        {/* Bouncing arrow */}
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
