"use client";
import React from "react";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-[6rem] font-bold mb-16 leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center font-inter"
        >
          About Me
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5"
          >
            <CardSpotlight className="h-auto w-full max-w-md mx-auto backdrop-blur-sm bg-gray-900/60 border border-gray-800">
              <div className="relative z-20 flex flex-col items-center p-8">
                <div className="relative w-56 h-56 mb-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style={{ padding: '4px' }}>
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image 
                        src="/profile.jpg" 
                        alt="Ag Syafiq" 
                        width={256} 
                        height={256}
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">Ag Syafiq bin Ag Ahmad</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-blue-400 text-lg">Software Engineer</p>
                </div>
                
                <div className="flex gap-4 mb-6">
                  <SocialLink href="https://github.com/agsyafiq55" icon={<GitHubIcon />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/ag-syafiq-bin-ag-ahmad-46966a222/" icon={<LinkedInIcon />} label="LinkedIn" />
                </div>
                
                <div className="w-full p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Available for hire</span>
                    <span className="text-sm text-green-400">Yes I am!</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Location</span>
                    <span className="text-sm text-white">Sabah, Malaysia</span>
                  </div>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
          
          {/* Professional Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7"
          >
            <CardSpotlight className="h-auto w-full backdrop-blur-sm bg-gray-900/60 border border-gray-800">
              <div className="relative z-20 p-8">
                <div className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                  <h3 className="text-blue-400 font-medium">Professional Profile</h3>
                </div>
                
                <div className="text-gray-200 space-y-6 text-lg">
                  <p className="leading-relaxed">
                    Experienced software engineer with a passion for creating innovative web applications
                    and immersive AR/VR experiences. I specialize in full-stack development using
                    modern technologies like React, Next.js, and Laravel.
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="inline-block w-6 h-6 mr-2 rounded bg-blue-500 items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Key Skills
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skills.map((skill, index) => (
                        <SkillBadge key={index} title={skill} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="inline-block w-6 h-6 mr-2 rounded bg-purple-500 items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </span>
                      Education
                    </h4>
                    <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                      <h5 className="font-semibold text-white">Bachelor Of Computer Science with Honours</h5>
                      <p className="text-blue-400">Software Engineering</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-300">University Malaysia Sabah</span>
                        <span className="text-gray-400">2021-2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  "JavaScript/TypeScript",
  "React & Next.js",
  "Laravel & PHP",
  "Web AR/VR",
  "Tailwind CSS",
  "UI/UX Design",
];

const SkillBadge = ({ title, index }: { title: string; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700 rounded-lg p-3 flex items-center gap-2 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
    >
      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
      <p className="text-white text-sm">{title}</p>
    </motion.div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
      aria-label={label}
    >
      <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-transform bg-gray-900 text-xs text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">
        {label}
      </span>
      {icon}
    </a>
  );
};

const GitHubIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default AboutSection; 