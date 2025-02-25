"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// components
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'
import { Button } from './ui/button'
import MobileNav from './MobileNav';

const Header = () => {

const [header, setHeader] = useState(false);

useEffect(() => {
  const scrollYPos = window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  });
})

  return (
    <header className={`${header ? "py-4 backdrop-blur-lg shadow-lg" : "py-6"} sticky top-0 z-30 transition-all px-5`}>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <a href="#" className='font-bold text-2xl'>William<span className='font-bold text-red-700'>.</span></a>
          </div>

          {/* links */}
          <div className={`${header ? "pl-10" : "border-2 border-white shadow-lg dark:border-white/70 rounded-full py-3 px-10 ml-10"} transition-all hidden lg:flex`}>
            <Nav />
          </div>

          {/* button & toggler */}
            <div className='flex gap-x-4 items-center'>
              <ThemeToggler />
              <a href="#contact" className='hidden lg:block'>
                <Button variant className="bg-transparent dark:text-white dark:border-white/70 border-2 border-black p-5 text-xl text-black rounded-full">
                  Contact
                  <Image src="/assets/arrow-icon.png" width={10} height={10} alt='black arrow icon pointing to the top right' className="dark:hidden" />
                  <Image src="/assets/arrow-icon-dark.png" width={10} height={10} alt='white arrow icon pointing to the top right' className='hidden dark:block' />
                </Button>
              </a>
              {/* mobile nav */}
              <div className='lg:hidden'>
                <MobileNav />
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header