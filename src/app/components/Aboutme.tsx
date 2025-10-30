"use client";
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const imageAnimations: { [key: string]: Variants } = {
  fromTop: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  fromBottom: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  fromRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
};

const images = [
  { src: "/riku.png", alt: "Game character", animation: "fromBottom", delay: 0 },
  { src: "/sora.png", alt: "Game character", animation: "fromTop", delay: 0.2, className: "rotate-180" },
  { src: "/leon.png", alt: "Game character", animation: "fromRight", delay: 0.4 },
  { src: "/nimbus.png", alt: "cloud", animation: "fromRight", delay: 0.6 },
  { src: "/joker.png", alt: "Game character", animation: "fromBottom", delay: 0.8 },
  { src: "/arthur.png", alt: "Game character", animation: "fromBottom", delay: 1 },
  { src: "/accelerator.png", alt: "Game character", animation: "fromTop", delay: 1.2 },
  { src: "/exeter.png", alt: "album", animation: "scale", delay: 1.4, opacity: "opacity-75" },
  { src: "/hic.png", alt: "rapper", animation: "scale", delay: 1.6, opacity: "opacity-75" },
  { src: "/wodg.png", alt: "album", animation: "scale", delay: 1.8, opacity: "opacity-75" }
]

export default function Aboutme() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) setKey(prev => prev + 1);
  }, [isInView])

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') setKey(prev => prev + 1);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [])

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <motion.div
            key={`${img.src}-${key}`}
            variants={imageAnimations[img.animation]}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: img.delay }}
            className={`absolute w-64 h-64 ${img.className || ''}`}
            style={{ ...getPositioning(i) }}
          >
            <div className="relative w-full h-full select-none">
              <div className="absolute inset-0 rounded-full bg-[#d92323]/70 blur-3xl" />
              <Image
                src={img.src}
                alt={img.alt}
                width={256}
                height={256}
                className={`relative z-10 object-contain ${img.opacity || ''}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl w-full transform -skew-x-12 border-4 border-[#8a0e0e]">
        <motion.div 
          key={`text-${key}`}
          variants={imageAnimations.scale}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#d92323]/50 blur-3xl transform translate-x-2 translate-y-2"></div>

          <div className="relative bg-[#d92323] py-8 px-16">
            <div className="transform skew-x-12">
              <p className="text-3xl text-black select-text">
                My name is <b>Erik</b> and I love playing
                video games in my spare time and listening to music mainly artists like
                <b> bladee</b> & <b>Hi-C</b> and genres like cloudrap & hyperpop
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getPositioning(i: number) {
  const positions = [
    { left: '2.5rem', top: '50%' },
    { left: '5rem', top: '20%' },
    { right: '2.5rem', top: '25%' },
    { right: '2.5rem', top: '60%' },
    { bottom: '2.5rem', left: '25%' },
    { bottom: '4.75rem', left: '50%' },
    { bottom: '37.5rem', left: '25%' },
    { top: '8.75rem', right: '25%' },
    { bottom: '10rem', right: '20%' },
    { top: '7.5rem', right: '42.85714%' }
  ]
  return positions[i]
}