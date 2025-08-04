"use client";
import React from "react";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "motion/react";
import { 
  IconMapPin, 
  IconBriefcase, 
  IconSchool, 
  IconHandStop, 
  IconCertificate,
  IconBuilding
} from "@tabler/icons-react";

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[140px] animate-pulse delay-500" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
            <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Get to know me</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 font-inter"
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Enhanced Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-8"
          >
            <CardSpotlight className="h-auto w-full max-w-lg mx-auto backdrop-blur-sm bg-gray-900/40 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
              <div className="relative z-20 flex flex-col items-center p-10">
                {/* Enhanced Profile Image */}
                <div className="relative w-64 h-64 mb-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse" style={{ padding: '6px' }}>
                    <div className="absolute inset-0 rounded-full overflow-hidden bg-black">
                      <Image 
                        src="/profile.jpg" 
                        alt="Ag Syafiq" 
                        width={256} 
                        height={256}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                  {/* Floating status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3 text-center">Ag Syafiq bin Ag Ahmad</h3>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-blue-400 font-medium">Software Engineer</p>
                  </div>
                </div>
                
                {/* Enhanced Social Links */}
                <div className="flex gap-4 mb-8">
                  <SocialLink href="https://github.com/agsyafiq55" icon={<GitHubIcon />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/ag-syafiq-bin-ag-ahmad-46966a222/" icon={<LinkedInIcon />} label="LinkedIn" />
                </div>
                
                {/* Enhanced Info Cards */}
                <div className="w-full space-y-4">
                  <InfoCard 
                    icon={<IconMapPin size={24} />}
                    label="Location" 
                    value="Sabah, Malaysia" 
                    color="blue"
                  />
                  <InfoCard 
                    icon={<IconBriefcase size={24} />}
                    label="Available for hire" 
                    value="Yes I am!" 
                    color="green"
                  />
                  <InfoCard 
                    icon={<IconSchool size={24} />}
                    label="Education" 
                    value="BSc Computer Science" 
                    color="purple"
                  />
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
          
          {/* Enhanced Professional Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="space-y-8">
              {/* About Me Card */}
              <CardSpotlight className="h-auto w-full backdrop-blur-sm bg-gray-900/40 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                <div className="relative z-20 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <IconHandStop size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Hello there!</h3>
                      <p className="text-gray-400">Let me tell you about myself</p>
                    </div>
                  </div>
                  
                  <div className="text-gray-200 space-y-4 text-lg leading-relaxed">
                    <p>
                      I'm a passionate software engineer with a deep love for creating innovative web applications 
                      and immersive AR/VR experiences. With expertise in full-stack development, I specialize in 
                      building modern, scalable solutions using cutting-edge technologies.
                    </p>
                    <p>
                      My journey in software development has been driven by curiosity and a desire to solve 
                      complex problems. I believe in writing clean, maintainable code and creating user experiences 
                      that not only function flawlessly but also delight users.
                    </p>
                  </div>
                </div>
              </CardSpotlight>

              {/* Education Card */}
              <CardSpotlight className="h-auto w-full backdrop-blur-sm bg-gray-900/40 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                <div className="relative z-20 p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <IconCertificate size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Education</h3>
                      <p className="text-gray-400">My academic background</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Bachelor of Computer Science with Honours</h4>
                        <p className="text-blue-400 font-medium">Software Engineering</p>
                      </div>
                      <div className="text-right">
                        <div className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <span className="text-blue-400 text-sm font-medium">2021-2025</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <IconBuilding size={20} />
                      <span>University Malaysia Sabah</span>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value, color }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  color: 'blue' | 'green' | 'purple' 
}) => {
  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-r ${colorClasses[color]} backdrop-blur-sm border rounded-lg p-4 transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className="text-white">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-white font-medium">{value}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
      aria-label={label}
    >
      <span className="absolute -bottom-10 scale-0 group-hover:scale-100 transition-transform bg-gray-900 text-xs text-white py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap border border-gray-700">
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </span>
      {icon}
    </motion.a>
  );
};

const GitHubIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="22" 
    height="22" 
    viewBox="0 0 24 24"
    fill="white"
    className="group-hover:scale-110 transition-transform duration-300"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="22" 
    height="22" 
    viewBox="0 0 24 24"
    fill="white"
    className="group-hover:scale-110 transition-transform duration-300"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default AboutSection; 