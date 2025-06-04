"use client";
import React from "react";
import { motion } from "motion/react";

export default function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 255, 255)", // White
    "rgb(220, 230, 255)", // Light blue-white
    "rgb(173, 216, 230)", // Light blue
    "rgb(135, 206, 235)", // Sky blue
    "rgb(100, 149, 237)", // Cornflower blue
    "rgb(65, 105, 225)",  // Royal blue
    "rgb(30, 144, 255)",  // Dodger blue
    "rgb(0, 191, 255)",   // Deep sky blue
    "rgb(70, 130, 180)",  // Steel blue
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre tracking-tighter"
    >
      {char}
    </motion.span>
  ));
} 