import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered DeFi Platform",
      description: "Blockchain platform with AI-driven trading algorithms and smart contract automation",
      tech: ["Solidity", "React", "AI Agents", "Web3.js"],
      image: "/projects/blockchain.gif",
      github: "#",
      live: "#",
      category: "Blockchain + AI"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud deployment system with AI monitoring and self-healing capabilities",
      tech: ["AWS", "Terraform", "Python", "Machine Learning"],
      image: "/projects/crowdfunding.png",
      github: "#",
      live: "#",
      category: "Cloud + AI"
    },
    {
      id: 3,
      title: "n8n Workflow Automation",
      description: "Enterprise workflow automation platform with AI-powered decision making",
      tech: ["n8n", "Node.js", "AI Agents", "PostgreSQL"],
      image: "/projects/flair.png",
      github: "#",
      live: "#",
      category: "AI Automation"
    },
    {
      id: 4,
      title: "Blockchain Analytics Dashboard",
      description: "Real-time blockchain data visualization with AI-powered insights and predictions",
      tech: ["Next.js", "Three.js", "Solana", "LangChain"],
      image: "/projects/solana-journal.png",
      github: "#",
      live: "#",
      category: "Blockchain + AI"
    }
  ];

  return (
    <div className="py-20 w-full" id="projects">
      <h1 className="heading mb-16">
        Featured <span className="text-yellow-400">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 group"
          >
            <div className="relative h-48 bg-slate-700/50 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700/50 text-slate-200 rounded text-xs border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
