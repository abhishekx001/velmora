"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CollectionCard = ({ product }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="text-center md:text-left">
        <span className="font-dm text-[10px] uppercase tracking-widest text-warm-gray mb-1 block">
          {product.category}
        </span>
        <h3 className="font-cormorant text-lg text-near-black mb-1">
          {product.name}
        </h3>
        <p className="font-dm text-xs text-warm-gray mb-3">{product.price}</p>
        <button className="font-dm text-[10px] uppercase tracking-widest text-burgundy border-b border-burgundy pb-0.5 hover:text-burgundy-light hover:border-burgundy-light transition-colors">
          Enquire
        </button>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
