import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-transparent text-white overflow-hidden">
      {/* Title Section with Animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I Use
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills & Expertise
        </h2>
      </motion.div>

      {/* Technologies Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-center mt-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="group w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center bg-white bg-opacity-5 rounded-full shadow-2xl transform transition-all duration-700 hover:scale-125 hover:bg-opacity-20 hover:shadow-purple-500/50 hover:shadow-lg relative"
          >
            <BallCanvas icon={technology.icon} />

            {/* Name Tooltip (hidden by default, shown on hover) */}
            <div className="absolute bottom-[-30px] w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm rounded-md px-2 py-1">
                {technology.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Smaller Floating Background Elements */}
      <div className="absolute top-10 left-1/4 w-36 h-36 bg-indigo-400 rounded-full blur-[80px] opacity-20 animate-pulse-slow" />
      <div className="absolute top-20 right-1/4 w-28 h-28 bg-pink-400 rounded-full blur-[70px] opacity-20 animate-pulse-fast" />
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-cyan-400 rounded-full blur-[60px] opacity-20 animate-bounce-slow" />
    </section>
  );
};

export default SectionWrapper(Tech, "");
