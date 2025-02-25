"use client";

import React, {useRef} from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion';

const Footer = () => {

// name animation
const nameRef = useRef(null);
const isNameInView = useInView(nameRef, {once: true});
const nameVariant = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 }
}

// email animation
const emailRef = useRef(null);
const isEmailInView = useInView(emailRef, {once: true});
const emailVariant = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 }
}

  return (
    <footer>
       <div className='mt-[9rem] flex flex-col items-center justify-self-center gap-y-5 mb-7'>
            <motion.h1  ref={nameRef}
                        variants={nameVariant}
                        initial="initial"
                        animate={isNameInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: 0.5}}
                        className='font-bold text-4xl'>
              William<span className='font-bold text-red-700 rounded-full text-5xl'>.</span>
            </motion.h1>
            <motion.div ref={emailRef}
                        variants={emailVariant}
                        initial="initial"
                        animate={isEmailInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: 0.7}}
                        className='flex gap-x-2'>
                <Image src="/assets/mail_icon.png" width={30} height={30} alt='mail icon' className='dark:hidden' />
                <Image src="/assets/mail_icon_dark.png" width={30} height={30} alt='dark mail icon' className='hidden dark:block' />
                <p className='font-bold'>KMV@gmail.com</p>
            </motion.div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between border-t-2 border-gray-600 mb-4 px-5'>
                <div className='mt-7'>
                    <p className='font-bold'>&copy; 2025 williamMark.All rights reserved.</p>
                </div>
                <div className='flex items-center gap-x-5 mt-2'>
                    <p className='font-bold'>GitHub</p>
                    <p className='font-bold'>Linked</p>
                    <p className='font-bold'>Twitter</p>
                </div>
            </div>
    </footer>
  )
}

export default Footer