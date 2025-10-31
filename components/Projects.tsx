
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledProjects, setShuffledProjects] = useState(projects);

  useEffect(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    setShuffledProjects(shuffled);
  }, []);

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + 4) % shuffledProjects.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - 4 + shuffledProjects.length) % shuffledProjects.length);
  };

  const currentProjects = shuffledProjects.slice(currentIndex, currentIndex + 4);

  return (
    <div className="py-20 w-full" id="projects">
      <h1 className="heading mb-16">
        Featured <span className="text-yellow-400 !important">Projects</span>
      </h1>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-bold">
                    {project.short}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-slate-900/90 to-slate-800/90">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                  {project.des}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.iconLists.map((icon, idx) => (
                    <div key={idx} className="w-8 h-8 relative bg-slate-700/50 rounded p-1">
                      <Image
                        src={icon}
                        alt="tech icon"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-200 hover:text-yellow-400 transition-colors text-sm font-medium"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-slate-200 hover:text-yellow-400 transition-colors text-sm font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevProjects}
            className="p-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextProjects}
            className="p-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
