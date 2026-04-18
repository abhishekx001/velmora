"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { products } from "@/data/products";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["All", "Necklaces", "Earrings", "Rings", "Bracelets"];

  const filteredProducts = products.filter(
    (p) => filter === "All" || p.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section id="collection" className="py-24 px-6 bg-warm-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-dm text-xs uppercase tracking-[0.3em] text-burgundy mb-3 block"
          >
            Curated for you
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cormorant text-4xl md:text-4xl text-near-black"
          >
            Our Collection
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-dm text-xs uppercase tracking-widest transition-all relative pb-2 ${
                filter === cat ? "text-burgundy" : "text-warm-gray hover:text-near-black"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-burgundy"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <CollectionCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Collection;
