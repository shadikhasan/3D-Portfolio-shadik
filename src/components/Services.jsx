import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import djangoImage from "../assets/tech/django.png"; // Update this path
import backendImage from "../assets/tech/django.png";
import frontendImage from "../assets/tech/reactjs.png";
import databaseImage from "../assets/tech/postgresql.png";
import deploymentImage from "../assets/tech/docker.png";
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
];

const Services = () => {
  return (
    <section id="services" className="p-10 bg-gray-800 text-white">
      {/* Title Section with Animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>I offer a variety of services to meet your needs</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Services.</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <Tilt
            options={{ max: 25, scale: 1, speed: 400 }}
            className="bg-gray-700 p-5 rounded-lg shadow-lg"
            key={service.name}
          >
            <div className="flex flex-col items-center">
              <img
                src={service.image}
                alt={service.name}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Services;
