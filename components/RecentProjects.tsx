"use client";

import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const RecentProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Extract unique categories from projects
  const categories = ["all", ...new Set(projects.map(project => project.category).filter(Boolean))];

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]); 

  return (
    <div className="py-16" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="heading text-4xl text-white md:text-5xl font-bold text-center mb-6">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
          <p className="text-gray-100 text-center max-w-2xl mb-8">
            Explore my latest work in blockchain, smart contracts, and Web3 development. Each project showcases different skills and technologies.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 z-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-purple-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          loop={filteredProjects.length > 3}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          speed={1000}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1536: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {filteredProjects.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center justify-center h-auto">
              <div className="h-[32rem] w-full sm:w-96 flex items-center justify-center">
                <PinContainer
                  title={item.title}
                  className="pb-2 w-full h-full"
                >
                  <div className="flex flex-col h-full">
                    <Link
                      href={`/project/${item.id}`} 
                      className="relative flex items-center justify-center overflow-hidden w-full h-[18vh] lg:h-[30vh] cursor-pointer group"
                    >
                      <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-lg font-medium">View Details</span>
                      </div>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={160}
                        height={80}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>

                    <div className="flex flex-col flex-1 justify-between">
                      <div className="cursor-grab active:cursor-grabbing">
                        <div className="flex items-center gap-2 mt-4">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                            {item.category ? item.category.charAt(0).toUpperCase() + item.category.slice(1) : "Web3"}
                          </span>
                          {item.tags && item.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h1 className="font-bold lg:text-xl py-3 md:text-lg text-base line-clamp-1 group-hover:text-purple-400 transition-colors">
                          {item.short}
                        </h1>

                        <p
                          className="lg:text-base font-light text-sm line-clamp-2 mb-4"
                          style={{
                            color: "#BEC1DD",
                          }}
                        >
                          {item.des}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        {/* Icons */}
                        <div className="flex items-center">
                          {item.iconLists.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center group-hover:border-purple-500/50 transition-colors"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                              title={`Technology ${index + 1}`}
                            >
                              <Image width={40} height={40} src={icon} alt={`technology-${index}`} className="p-2" />
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {item.github && (
                            <Link
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                              title="View Source Code"
                            >
                              <FaGithub className="text-lg" />
                            </Link>
                          )}
                          <Link
                            href={item.link || "/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-colors"
                          >
                            <span className="text-purple-400 text-sm font-medium">Live Site</span>
                            <FaLocationArrow className="text-xs" color="#CBACF9" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
            <button 
              onClick={() => setActiveCategory("all")}
              className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
            >
              Show all projects
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default RecentProjects;