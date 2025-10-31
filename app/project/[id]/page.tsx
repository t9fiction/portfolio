"use client";
import { projects } from "@/data";
import { Project } from "@/lib/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    if (!id) return;
    
    const projectId = parseInt(id as string);
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Project not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src={project.img}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{project.des}</p>
          
          <div className="flex gap-4 mb-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg transition-colors"
            >
              View Code
            </a>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-yellow-500/20 text-yellow-400 px-4 py-1 rounded-full">
              Blockchain
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.iconLists.map((icon, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                <Image src={icon} alt="tech" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
