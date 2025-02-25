"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'

const Contact = () => {

  // text animation
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

    // name input animation
    const nameRef = useRef(null);
    const isNameInView = useInView(nameRef, {once: true});
    const nameVariants = {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    };

    // email input animation
    const emailRef = useRef(null);
    const isEmailInView = useInView(emailRef, {once: true});
    const emailVariants = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    };

    // textarea input animation
    const textareaRef = useRef(null);
    const isTextareaInView = useInView(textareaRef, {once: true});
    const textareaVariants = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    };

    // button animation
    const buttonRef = useRef(null);
    const isButtonInView = useInView(buttonRef, {once: true});
    const buttonVariants = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    };

  return (
    <section className='pt-[10rem]' id='contact'>
      <motion.div ref={ref}
                  variants={sectionVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{duration: 0.3, delay: 0.5}}
                  >
        <p className='font-bold text-lg text-center'>Connect with me</p>
        <h1 className='text-6xl text-center mb-10'>Get in touch</h1>
        <div className='flex flex-col items-center'>
          <p className='text-lg mb-3 font-semibold max-w-xl text-center'>
            I'd love to hear from you! If you have any questions, comments or feedbacks, please use the form
            below.
          </p>
        </div>
      </motion.div>

        {/* form & button */}
        <form className='flex flex-col items-center justify-center gap-y-7'>
          {/* form */}
          <div className='flex flex-col items-center justify-center gap-y-5'>
            <div className='flex gap-x-5 h-14 flex-col gap-y-5 md:flex-row md:mb-0 mb-20'>
              <motion.div ref={nameRef} variants={nameVariants} initial="initial" animate={isNameInView ? "animate" : "initial"} transition={{duration: 0.3, delay: 0.7}}>
                <input type="text" className='w-[430px] md:w-[330px] rounded-lg border-2 border-gray-400 p-4' placeholder='Enter your name' required />
              </motion.div>
              <motion.div ref={emailRef} variants={emailVariants} initial="initial" animate={isEmailInView ? "animate" : "initial"} transition={{duration: 0.3, delay: 0.9}}>
                <input type="email" name="email" className='w-[430px] md:w-[330px] rounded-lg border-2 border-gray-400 p-4' placeholder='Enter your email' required />
              </motion.div>
            </div>
            <motion.div ref={textareaRef} variants={textareaVariants} initial="initial" animate={isTextareaInView ? "animate" : "initial"} transition={{duration: 0.3, delay: 1.1}}>
              <textarea name="message" placeholder='Enter your message' className='w-[430px] md:w-[680px] h-[230px] p-4 rounded-lg border-2 border-gray-400' required />
            </motion.div>
          </div>

          {/* button */}
          <motion.div ref={buttonRef} variants={buttonVariants} initial="initial" animate={isButtonInView ? "animate" : "initial"} transition={{duration: 0.3, delay: 1.3}}>
            <Button variant type="submit"className="bg-black dark:border-2 dark:border-white text-white p-7 text-xl rounded-full">
              Submit now
              <Image src="/assets/right-arrow-bold.png" width={25} height={25} alt='black right arrow bold icon pointing to the right' className="dark:hidden" />
              <Image src="/assets/right-arrow-bold-dark.png" width={25} height={25} alt='white right arrow bold icon pointing to the right' className='hidden dark:block' />
            </Button>
          </motion.div>
        </form>
    </section>
  )
}

export default Contact