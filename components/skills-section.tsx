"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandThreejs,
  IconLetterASmall,
  IconBrandPython,
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandMysql,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandVercel,
  IconBrandDocker,
  IconCode,
  IconBrandKotlin,
  IconCodeDots,
  IconDatabase,
  IconTools,
} from "@tabler/icons-react";

export default function SkillsSection() {
  return (
    <div className="flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white mb-4">
              My Technical <br />
              <span className="text-4xl md:text-[6rem] mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-inter">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills across various domains
            </p>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 h-full">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const SkillCategory = ({ title, skills, icon, color }: SkillCategoryProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`text-2xl ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Programming Languages",
    icon: <IconCodeDots />,
    color: "text-blue-500",
    skills: [
      "HTML",
      "CSS", 
      "JavaScript",
      "PHP",
      "Python",
      "Java",
      "C++",
      "C#",
      "Kotlin"
    ]
  },
  {
    title: "Front-End Frameworks",
    icon: <IconBrandReact />,
    color: "text-cyan-500",
    skills: [
      "React.js",
      "Next.js",
      "Livewire"
    ]
  },
  {
    title: "Back-End Frameworks & Technologies",
    icon: <IconDatabase />,
    color: "text-red-500",
    skills: [
      "Laravel",
      "Flask",
      "TensorFlow",
      "MySQL"
    ]
  },
  {
    title: "Web AR/VR Frameworks",
    icon: <IconBrandThreejs />,
    color: "text-purple-500",
    skills: [
      "A-Frame",
      "AR.js",
      "Three.js"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <IconTools />,
    color: "text-green-500",
    skills: [
      "GitHub",
      "Visual Studio Code",
      "Figma",
      "Railway",
      "Vercel",
      "Cpanel",
      "Docker"
    ]
  }
]; 