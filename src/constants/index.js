import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Django Developer",
    icon: reactjs,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Expert",
    icon: backend,
  },
  {
    title: "Docker Expert",
    icon: docker,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 2016 - Present",
    points: ["I have been working on upwork as a Full-stack Web Developer"],
  },
  {
    title: "Founder & CEO",
    company_name: "TechTrickBangla.Com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2018 - Present",
    points: [
      "Providing technology-related content in Bangla, covering computer, mobile, and internet tips and tricks.",
      "Sharing knowledge and tutorials in the mother tongue to help users learn easily.",
      "Keeping the audience updated with the latest information and trends in technology.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Computer Vision Lab, University of Rajshahi",
    icon: tesla, // Replace with your actual icon variable
    iconBg: "#E6DEDD", // Adjust background color if needed
    date: "Jan 2024 - Present",
    points: [
      "Actively contributing to cutting-edge research projects in computer vision.",
      "Collaborating with colleagues and professors on developing a comprehensive system for license plate detection, recognition, and categorization for vehicles in Bangladesh.",
      "Utilizing Python, Neural Networks, Deep Learning, and Machine Learning techniques.",
      "Engaging in discussions to optimize algorithms and enhance system performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Waste Management System",
    description:
      "A comprehensive web application designed to manage waste collection and disposal, ensuring efficient operations and promoting environmental sustainability.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
    ],
    image: tesla, // Replace with your actual image variable
    source_code_link:
      "https://github.com/shadikhasan/Library-Management-System", // Replace with actual link
  },
  {
    name: "Library Management System",
    description:
      "An intuitive web application for managing library operations, including book lending, returns, and cataloging, streamlining the user experience for both patrons and administrators.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
     
    ],
    image: tesla, // Replace with your actual image variable
    source_code_link: "https://github.com/shadikhasan/Waste-Management-System", // Replace with actual link
  },
];

export { services, technologies, experiences, testimonials, projects };
