import React from "react";
import { SectionWrapper } from "../hoc";

const AboutMe = () => {
  const profileImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin0utrL7ZfBJDsizVPXbkOxmk8Ih4VnqRgmZKIGPze-xtn6Q7bjK0GmliNyt7flzyWmuB6JtwAQA95cGPUDQwlwCNJUusRjVDA0Xn42kvLCVywf4uoC3VSBdODv2d90h1Kd7rElgrNkzw4/";
  const cv = "https://drive.google.com/file/d/1DF3e_CNLjDPX5IRq2_5WBLc5hC_no7U9/"; // Replace with the actual path to your CV

  return (
    <div className="p-6 bg-gradient-to-bl from-slate-900 to-cyan-700 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-white text-start ml-10 mb-4">ABOUT ME</h2>
      <div className="mt-10 flex flex-col md:flex-row items-center md:justify-between"> 
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8 flex flex-col justify-center">
          <div className="p-6 md:pl-10">
            <p className="text-white mb-4 leading-relaxed text-center md:text-left whitespace-normal">
              I’m <strong>Ekramul Islam Shadik</strong>, from Rajshahi, Bangladesh. I am currently studying BSc Engineering in Information and Communication Engineering at the University of Rajshahi. As a Web and App Developer, I love collaborating with people. Let's build something amazing together!
            </p>
            <div className="mt-4 mb-4">
              <p className="text-gray-300"><strong>Call:</strong> +8801786120267</p>
              <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:shadik.sk420@gmail.com" className="hover:underline">shadik.sk420@gmail.com</a></p>
              <p className="text-gray-300">
                <strong>Website:</strong>{" "}
                <a 
                  href="https://www.techtrickbangla.com"
                  target="_blank" 
                  className="text-[#915EFF] hover:underline">
                  https://www.techtrickbangla.com
                </a>
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <a
                href={cv}
                target="_blank"
                className="font-bold bg-gradient-to-r from-[#915EFF] to-[#7a52d5] text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                download
              >
                Download CV
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/shadik.mahmud.01/"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-6 flex items-center justify-center"> 
          <img
            src={profileImage}
            alt="Ekramul Islam Shadik"
            className="rounded-lg shadow-lg w-3/4 mx-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about-me");