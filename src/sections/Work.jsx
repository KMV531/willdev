"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

const projectData = [
    {
        image: "/assets/public/work-1.png",
        title: "Frontend Project",
        description: "Web design",
        icon: "/assets/send-icon.png"
    },
    {
        image: "/assets/public/work-2.png",
        title: "Geo based app",
        description: "Mobile App",
        icon: "/assets/send-icon.png"
    },
    {
        image: "/assets/public/work-3.png",
        title: "Photography site",
        description: "Web design",
        icon: "/assets/send-icon.png"
    },
    {
        image: "/assets/public/work-4.png",
        title: "UI/UX designing",
        description: "UI/UX Design",
        icon: "/assets/send-icon.png"
    },
];

const Work = () => {

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
    <section className='pt-[10rem]' id='work'>
        <motion.div variants={sectionVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"} 
                    transition={{duration: 0.3, delay: 0.3}} 
                    ref={ref} 
        >
            <p className='font-bold text-lg text-center'>My Portfolio</p>
            <h1 className='text-6xl text-center mb-10'>My Latest Work</h1>
            <div className='flex flex-col items-center'>
                <p className='text-lg mb-3 font-semibold max-w-xl text-center'>
                    Welcome to my web development portfolio! Explore a collection of projects showcasing my
                    expertise in front-end development.
                </p>
            </div>
        </motion.div>

      <div className='flex flex-col gap-y-14 items-center justify-center'>
        {/* projects */}
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 gap-x-5'>
            {projectData.map((project, index) => {
                return (
                    <motion.div variants={cardVariants}
                                initial= "initial"
                                animate={inView ? "animate" : "initial"}
                                transition={{duration: 0.3, delay: index * 0.8}}
                                ref={cardRef}
                                key={project.title}
                    >
                        <div className='relative'>
                            <div>
                                <Image src={project.image} width={350} height={350} alt={project.title} />
                            </div>
                            <div className='flex flex-row items-center gap-x-7 absolute bottom-7 left-5 bg-white p-4 px-7 rounded-lg'>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold mb-1 dark:text-black text-sm'>{project.title}</h1>
                                    <p className=' dark:text-black text-sm'>{project.description}</p>
                                </div>
                                <div className='border-2 border-black rounded-full p-2 shadow-md shadow-black'>
                                    <Image src={project.icon} width={30} height={30} alt='send arrow icon' />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>

        {/* button */}
        <div>
            <Button variant className="border-2 border-black dark:border-none dark:bg-black dark:text-white text-black p-7 rounded-full text-xl">
                Show more
                <Image src="/assets/right-arrow-bold.png" width={25} height={25} alt='black right arrow bold icon pointing to the right' className="dark:hidden" />
                <Image src="/assets/right-arrow-bold-dark.png" width={25} height={25} alt='white right arrow bold icon pointing to the right' className='hidden dark:block' />
            </Button>
        </div>
      </div>
    </section>
  )
}

export default Work