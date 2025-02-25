"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { delay, motion, useInView } from 'framer-motion';

const aboutData = [
    {
        icon1: "/assets/code-icon.png",
        icon2: "/assets/code-icon-dark.png",
        title: "Languages",
        desccription1: "HTML, CSS, JavaScript",
        desccription2: "React Js, Next Js",
    },
    {
        icon1: "/assets/edu-icon.png",
        icon2: "/assets/edu-icon-dark.png",
        title: "Education",
        desccription1: "B.Tech Company",
        desccription2: "Science",
    },
    {
        icon1: "/assets/project-icon.png",
        icon2: "/assets/project-icon-dark.png",
        title: "Projects",
        desccription1: "Built more than 5 projects",
    },
];

const aboutToolBox = [
    {
        icon: "/assets/vscode.png",
        name: "a code editor called vscode"
    },
    {
        icon: "/assets/firebase.png",
        name: "a database storage called firebase"
    },
    {
        icon: "/assets/mongodb.png",
        name: "a database storage called mongodb"
    },
    {
        icon: "/assets/figma.png",
        name: "a design tool called figma"
    },
    {
        icon: "/assets/git.png",
        name: "a version control and collaboration tool called git"
    },
];

const About = () => {

  // text animation
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

  // image animation
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, {once: true});
  const imageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  };

    // about info animation
    const aboutTextRef = useRef(null);
    const isaboutTextInView = useInView(aboutTextRef, {once: true});
    const aboutTextVariants = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    };

    // about cards animation
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true });
    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    // tool title animation
    const toolTitleRef = useRef(null);
    const isToolTitleInView = useInView(toolTitleRef, { once: true });
    const toolTitleVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    // tool title animation
    const toolBoxRef = useRef(null);
    const isToolBoxInView = useInView(toolBoxRef, { once: true });
    const toolBoxVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

  return (
    <section className='pt-[10rem]' id='about'>
        <motion.div variants={sectionVariants} 
                   initial="initial" 
                   animate={isInView ? "animate" : "initial"} 
                   transition={{duration: 0.3, delay: 0.3}} 
                   ref={ref} 
        >
        <p className='font-bold text-lg text-center'>Introduction</p>
        <h1 className='text-6xl text-center mb-20'>About me</h1>
      </motion.div>
      <div className='flex flex-col lg:flex-row justify-center gap-x-20 items-center px-5'>
        {/* about image */}
        <motion.div ref={imageRef} variants={imageVariants} initial="initial" animate={isImageInView ? "animate" : "initial"} transition={{duration: 0.3, delay: 0.5}}>
            <Image src="/assets/user-image.png" width={400} height={400} alt='William mark about image' />
        </motion.div>

        <div className='flex flex-col gap-y-4'>
            {/* about text */}
            <motion.div ref={aboutTextRef} variants={aboutTextVariants} initial="initial" animate={isaboutTextInView ? "animate" : "initial"} transition={{duration: 0.3, delay: 0.7}} className='font-semibold text-lg flex flex-col gap-y-2 px-5 lg:px-0 pt-5 max-w-xl'>
                <p>I am an experienced Frontend Developer with over aa decade of professional expertise in the
                   field. Throughout my career, i have had the priviledge of collaborating with prestigious
                   organizations, contributing to their success and growth.
                </p>
            </motion.div>

            {/* about info */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-x-4 px-10 lg:px-0' ref={cardRef}>
                {/* languages */}
                {aboutData.map((data, index) => {
                    return (
                        <motion.div variants={cardVariants}
                                    initial="initial"
                                    animate={isCardInView ? "animate" : "initial"}
                                    transition={{duration: 0.3, delay: index * 0.9}}
                                    className='about-info' 
                                    key={data.title}
                        >
                            <Image src={data.icon1} width={30} height={30} alt='a cap icon for eduction' className='dark:hidden' />
                            <Image src={data.icon2} width={30} height={30} alt='a cap icon for eduction' className='hidden dark:block' />
                            <h1 className='font-bold py-3'>{data.title}</h1>
                            <p>{data.desccription1}</p>
                            <p>{data.desccription2}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* about tools */}
            <div className='flex flex-col gap-y-5 px-10 lg:px-0'>
                <motion.h1 ref={toolTitleRef} 
                           variants={toolTitleVariants} 
                           initial="initial" 
                           animate={isToolTitleInView ? "animate" : "initial"} 
                           transition={{duration: 0.3, delay: 1.1}}
                           className='font-bold'>Tools I use</motion.h1>
                <div className='flex flex-row gap-x-7'>
                    {aboutToolBox.map((toolBox, index) => {
                        return (
                            <motion.div ref={toolBoxRef} 
                                 variants={toolBoxVariants}
                                 initial="initial"
                                 animate={isToolBoxInView ? "animate" : "initial"}
                                 transition={{duration: 0.3, delay: index * 1}}
                                 className='about-tools' 
                                 key={toolBox.name}>
                                <Image src={toolBox.icon} width={40} height={40} alt={toolBox.name} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
