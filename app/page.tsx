"use client";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
// import { Navbar } from "@/components/Navbar";
// import { navItems2 } from "@/components/navbar-icons/iconAbout";
import Starfield from "react-starfield";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.01}
          backgroundColor="black"
        />
        <FloatingNav navItems={navItems} />
        {/* <Navbar items={navItems2} desktopClassName={'text-white'} /> */}
        <Hero />
        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
        <AuroraBackground />
      </div>
    </main>
  );
}
