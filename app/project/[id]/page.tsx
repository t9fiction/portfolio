"use client";

import { useEffect, useState, use } from "react";
import { projects } from "@/data";
import Link from "next/link";
import { FaGithub, FaLocationArrow, FaArrowLeft } from "react-icons/fa6";
import { Project } from "@/lib/types";

interface PageParams {
  id: string;
}

export default function ProjectPage({ params }: { params: Promise<PageParams> }) {
  const { id } = use(params); // ✅ Unwrapping params properly
  const [project, setProject] = useState<Project | undefined>();

  useEffect(() => {
    const projectId = parseInt(id);
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-24 px-4">
      <Link href="/#projects" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
        <FaArrowLeft /> Back to projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50">
            <img src={project.img} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {project.iconLists.map((icon, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <img src={icon} alt={`tech-${index}`} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full">
              {project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : "Web3"}
            </span>
            {project.tags &&
              project.tags.map((tag, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-4 py-1 rounded-full">{tag}</span>
              ))}
          </div>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <h2 className="text-2xl text-gray-300 mb-6">{project.short}</h2>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">{project.des}</p>

            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              This project showcases my expertise in{" "}
              <span className="text-purple-400">{project.category || "Web3"}</span> development, utilizing modern technologies and best practices to create a seamless user experience.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <FaGithub className="text-lg" />
                View Source
              </Link>
            )}
            <Link
              href={project.link || "/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              <span>Live Site</span>
              <FaLocationArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
