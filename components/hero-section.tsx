"use client";
import React from "react";
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo";
import ColourfulText from "@/components/ui/colourful-text";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* 3D Marquee as background */}
      <div className="absolute inset-0 z-0">
        <ThreeDMarqueeDemo />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex h-[90vh] w-full overflow-hidden antialiased md:items-center md:justify-center">
        <div className="pointer-events-none absolute inset-0 select-none bg-black/30" />
        
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="pb-2 text-center font-inter tracking-tighter">
            <span className="text-4xl md:text-6xl font-black block text-white">Hi, my name is</span>
            <span className="text-5xl md:text-8xl font-black"><ColourfulText text="Awang" /></span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            and I am a Software Engineer! This is my portfolio website built with Next.js, Tailwind CSS, and Aceternity UI. Browse through my projects which ranges from Laravel Projects to Web Augmented Reality and Virtual Reality.
          </p>
        </div>
      </div>
    </div>
  );
} 