"use client";

import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {

const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button variant="none" className="bg-none" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <Image src="/assets/sun_icon.png" alt="Moon Icon" width={30} height={30} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <Image src="/assets/moon_icon.png" alt="Sun Icon" width={30} height={30} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    </div>
  )
}

export default ThemeToggler