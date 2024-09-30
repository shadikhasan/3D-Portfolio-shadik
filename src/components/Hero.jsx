import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import MouseTracingCanvas from './canvas/MouseTracingCanvas';
import SocialMediaIcons from "./SocialMediaIcons";

const Hero = () => {
  // State to determine if the screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Function to update the state based on window width
  const handleResize = () => {
    setIsMobile(window.innerWidth < 640); // Adjust the threshold as needed
  };

  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>SHADIK</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Robust web applications <br className='sm:block hidden' />
            with Django and React
          </p>
          <div className="flex justify-start z-10"> {/* Added z-10 for higher stacking */}
            <SocialMediaIcons />
          </div>
        </div>
      </div>

      {/* Conditionally render ComputersCanvas only on larger screens */}
      {!isMobile && <ComputersCanvas />}
      <MouseTracingCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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
