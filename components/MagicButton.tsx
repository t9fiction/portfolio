import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-transform duration-200"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-800 px-7 text-sm font-medium text-slate-100 backdrop-blur-3xl gap-2 transition-colors duration-200 hover:bg-slate-700 hover:text-yellow-400 ${otherClasses}`}
      >
        {position === "left" && icon}
        <span>{title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
