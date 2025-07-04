"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/common/components/sections/hero";

// Dynamically import components for code splitting
const About = dynamic(() => import("@/common/components/sections/about"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const Projects = dynamic(() => import("@/common/components/sections/projects"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const Experience = dynamic(() => import("@/common/components/sections/experience"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const Skills = dynamic(() => import("@/common/components/sections/skills"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const Contact = dynamic(() => import("@/common/components/sections/contact"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading about section...</div></div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading projects...</div></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading experience...</div></div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading skills...</div></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-pulse">Loading contact section...</div></div>}>
        <Contact />
      </Suspense>
    </main>
  );
}
