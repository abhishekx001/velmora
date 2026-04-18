"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/VELMORA PROMISE 150 (1).jpeg"
          alt="Luxury Jewelry Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(109, 27, 31, 0.2), rgba(255, 255, 255, 0.95))" 
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-cormorant italic font-light text-5xl md:text-6xl text-near-black mb-2"
          variants={itemVariants}
        >
          Where Elegance Meets
        </motion.h1>
        <motion.h2 
          className="font-cormorant font-normal text-6xl md:text-7xl text-near-black mb-6"
          variants={itemVariants}
        >
          Timeless Beauty
        </motion.h2>
        <motion.p 
          className="font-dm font-light text-lg text-warm-gray mb-10 max-w-md mx-auto"
          variants={itemVariants}
        >
          Handcrafted jewelry for the modern woman.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#collection"
            className="inline-block border border-burgundy text-burgundy hover:bg-burgundy hover:text-white px-10 py-4 tracking-[0.2em] uppercase text-[10px] transition-all duration-300"
          >
            Explore Collection
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-burgundy/50 mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
