/* eslint-disable */ 
import '../App.css'
import navLinks from "../constant"
import logo from '../assets/logo.png'
import { useEffect, useState } from "react"
import { HiMenuAlt1, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  const [selectedTab, setSelectedTab] = useState('Home');
  
  const handleTabClick = (tabName) => {
      setSelectedTab(tabName);
  };
  
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolling ? 'bg-opacity-95' : 'bg-transparent'}
                      flex justify-between sticky top-0 z-50 transition 
                      duration-300 ease-in-out backdrop-blur-md pb-4`
                    }>
      <img
        src={logo}
        className="w-[50px] h-[50px] rounded-[50px] mt-[20px] ml-[20px] "
      />
      <ul className="hidden lg:flex gap-[20px] absolute ml-[15rem] mt-[30px]">
        <li className="">
          {navLinks.map((items, index) => (
            <a 
              className={`text-[0.8rem] font-[400] pr-[40px] ${selectedTab === items ? 'text-primary font-[600] active': ''}`}
              href={`#${items}`} 
              key={index}
              onClick={() => handleTabClick(items)}
              >
                {items}
            </a> 
          ))
          }
        </li>
      </ul>
      <HiMenuAlt1 
        className="h-[50px] absolute right-[20px] top-[20px] w-[40px] text-primary lg:hidden flex" 
        onClick={() => setToggle(true)}
      />
      <div className="lg:hidden flex z-10">
        {toggle && (
          <motion.div
            transition= {{ duration: 1.85, ease: 'easeOut' }}
            animate={toggle ? "open" : "closed"}
            variants={variants}
            // className="bg-white  w-[80%] h-screen "
            className="bg-white w-[18rem] h-screen pl-[4rem] pt-[5rem]"
          >
            <HiX onClick={() => setToggle(false)} className="text-primary h-[50px] absolute right-0 top-0 mr-[30px] mt-[20px] w-[40px]"/>
            <ul className="flex flex-col gap-[50px] mt-[3rem]">
              {navLinks.map((item) => (
                <li key={item} className="">
                  <a 
                    href={`#${item}`} 
                    onClick={() => {
                      handleTabClick(item)
                      setToggle(false)
                    }} 
                    className={`cursor-pointer ${
                      selectedTab === item ? 'bg-primary text-white w-[5.5rem] h-[30px] rounded-md flex items-center justify-center' : ''
                    }`}
                    >
                      {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      
    </div>
  )
}

export default Nav