import React from "react";

import { workExperience } from "@/data";
import { ExperienceCard } from "./ui/ExperienceCard";

const Experience = () => {
  return (
    <div className="py-12 w-full">
      <h1 className="heading" id="experiences">
        <span className="text-yellow-400">Technical Domains</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <ExperienceCard
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(30,41,59)",
              backgroundColor:
                "linear-gradient(90deg, rgba(30,41,59,1) 0%, rgba(51,65,85,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
              zIndex: 1,
            }}
            className="flex-1 text-white border-slate-600"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-slate-300 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </ExperienceCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
