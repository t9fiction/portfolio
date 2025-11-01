import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "🧱 Blockchain & Web3",
      skills: [
        "Smart Contract Development (Solidity, EVM Chains)",
        "DeFi & Token Engineering (ERC-20, ERC-721, ERC-1155)",
        "Cross-Chain & Layer-2 Solutions",
        "Web3 Integrations (Ethers.js, Viem, Wagmi)",
        "Blockchain Infrastructure (Nodes, RPCs, Dockerized environments)"
      ],
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "🤖 Artificial Intelligence & Automation",
      skills: [
        "AI Agents & Automation (OpenAI, n8n, MCP Servers)",
        "Generative AI Applications",
        "Chatbot Development & AI-Powered dApps",
        "LLM CLI Tools (Gemini CLI, Warp AI, Amazon Q CLI)"
      ],
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "☁️ Cloud & DevOps",
      skills: [
        "Cloud Computing (AWS, GCP)",
        "Containerization & Orchestration (Docker, Kubernetes)",
        "CI/CD Pipelines & Infrastructure Automation",
        "Virtualization (VMware, VirtualBox, KVM, Proxmox)",
        "Linux System Administration & Networking"
      ],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "💻 Software Development",
      skills: [
        "Full-Stack dApp Development (Next.js, React, TailwindCSS)",
        "API Integration & Backend Systems",
        "Secure System Design & Optimization",
        "Backend Systems (Node.js, Express, FastAPI)",
        "Version Control & Collaboration (Git, GitHub)"
      ],
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="py-20 w-full">
      <h1 className="heading mb-16">
        Technical <span className="text-yellow-400">Domains</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300"
          >
            <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.1) }}
                  className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg border border-slate-400 hover:border-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-200 text-sm leading-relaxed">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
