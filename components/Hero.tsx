import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#fbbf24"
        />
      </div>

      <div className="h-screen w-full bg-slate-900 bg-grid-white/[0.02] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <p className="uppercase tracking-wider text-xs text-center text-yellow-400 font-medium">
              Blockchain Developer | Cloud Engineer | AI Specialist
            </p>
          </div>

          <TextGenerateEffect
            words="Where Blockchain Meets Cloud, Supercharged by AI."
            className="text-center text-[32px] md:text-4xl lg:text-5xl text-white"
          />

          <p className="text-center md:tracking-wide mb-8 text-sm md:text-lg text-slate-300 font-light max-w-2xl">
            Blockchain Developer, Cloud Engineer, AI Automation Expert. Hi, I&apos;m{" "}
            <span className="text-yellow-400 font-medium">Sohail</span>!
          </p>

          <a href="#projects">
            <MagicButton
              title="View My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
