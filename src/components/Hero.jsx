import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles"; // Ensure styles are correctly defined
import { ComputersCanvas } from "./canvas";
import MouseTracingCanvas from './canvas/MouseTracingCanvas';
import SocialMediaIcons from "./SocialMediaIcons";
import MultiTypingAnimation from './MultiTypingAnimation';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto bg-gradient-to-b from-gray-900 to-black overflow-hidden`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        
        {/* Dot and Line Indicator */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>SHADIK</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop robust web applications <br className='sm:block hidden' />
            with Django and React
          </p>

          {/* MultiTyping Animation */}
          <div className=""> {/* Add margin for spacing */}
            <MultiTypingAnimation />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start z-10"> {/* Added z-10 for higher stacking */}
            <SocialMediaIcons />
          </div>
        </div>
      </div>

      {/* Conditional Rendering for ComputersCanvas */}
      {!isMobile && <ComputersCanvas />}
      <MouseTracingCanvas />

      {/* Scroll Down Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' aria-label="Scroll down to the about section" className="flex justify-center items-center">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 transition-transform transform hover:scale-105'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
