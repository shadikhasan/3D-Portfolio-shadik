import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import djangoImage from "../assets/tech/django.png"; // Update this path
import frontendImage from "../assets/tech/reactjs.png";
import databaseImage from "../assets/tech/postgresql.png";
import deploymentImage from "../assets/tech/docker.png";
import constructionImage from "../assets/service/construction.png";
import test from "../assets/service/test.avif";
import ecommerceImage from "../assets/service/ecommerce.png";
import portfolioImage from "../assets/service/portfolio.png";
import { fadeIn, textVariant } from "../utils/motion";

const servicesData = [
  {
    name: "Django Development",
    description: "Expert in building robust and scalable web applications using Django.",
    image: djangoImage,
  },
  {
    name: "React Development",
    description: "Creating responsive and dynamic user interfaces with React.",
    image: frontendImage,
  },
  {
    name: "Database Management",
    description: "Proficient in designing and managing relational databases.",
    image: databaseImage,
  },
  {
    name: "Deployment & DevOps",
    description: "Experience in deploying applications and managing cloud infrastructure.",
    image: deploymentImage,
  },
  {
    name: "Android Application Development",
    description: "Building any type of application to meet your needs.",
    image: frontendImage, // Replace with your Android image if available
  },
  {
    name: "WordPress Design",
    description: "Creating beautiful and functional WordPress websites.",
    image: frontendImage, // Replace with your WordPress image if available
  },
  {
    name: "Portfolio Website",
    description: "Designing personalized portfolio websites to showcase your work.",
    image: portfolioImage,
  },
  {
    name: "E-Commerce Website",
    description: "Developing online stores with seamless shopping experiences.",
    image: ecommerceImage, // Replace with your E-Commerce image if available
  },
  {
    name: "Construction Website",
    description: "Creating professional websites for construction companies.",
    image: test,
  },
];

const ServiceCard = ({ index, title, description, icon }) => (
  <Tilt className='xs:w-[300px] sm:w-[350px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-transform transform hover:scale-105'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[300px] flex justify-evenly items-center flex-col text-center'>
        <img
          src={icon}
          alt={title}
          className='w-84 h-64 object-contain mb-4' // Adjusted icon size for uniformity
        />
        <h3 className='text-white text-[20px] font-bold'>{title}</h3>
        <p className='text-center text-sm text-white-100'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <section id="services" className="p-10 bg-gray-800 text-white">
      {/* Title Section with Animation */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>I offer a variety of services to meet your needs</p>
        <h2 className={`${styles.sectionHeadText}`}>My Services.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.name}
            index={index}
            title={service.name}
            description={service.description} // Pass description to ServiceCard
            icon={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
