"use client";
import { Suspense } from "react";
import Skills from "@/components/Skills";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ScrollProgress from "@/components/ScrollProgress";
import { navItems } from "@/data";
import Starfield from "react-starfield";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-400"></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-slate-900">
      <div className="max-w-7xl w-full">
        <ScrollProgress />
        <Starfield
          starCount={800}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <FloatingNav navItems={navItems} />
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          {/* <Grid /> */}
          <Projects />
          <Skills />
          {/* <Experience /> */}
          <Clients />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
