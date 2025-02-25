import React from 'react'

const navLinks = [
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

const Nav = () => {
  return (
    <nav>
      <div className='flex items-center gap-x-7 text-lg'>
        {navLinks.map((navLink) => {
            return (
                <a href={navLink.href} key={navLink.title}>
                    {navLink.title}
                </a>
            );
        })}
      </div>
    </nav>
  )
}

export default Nav
