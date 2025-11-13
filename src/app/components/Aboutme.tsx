"use client";
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const imageAnimations: { [key: string]: Variants } = {
  fromTop: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  fromBottom: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  fromRight: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }
}

const images = [
  {
    src: "/riku.png",
    alt: "Game character",
    animation: "fromBottom",
    delay: 0,
    pos: "left-[3%] top-[65%] sm:left-[6%] sm:top-[45%]"
  },
  {
    src: "/sora.png",
    alt: "Game character",
    animation: "fromTop",
    delay: 0.2,
    className: "rotate-180",
    pos: "left-[5%] top-[17%] sm:left-[10%] sm:top-[22%]"
  },
  {
    src: "/leon.png",
    alt: "Game character",
    animation: "fromRight",
    delay: 0.4,
    pos: "right-[5%] top-[40%] sm:right-[5%] sm:top-[35%]"
  },
  {
    src: "/nimbus.png",
    alt: "cloud",
    animation: "fromRight",
    delay: 0.6,
    pos: "right-[10%] bottom-[10%] sm:right-[5%] sm:bottom-[1%]"
  },
  {
    src: "/joker.png",
    alt: "Game character",
    animation: "fromBottom",
    delay: 0.8,
    pos: "left-[20%] bottom-[10%] sm:left-[25%] sm:bottom-[4%]"
  },
  {
    src: "/arthur.png",
    alt: "Game character",
    animation: "fromBottom",
    delay: 1,
    pos: "left-[45%] bottom-[4%] sm:left-[45%] sm:bottom-[8%]"
  },
  {
    src: "/accelerator.png",
    alt: "Game character",
    animation: "fromTop",
    delay: 1.2,
    pos: "left-[30%] top-[5%] sm:left-[35%] sm:top-[8%]"
  },
  {
    src: "/wodg.png",
    alt: "album",
    animation: "scale",
    delay: 1.4,
    opacity: "opacity-75",
    pos: "right-[5%] top-[15%] sm:right-[30%] sm:top-[9%]"
  },
  {
    src: "/hic.png",
    alt: "rapper",
    animation: "scale",
    delay: 1.6,
    opacity: "opacity-90",
    pos: "left-[60%] bottom-[12%] sm:right-[25%] sm:bottom-[11%]"
  },
  {
    src: "/exeter.png",
    alt: "album",
    animation: "scale",
    delay: 1.8,
    opacity: "opacity-75",
    pos: "right-[5%] top-[5%] sm:right-[8%] sm:top-[8%]"
  }
]

export default function Aboutme() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (isInView) setKey(prev => prev + 1)
  }, [isInView])

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') setKey(prev => prev + 1)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className=" min-h-screen flex items-center justify-center bg-primary relative overflow-hidden "
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-red-900"></div>

      {/* Background floating images */}
      <div className="absolute inset-0 z-0">
        {images.map((img,) => (
          <motion.div
            key={`${img.src}-${key}`}
            variants={imageAnimations[img.animation]}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: img.delay }}
            className={`absolute w-40 h-40 md:w-64 md:h-64 ${img.pos} ${img.className || ''}`}
          >
            <div className="relative w-full h-full select-none">
              <div className="absolute inset-0 rounded-full bg-[#d92323]/70 blur-3xl" />
              <Image
                src={img.src}
                alt={img.alt}
                width={256}
                height={256}
                className={"pointer-events-none relative z-10 object-contain ${img.opacity || ''}"}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center text card */}
      <div className="relative z-10 max-w-3xl w-full transform -skew-x-12 border-4 border-[#8a0e0e] m-4">
        <motion.div
          key={`text-${key}`}
          variants={imageAnimations.scale}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#d92323]/50 blur-3xl transform translate-x-2 translate-y-2"></div>

          <div className="relative bg-[#d92323] py-6 px-6 md:py-8 md:px-16">
            <div className="transform skew-x-12">
              <p className=" text-lg md:text-3xl text-black text-center md:text-left select-none">
                My name is <b>Erik</b> and I love playing video games in my spare time and listening
                to music — mainly artists like <b>bladee</b> & <b>Hi-C</b> and genres like
                <b> cloudrap</b> & <b>hyperpop</b>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
