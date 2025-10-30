"use client";
import React from "react";
import { cn } from "@/utils/cn";

export function Button({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <button
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className={cn(
          "relative bg-slate-800/90 border border-slate-600 backdrop-blur-xl text-slate-100 flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </button>
  );
}

export const MovingBorder = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
