import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import djangoImage from "../assets/tech/django.png"; // Update this path
import frontendImage from "../assets/service/react.png";
import databaseImage from "../assets/tech/postgresql.png";
import deploymentImage from "../assets/tech/docker.png";
import constructionImage from "../assets/service/construction.png";
import test from "../assets/service/test.avif";
import ecommerceImage from "../assets/service/ecommerce.png";
import androidImage from "../assets/service/android.jpg";
import wordpressImage from "../assets/service/ecommerce.png";
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
    image: androidImage, // Replace with your Android image if available
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

const ServiceCard = ({ index, name, description, image }) => (
  <Tilt className='xs:w-[300px] sm:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 flex flex-col justify-between h-[350px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-48 object-cover' // Set height and use object-cover
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
        <p className='text-center text-sm text-white-100'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);



const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          I offer a variety of services to meet your needs
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Services.
        </h2>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {servicesData.map((service, index) => (
          <ServiceCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
