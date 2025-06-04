"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandThreejs,
  IconLetterASmall,
  IconWorldWww,
} from "@tabler/icons-react";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center font-inter">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
          A collection of my recent work, ranging from web applications to AR/VR experiences.
        </p>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <BentoGridItem
              key={i}
              title={project.title}
              description={project.description}
              header={project.header}
              icon={project.icon}
              className={project.className || ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-32 overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
      <span className="text-sm text-gray-500 dark:text-gray-400">{alt}</span>
    </div>
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
        GitHub
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
        Live Demo
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

const projects = [
  {
    title: "UMS Tourism",
    description: (
      <div className="space-y-2">
        <p>A tourism website for University Malaysia Sabah with Web AR/VR.</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="PHP" />
          <TechBadge icon={<IconBrandHtml5 className="h-3 w-3" />} label="HTML" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/ums-tourism"/>
      </div>
    ),
    header: <ProjectImage src="/projects/ecommerce.jpg" alt="E-Commerce Platform" />,
    icon: <IconBrandLaravel className="h-4 w-4 text-red-500" />,
    className: "md:col-span-2"
  },
  {
    title: "UMS Virtual Tour",
    description: (
      <div className="space-y-2">
        <p>"UMS Virtual Tour" is part of my Final Year Project; "UMS Tourism Web System"</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <TechBadge icon={<IconBrandHtml5 className="h-3 w-3" />} label="HTML" />
          <TechBadge icon={<IconBrandCss3 className="h-3 w-3" />} label="CSS" />
          <TechBadge icon={<IconBrandJavascript className="h-3 w-3" />} label="Javascript" />
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="PHP" />
          <TechBadge icon={<IconLetterASmall className="h-3 w-3" />} label="A-Frame" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/ums-virtual-tour" demo="https://umsvirtualtour.netlify.app/" />
      </div>
    ),
    header: <ProjectImage src="/projects/portfolio.jpg" alt="Portfolio Website" />,
    icon: <IconBrandPhp className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "AR Product Viewer",
    description: (
      <div className="space-y-2">
        <p>Web-based augmented reality application for 3D product visualization.</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <TechBadge icon={<IconBrandThreejs className="h-3 w-3" />} label="Three.js" />
          <TechBadge icon={<IconBrandReact className="h-3 w-3" />} label="React" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/ar-viewer" demo="https://ar-viewer.example.com" />
      </div>
    ),
    header: <ProjectImage src="/projects/ar-viewer.jpg" alt="AR Product Viewer" />,
    icon: <IconBrandThreejs className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Task Management System",
    description: (
      <div className="space-y-2">
        <p>Collaborative task management system with real-time updates and team features.</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <TechBadge icon={<IconBrandLaravel className="h-3 w-3" />} label="Laravel" />
          <TechBadge icon={<IconBrandNextjs className="h-3 w-3" />} label="Next.js" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/task-system" />
      </div>
    ),
    header: <ProjectImage src="/projects/task-manager.jpg" alt="Task Management System" />,
    icon: <IconBrandLaravel className="h-4 w-4 text-red-500" />,
  },
  {
    title: "Educational Platform",
    description: (
      <div className="space-y-2">
        <p>Online learning platform with course management, quizzes and progress tracking.</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <TechBadge icon={<IconBrandPhp className="h-3 w-3" />} label="PHP" />
          <TechBadge icon={<IconBrandReact className="h-3 w-3" />} label="React" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/edu-platform" demo="https://edu-platform.example.com" />
      </div>
    ),
    header: <ProjectImage src="/projects/education.jpg" alt="Educational Platform" />,
    icon: <IconBrandPhp className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "VR Training Simulation",
    description: (
      <div className="space-y-2">
        <p>Virtual reality training simulation for industrial safety procedures.</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <TechBadge icon={<IconBrandThreejs className="h-3 w-3" />} label="Three.js" />
          <TechBadge icon={<IconBrandReact className="h-3 w-3" />} label="React" />
        </div>
        <ProjectLinks github="https://github.com/agsyafiq55/vr-training" />
      </div>
    ),
    header: <ProjectImage src="/projects/vr-training.jpg" alt="VR Training Simulation" />,
    icon: <IconBrandThreejs className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-2"
  },
]; 