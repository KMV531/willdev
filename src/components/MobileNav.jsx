"use client";

import React, { useState } from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import Image from 'next/image';

const mobileLinks = [
    {
        title: "Home",
        href: "#"
    },
    {
        title: "About me",
        href: "#about"
    },
    {
        title: "Services",
        href: "#services"
    },
    {
        title: "My Work",
        href: "#work"
    },
    {
        title: "Contact me",
        href: "#contact"
    },
];

const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
  
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  
      setIsOpen(false); // Close the mobile nav
    };

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetHeader className="hidden">
            <SheetTitle>Mobile nav</SheetTitle>
        </SheetHeader>
        <SheetTrigger>
            <Image src="/assets/menu-black.png" width={30} height={30} alt='menu black icon' className='dark:hidden' />
            <Image src="/assets/menu-white.png" width={30} height={30} alt='menu white icon' className='hidden dark:block' />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-center items-center gap-y-20">
            {mobileLinks.map((mobileLink) => {
                return (
                    <a href={mobileLink.href} 
                       key={mobileLink.title} 
                       onClick={(e) => handleNavigation(e, mobileLink.href)} 
                       className='text-2xl' 
                    >
                        {mobileLink.title}
                    </a>
                );
            })} 
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav