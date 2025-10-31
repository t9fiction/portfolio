"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] bg-slate-800/90 backdrop-blur-md top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-yellow-500/30 shadow-lg items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className="relative text-slate-200 items-center flex space-x-1 transition-all duration-300"
          >
            <motion.div
              className="flex items-center space-x-1 px-3 py-2 rounded-full"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(250, 204, 21, 0.1)",
                color: "#fbbf24",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
