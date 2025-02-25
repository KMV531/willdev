"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
const serviceData = [
  {
    icon: "/assets/web-icon.png",
    title: "Web design",
    description1: "Web development is the process",
    description2: "of building programming...",
    more: "Read more",
    arrow: "/assets/right-arrow.png"
  },
  {
    icon: "/assets/mobile-icon.png",
    title: "Mobile app",
    description1: "Mobile app development involves",
    description2: "creating software for mobile devices...",
    more: "Read more",
    arrow: "/assets/right-arrow.png"
  },
  {
    icon: "/assets/ui-icon.png",
    title: "UI/UX design",
    description1: "UI/UX design focuses on creating",
    description2: "a seamless user experience...",
    more: "Read more",
    arrow: "/assets/right-arrow.png"
  },
  {
    icon: "/assets/graphics-icon.png",
    title: "Graphics design",
    description1: "Creative design solutions to",
    description2: "enhance visual communication...",
    more: "Read more",
    arrow: "/assets/right-arrow.png"
  },
];

const Services = () => {

  // text animation
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

    // card animation
    const cardRef = useRef(null);
    const inView = useInView(cardRef, { once: true });
    const cardVariants = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    };

  return (
    <section className='pt-[10rem]' id='services'>
      <motion.div variants={sectionVariants} 
                  initial="initial" 
                  animate={isInView ? "animate" : "initial"} 
                  transition={{duration: 0.3, delay: 0.3}} 
                  ref={ref} 
      >
        <p className='font-bold text-lg text-center'>What I offer</p>
        <h1 className='text-6xl text-center mb-10'>My Services</h1>
        <div className='flex flex-col items-center'>
          <p className='text-lg mb-1 font-semibold max-w-xl px-5 text-center'>
            I am a frontend developer from California, USA with 10 years of experience in multiple
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
      </motion.div>

      {/* services */}
      <div className='mt-7 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 gap-y-3 lg:gap-x-4 px-5' ref={cardRef}> 
        {serviceData.map((service, index) => {
          return (
            <motion.div variants={cardVariants}
                        initial= "initial"
                        animate={inView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.8}}  
                        className='services pl-7 flex flex-col h-[320px]' 
                        key={service.title}
            > 
              <Image src={service.icon} width={50} height={50} alt='a web icon' className='mt-4' />
              <h1 className='font-bold mt-5'>{service.title}</h1>
              <p className='mt-5'>{service.description1}</p>
              <p>{service.description2}</p>
              <div className='flex flex-row gap-x-2 mt-5'>
                <h2 className='font-bold'>{service.more}</h2>
                <Image src={service.arrow} width={20} height={20} alt='right arrow icon' />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  )
}

export default Services