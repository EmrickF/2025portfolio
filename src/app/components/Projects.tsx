"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const projectAnimations: { [key: string]: Variants } = {
  fromBottom: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) setKey((prev) => prev + 1);
  }, [isInView]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#projects") setKey((prev) => prev + 1);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const projects = [
    {
      title: "Monster Clicker Game",
      description:
        "A game where you click on monsters to upgrade them and buy upgrades.",
      image: "/monsterc.png",
      tags: ["JavaScript", "Node.js", "CSS"],
      link: "https://github.com/EmrickF/monsterclicker",
    },
    {
      title: "Dice Rolling Game",
      description:
        "A small and simple game where you roll to get 3 in a row of the same numbers.",
      image: "/diceg.png",
      tags: ["TypeScript", "Tailwind CSS"],
      link: "https://github.com/EmrickF/DiceGame",
    },
    {
      title: "Ran Out of Cool Small Projects",
      description: "To be continued...",
      image: "",
      tags: ["...", "...", "..."],
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen pt-40 pb-20 bg-primary relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          key={`title-${key}`}
          variants={projectAnimations.fromBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-16"
        >
          <div className="absolute -inset-2 bg-red-800 transform -skew-x-6"></div>
          <h2 className="relative px-6 py-3 text-3xl text-black tracking-wider font-bold">
            PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${key}`}
              variants={projectAnimations.fromBottom}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-red-800 border-2 border-red-900 hover:border-red-700 transition-all duration-300 rounded-md"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white hover:bg-red-700 hover:text-white transition-colors text-red-900 rounded-md font-bold"
                    >
                      View on GitHub
                    </a>
                  ) : (
                    <span className="p-3 bg-gray-300 text-gray-700 rounded-md cursor-not-allowed font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-black font-bold">{project.title}</h3>
                <p className="text-black text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-bold text-xs px-3 py-1 border border-black text-black hover:bg-red-700 hover:text-black transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
