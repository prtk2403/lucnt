"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex items-center">
    <motion.nav 
      className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: 0, height: "5rem" }}
      animate={{
        y: isScrolled ? -8 : 0,
        height: isScrolled ? "4rem" : "5rem",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >

      <div className="flex mt-2 ml-5 mr-5 justify-between items-center px-6 h-full">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold font-sans">lucnt</h1>
          <Image src="/logo-1024.png" alt="logo" width={24} height={24} />
          <h1 className="text-2xl font-bold font-sans">space</h1>
        </motion.div>

        <motion.div 
          className="flex items-center gap-4 font-sans"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="hover:underline font-semibold">Home</Link>
          <Link href="#about" className="hover:underline font-semibold">Features</Link>
          <Link href="#contact" className="hover:underline font-semibold">Pricing</Link>
        </motion.div>

        <motion.div 
          className="flex justify-between items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >

         <Button className="bg-accent text-black p-5 hover:bg-accent/80 font-sans text-md font-semibold ">
          <Link href="/signup">Get Started</Link>
         </Button>
         <Button className="bg-[#1a1a1a] text-gray-50 p-5  hover:bg-[#1a1a1a]/80 font-sans text-md font-semibold ">
          <Link href="/login">Login</Link>
         </Button>
        </motion.div>
      </div>
    </motion.nav>
    </div>
  );
}
