import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence  } from "framer-motion";

import { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const marqueeVariants = {
  hidden: { opacity: 0, y: -20 }, // Initial hidden state
  visible: { opacity: 1, y: 0 }, // Visible state
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }, // Exit animation
};


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  // Check if it's the "See More Projects" card
  const isSeeMoreCard = name === "See More Projects";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[360px]" // Ensuring consistent width
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${
          isSeeMoreCard
            ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
            : "bg-tertiary shadow-md"
        } p-5 rounded-2xl w-full h-[500px] transition-transform transform hover:scale-105`} // Standard height for all cards
      >
        <div className="relative w-full h-[230px]">
          {/* Show the image for normal cards */}
          <img
            src={image}
            alt={`${name} image`}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Conditionally render source code and live links for normal cards */}
          {!isSeeMoreCard && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* Source code button */}
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2 transition duration-300 ease-in-out transform hover:scale-110"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                    title="Source Code"
                  />
                </div>
              )}

              {/* Live link button */}
              {live_link && (
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="bg-gradient-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:bg-green-500"
                >
                  <span className="text-white text-sm text-center font-bold" title="Visit the live site">Live</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className={`font-bold text-[24px] ${isSeeMoreCard ? "text-white" : "text-white"}`}>
            {name}
          </h3>
          <p className={`mt-2 text-white text-secondary text-[14px] ${isSeeMoreCard ? "text-gray-300" : "text-secondary"}`}>
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* "See More Projects" button */}
        {isSeeMoreCard && (
          <div className="flex flex-col items-center justify-center mt-5 space-y-4">
            {/* GitHub Icon with Link */}
            <div className="flex justify-center">
              <a
                href="https://github.com/shadikhasan?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              >
                <img
                  src={github}
                  alt="GitHub Logo"
                  className="w-10 h-10 object-contain"
                  title="Visit GitHub"
                />
              </a>
            </div>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};



const Projects = () => {
  const [showMarquee, setShowMarquee] = useState(true); // State to show/hide marquee
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* AnimatePresence for smooth removal */}
      <AnimatePresence>
          {showMarquee && (
            <motion.div
              className="relative mt-5 p-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg border-2 border-indigo-300 flex items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={marqueeVariants}
            >
              <marquee
                className="text-white font-semibold"
                behavior="scroll"
                direction="left"
                scrollamount="6"
              >
                ⚠️ Note: Live site is slower due to free hosting. Thank you for your patience!
              </marquee>
              {/* Close button */}
              <button
                onClick={() => setShowMarquee(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-indigo-500 font-bold py-1 px-3 rounded-full hover:bg-gray-100 transition-all"
              >
                X
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "project");
