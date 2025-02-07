"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination]}
        // navigation
        // mousewheel
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
      >
        {projects.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center pb-12 justify-center cursor-grab sm:w-96 w-[80vw]">
              <PinContainer title={item.title} href={item.link} className="pb-4">
                <div className="relative flex items-center justify-center sm:w-80 w-[80vw] overflow-hidden h-[16vh] lg:h-[30vh]">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" layout="fill" objectFit="cover" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute top-0 object-cover p-2"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl py-4 md:text-xl text-base line-clamp-1">
                  {item.short}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  {/* Icons */}
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center hover:underline cursor-pointer">
                    <p className="flex lg:text-xl md:text-xs text-sm  text-purple">
                      <Link href={item.link || "/"} target="_blank" rel="noopener noreferrer">Live Site</Link>
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentProjects;
