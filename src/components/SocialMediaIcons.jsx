import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/shadikhasan",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shadik-hasan/",
    icon: faLinkedin,
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-6 mt-8 z-20">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#915EFF] transition-colors duration-300 transform hover:scale-125" // Updated hover color and added scale effect
          aria-label={social.name}
        >
          <FontAwesomeIcon
            icon={social.icon}
            className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300" // Updated size for a better visual effect
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
