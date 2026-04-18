"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "✦",
      title: "Premium Finish",
      description: "Each piece undergoes a rigorous quality check to ensure a flawless, high-mirror finish."
    },
    {
      icon: "◈",
      title: "Handcrafted Quality",
      description: "Master jewelers spend dozens of hours on each item, ensuring unmatched detail and durability."
    },
    {
      icon: "✧",
      title: "Affordable Luxury",
      description: "We cut out the middleman to bring you boutique quality at prices that respect your investment."
    },
    {
      icon: "❖",
      title: "Custom Orders",
      description: "Work directly with our designers to create a one-of-a-kind piece that tells your unique story."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="why-us" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="font-dm text-xs uppercase tracking-[0.3em] text-burgundy mb-3 block">
            The Velmora Difference
          </span>
          <h2 className="font-cormorant text-4xl md:text-4xl text-near-black">
            Why Velmora
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="text-center p-8 border border-burgundy/20 rounded-sm hover:border-burgundy/40 transition-colors duration-500 bg-white"
            >
              <div className="text-3xl text-burgundy mb-6">{feature.icon}</div>
              <h3 className="font-cormorant text-xl font-medium text-near-black mb-4">
                {feature.title}
              </h3>
              <p className="font-dm text-sm text-warm-gray leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
