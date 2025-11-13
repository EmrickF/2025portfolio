"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skillsAnimations: { [key: string]: Variants } = {
  fromBottom: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (isInView) setKey((prev) => prev + 1)
  }, [isInView])

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#skills") setKey((prev) => prev + 1)
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const skills = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "HTML", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Deployment",
      skills: ["Vercel", "GitHub Pages"],
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative pt-40 pb-20 bg-primary overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-red-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          key={`title-${key}`}
          variants={skillsAnimations.fromBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-16"
        >
          <div className="absolute -inset-2 bg-red-800 transform -skew-x-6"></div>
          <h2 className="relative px-6 py-3 text-3xl text-black tracking-wider font-semibold">
            SKILLS
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={`${category.title}-${key}`}
              variants={skillsAnimations.fromBottom}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-red-800 border-2 border-red-700 p-6 hover:bg-black transition-all duration-300"
            >
              <h3 className="mb-4 text-black group-hover:text-white transition-colors text-2xl font-bold">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-red-700"></span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
