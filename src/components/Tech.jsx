import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

// Import your icons
import python from '../assets/tech/python.png';
import django from '../assets/tech/django.png';
import javascript from '../assets/tech/javascript.png';
import typescript from '../assets/tech/typescript.png';
import reactjs from '../assets/tech/reactjs.png';
import redux from '../assets/tech/redux.png';
import tailwind from '../assets/tech/tailwind.png';
import postgresql from '../assets/tech/postgresql.png';
import mysql from '../assets/tech/mysql.png';
import mongodb from '../assets/tech/mongodb.png';
import git from '../assets/tech/git.png';
import figma from '../assets/tech/figma.png';
import docker from '../assets/tech/docker.png';

// Define frontend and backend technologies
const frontendTechnologies = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Figma", icon: figma },
];

const backendTechnologies = [
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MySQL", icon: mysql },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

const Tech = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-transparent text-white overflow-hidden">
      {/* Title Section with Animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Technologies I Use</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills & Expertise.</h2>
      </motion.div>

      {/* Frontend Technologies Grid */}
      <div className="relative z-10 mt-20">
        <h3 className="text-center text-2xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-400 to-blue-400 inline-block py-1 px-2 rounded-md shadow-lg">
          Frontend Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center items-center">
          {frontendTechnologies.map((technology) => (
            <div
              key={technology.name}
              className="group w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center bg-white bg-opacity-5 rounded-full shadow-2xl transform transition-all duration-700 hover:scale-125 hover:bg-opacity-20 hover:shadow-purple-500/50 hover:shadow-lg relative"
            >
              <BallCanvas icon={technology.icon} />
              {/* Always Visible Name Tooltip */}
              <div className="absolute bottom-[-30px] w-full text-center transition-opacity duration-300">
                <span className="text-white text-sm rounded-md px-2 py-1">
                  {technology.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>


    {/* Backend Technologies Grid */}
    <div className="relative z-10 mt-20">
      <h3 className="text-center text-2xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-400 to-blue-400 inline-block py-1 px-2 rounded-md shadow-lg">
        Backend Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center items-center">
        {backendTechnologies.map((technology) => (
          <div
            key={technology.name}
            className="group w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center bg-white bg-opacity-5 rounded-full shadow-2xl transform transition-all duration-700 hover:scale-125 hover:bg-opacity-20 hover:shadow-purple-500/50 hover:shadow-lg relative"
          >
            <BallCanvas icon={technology.icon} />
            {/* Always Visible Name Tooltip */}
            <div className="absolute bottom-[-30px] w-full text-center transition-opacity duration-300">
              <span className="text-white text-sm rounded-md px-2 py-1">
                {technology.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>


      {/* Smaller Floating Background Elements */}
      <div className="absolute top-10 left-1/4 w-36 h-36 bg-indigo-400 rounded-full blur-[80px] opacity-20 animate-pulse-slow" />
      <div className="absolute top-20 right-1/4 w-28 h-28 bg-pink-400 rounded-full blur-[70px] opacity-20 animate-pulse-fast" />
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-cyan-400 rounded-full blur-[60px] opacity-20 animate-bounce-slow" />
    </section>
  );
};

export default SectionWrapper(Tech, "");
