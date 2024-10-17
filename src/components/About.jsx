import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software engineer with extensive experience
        in TypeScript and JavaScript, specializing in backend development
        with Django. I have a strong proficiency in building REST APIs
        that facilitate seamless communication between the frontend and
        backend. Additionally, I am skilled in using React for dynamic
        user interfaces and Docker for containerization and deployment.
        As a quick learner, I thrive in collaborative environments, working 
        closely with clients to deliver efficient, scalable, and user-friendly
        solutions that effectively address real-world challenges.
      </motion.p>

      <a
        href="#about-me"
        className="relative mt-3 inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-2xl backdrop-blur-lg bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px]"
        aria-label="See About Me section"
      >
        See About Me
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 hover:opacity-25 transition-opacity duration-300 ease-in-out"></span>
      </a>

    
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
