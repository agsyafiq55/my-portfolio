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
              I specialize in web development with a focus on interactive experiences and modern frameworks
            </p>
          </>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 h-full">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5
}

const SkillCard = ({ name, icon, level }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
      <div className="text-4xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{name}</h3>
      <div className="flex space-x-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const skills: SkillCardProps[] = [
  {
    name: "HTML",
    icon: <IconBrandHtml5 />,
    level: 5,
  },
  {
    name: "CSS",
    icon: <IconBrandCss3 />,
    level: 4,
  },
  {
    name: "JavaScript",
    icon: <IconBrandJavascript />,
    level: 4,
  },
  {
    name: "React",
    icon: <IconBrandReact />,
    level: 4,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs />,
    level: 3,
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind />,
    level: 4,
  },
  {
    name: "PHP",
    icon: <IconBrandPhp />,
    level: 4,
  },
  {
    name: "Laravel",
    icon: <IconBrandLaravel />,
    level: 3,
  },
  {
    name: "Three.js",
    icon: <IconBrandThreejs />,
    level: 3,
  },
  {
    name: "A-Frame",
    icon: <IconLetterASmall />,
    level: 3,
  },
  {
    name: "Web AR/VR",
    icon: <IconBrandThreejs />,
    level: 5,
  },
];

// Import the Figma icon separately to avoid TypeScript errors
import { IconBrandFigma } from "@tabler/icons-react"; 