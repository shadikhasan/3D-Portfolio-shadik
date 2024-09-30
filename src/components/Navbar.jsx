import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            SHADIK &nbsp;
            <span className='sm:block hidden'> | Full Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition duration-300 ease-in-out`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span
                className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-in-out ${
                  active === nav.title ? "scale-x-100" : ""
                } hover:scale-x-100`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black bg-opacity-80 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`relative font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white transition duration-300 ease-in-out`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  <span
                    className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-in-out ${
                      active === nav.title ? "scale-x-100" : ""
                    } hover:scale-x-100`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
