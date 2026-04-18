"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-burgundy-ultra-light">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] md:aspect-square group"
          ref={ref}
        >
          {/* Decorative Frame - Subtle burgundy for contrast */}
          <div className="absolute inset-0 border border-burgundy/10 translate-x-6 translate-y-6 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
          
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image
              src="/images/BRACELET.jpeg"
              alt="Jewelry Crafting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="w-12 h-[1px] bg-burgundy mb-6" />
          <span className="font-dm text-xs uppercase tracking-[0.3em] text-burgundy/60 mb-4 block">
            Our Story
          </span>
          <h2 className="font-cormorant text-4xl md:text-4xl text-near-black mb-8">
            Crafted with Intention
          </h2>
          <div className="space-y-6 font-dm text-warm-gray leading-relaxed text-sm md:text-base">
            <p>
              At Velmora, we believe that jewelry is more than just an accessory—it is a vessel for stories, memories, and the celebration of life's most precious moments.
            </p>
            <p>
              Every piece is meticulously handcrafted with a commitment to quality and ethical sourcing. We blend traditional techniques with modern aesthetics to create pieces that feel timeless yet contemporary.
            </p>
            <p>
              Our mission is to make luxury accessible to the modern woman, offering high-end craftsmanship that empowers her elegance and beauty every day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
