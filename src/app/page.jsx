"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// components
import { Button } from '@/components/ui/button'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Work from '@/sections/Work'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

const page = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col justify-center items-center gap-y-5 mt-[7rem] lg:mr-9'>
        {/* image */}
        <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 0.5}}>
          <Image src="/assets/profile-img.png" width={200} height={200} alt='william mark profile image' />
        </motion.div>

        {/* text */}
        <div className='flex flex-col items-center gap-y-2'>
          <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 0.7}} className='flex items-center gap-x-2'>
            <h2 initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 0.9}} className='font-bold text-xl'>Hi! I'm William Mark </h2>
            <Image src="/assets/hand-icon.png" width={30} height={30} alt='Hand icon' />
          </motion.div>
          <motion.h1 initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 1.1}} className='font-bold text-4xl md:text-6xl lg:text-7xl'>frontend web developer</motion.h1>
          <motion.h1 initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 1.1}} className='font-bold mb-3 text-4xl md:text-6xl lg:text-7xl'>based in london.</motion.h1>
          <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 1.3}} className='flex flex-col items-center'>
            <p className='text-lg mb-1 text-center max-w-xl'>
              I am a frontend developer from California, USA with 10 years of experience in multiple
              companies like Microsoft, Tesla and Apple.
            </p>
          </motion.div>

          {/* buttons */}
          <div className='flex md:gap-x-5 flex-col gap-y-4 md:flex-row'>
            <motion.a initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 1.5}} href="#contact">
              <Button variant className="bg-black dark:border-2 dark:border-white text-white p-7 text-xl rounded-full">
                contact me
                <Image src="/assets/right-arrow-bold.png" width={25} height={25} alt='black right arrow bold icon pointing to the right' className="dark:hidden" />
                <Image src="/assets/right-arrow-bold-dark.png" width={25} height={25} alt='white right arrow bold icon pointing to the right' className='hidden dark:block' />
              </Button>
            </motion.a>
            <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 1.7}}>
              <Button variant className="border-2 border-black dark:border-none dark:bg-white text-black p-7 rounded-full text-xl">
                my resume
                <Image src="/assets/download-icon.png" width={20} height={20} alt='download icon' className='font-bold' />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About me */}
      <About />

      {/* Services */}
      <Services />

      {/* My Work */}
      <Work />

      {/* Conact me */}
      <Contact />

      {/* footer */}
      <Footer />
    </section>
  )
}

export default page
