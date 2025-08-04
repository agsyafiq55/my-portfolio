"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandThreejs,
  IconLetterASmall,
  IconWorldWww,
  IconBrandMysql,
  IconBrandTailwind,
} from "@tabler/icons-react";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center font-inter">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
          A collection of my recent work, showcasing full-stack web applications and innovative solutions.
        </p>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <BentoGridItem
              key={i}
              title={project.title}
              description={project.description}
              header={project.header}
              icon={project.icon}

            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectImage = ({ alt, src, hoverSrc }: { alt: string; src?: string; hoverSrc?: string }) => (
  <div className="relative w-full h-full overflow-hidden rounded-lg group">
    {src && (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800 transition-opacity duration-500 group-hover:opacity-0"
      />
    )}
    {hoverSrc && (
      <img
        src={hoverSrc}
        alt={alt}
        className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    )}
    {!src && !hoverSrc && (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{alt}</span>
      </div>
    )}
  </div>
);

const ProjectLinks = ({ github, demo }: { github?: string; demo?: string }) => (
  <div className="flex space-x-2 mt-auto">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs flex items-center gap-1 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
      >
        <IconBrandGithub className="h-3.5 w-3.5" />
        Source Code
      </a>
    )}
    {demo && (
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs flex items-center gap-1 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
      >
        <IconWorldWww className="h-3.5 w-3.5" />
        Live Website
      </a>
    )}
  </div>
);

const TechBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
    {icon}
    {label}
  </span>
);

const AchievementBadge = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
    {text}
  </span>
);

const projects = [
  {
    title: "UMS Tourism Web System (Final Year Project)",
    description: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A comprehensive tourism web system for Universiti Malaysia Sabah (UMS) that allows tourists to explore attractions, 
          book tickets, create itineraries, and experience Web AR/VR for virtual mosque tours.
        </p>
        <div className="flex flex-wrap gap-1">
          <TechBadge icon={<IconBrandHtml5 className="h-3 w-3" />} label="HTML" />
          <TechBadge icon={<IconBrandCss3 className="h-3 w-3" />} label="CSS" />
          <TechBadge icon={<IconBrandJavascript className="h-3 w-3" />} label="JavaScript" />
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="PHP" />
          <TechBadge icon={<IconBrandMysql className="h-3 w-3" />} label="MySQL" />
          <TechBadge icon={<IconLetterASmall className="h-3 w-3" />} label="A-Frame" />
        </div>
        <div className="flex flex-wrap gap-1">
          <AchievementBadge text="Grade A - FYP 1" />
          <AchievementBadge text="Grade A - FYP 2" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/ums-tourism"/>
      </div>
    ),
    header: <ProjectImage alt="UMS Tourism System" src="/projects/images/ums-tourism.png" hoverSrc="/projects/images/ums-tourism.png" />,
    icon: <IconBrandPhp className="h-4 w-4 text-purple-500" />
  },
  {
    title: "KKHS Board of Governors Website",
    description: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          CMS-based website with professional UI design as the official website for Kota Kinabalu High School&apos;s Board of Governors.
        </p>
        <div className="flex flex-wrap gap-1">
          <TechBadge icon={<IconBrandLaravel className="h-3 w-3" />} label="Laravel 12" />
          <TechBadge icon={<IconBrandTailwind className="h-3 w-3" />} label="Tailwind CSS" />
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="Livewire 3" />
        </div>
        <div className="flex flex-wrap gap-1">
          <AchievementBadge text="AI Chatbot Integration" />
        </div>
        <ProjectLinks demo="https://kkhsbog.com" />
      </div>
    ),
    header: <ProjectImage alt="KKHS Board of Governors" src="/projects/images/kkhsbog1.png" hoverSrc="/projects/images/kkhsbog2.png" />,
    icon: <IconBrandLaravel className="h-4 w-4 text-red-500" />,
  },
  {
    title: "KKHS Facility Booking System",
    description: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A web-based system developed for Kota Kinabalu High School to manage bookings for school facilities, including the AI Center, 
          School Hall, and Badminton Court.
        </p>
        <div className="flex flex-wrap gap-1">
          <TechBadge icon={<IconBrandLaravel className="h-3 w-3" />} label="Laravel 12" />
          <TechBadge icon={<IconBrandTailwind className="h-3 w-3" />} label="Tailwind CSS" />
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="Livewire 3" />
        </div>
        <div className="flex flex-wrap gap-1">
        </div>
      </div>
    ),
    header: <ProjectImage alt="KKHS Facility Booking" src="/projects/images/facility1.png" hoverSrc="/projects/images/facility2.png" />,
    icon: <IconBrandLaravel className="h-4 w-4 text-red-500" />,
  },
  {
    title: "KKHS Concert Ticketing System",
    description: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A digital ticketing web-based system for Kota Kinabalu High School, designed to manage over 2,000 
          concert attendees annually with automated email delivery and QR-based validation.
        </p>
        <div className="flex flex-wrap gap-1">
          <TechBadge icon={<IconBrandLaravel className="h-3 w-3" />} label="Laravel 12" />
          <TechBadge icon={<IconBrandTailwind className="h-3 w-3" />} label="Tailwind CSS" />
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="Livewire 3" />
        </div>
        <div className="flex flex-wrap gap-1">
          <AchievementBadge text="Role-based System" />
          <AchievementBadge text="2K+ Users" />
        </div>
        <ProjectLinks demo="https://portal.kkhsbog.com/" />
      </div>
    ),
    header: <ProjectImage alt="KKHS Concert Ticketing" src="/projects/images/ticket1.png" hoverSrc="/projects/images/ticket2.png" />,
    icon: <IconBrandLaravel className="h-4 w-4 text-red-500" />,
  },
  {
    title: "UMS Virtual Tour",
    description: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Part of the Final Year Project &quot;UMS Tourism Web System&quot; - an immersive virtual tour experience 
          using Web AR/VR technology for exploring university facilities.
        </p>
        <div className="flex flex-wrap gap-1">
          <TechBadge icon={<IconBrandHtml5 className="h-3 w-3" />} label="HTML" />
          <TechBadge icon={<IconBrandCss3 className="h-3 w-3" />} label="CSS" />
          <TechBadge icon={<IconBrandJavascript className="h-3 w-3" />} label="JavaScript" />
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="PHP" />
          <TechBadge icon={<IconLetterASmall className="h-3 w-3" />} label="A-Frame" />
        </div>
        <div className="flex flex-wrap gap-1">
          <AchievementBadge text="Web AR/VR" />
        </div>
        <ProjectLinks demo="https://umsvirtualtour.netlify.app/" />
      </div>
    ),
    header: <ProjectImage alt="UMS Virtual Tour" src="/projects/images/webvr.png" hoverSrc="/projects/images/webar.png" />,
    icon: <IconBrandThreejs className="h-4 w-4 text-blue-500" />,
  },
]; 