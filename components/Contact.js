"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      label: "WhatsApp",
      value: "+91 7907445995",
      link: "https://wa.me/917907445995",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.004 1.399 4.946 1.4 5.422 0 9.832-4.412 9.833-9.835 0-2.628-1.02-5.101-2.871-6.953-1.852-1.852-4.322-2.871-6.955-2.871-5.424 0-9.835 4.411-9.838 9.836 0 2.113.567 4.15 1.639 5.855l-1.074 3.924 4.316-1.126z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      value: "_velm.ora",
      link: "https://instagram.com/_velm.ora",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.376.896.419.419.679.818.896 1.376.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.376-.419.419-.818.679-1.376.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.376-.896-.419-.419-.679-.818-.896-1.376-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.376.419-.419.818-.679 1.376-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.558-.79.308-1.459.721-2.126 1.388-.667.667-1.08 1.336-1.388 2.126-.298.764-.501 1.637-.558 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.947c.057 1.277.26 2.15.558 2.914.308.79.721 1.459 1.388 2.126.667.667 1.336 1.08 2.126 1.388.764.298 1.637.501 2.914.558 1.28.058 1.688.072 4.947.072s3.668-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.558.79-.308 1.459-.721 2.126 1.388.667.667 1.08-1.336 1.388-2.126.298-.764.501-1.637.558-2.914.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.057-1.277-.26-2.15-.558-2.914-.308-.79-.721-1.459-1.388-2.126-.667-.667-1.336-1.08-2.126-1.388-.764-.298-1.637-.501-2.914-.558-1.28-.058-1.688-.072-4.947-.072z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      label: "Email",
      value: "abhijithms693@gmail.com",
      link: "mailto:abhijithms693@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 bg-burgundy-ultra-light">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-burgundy-ultra-light p-12 md:p-20"
        >
          <span className="font-dm text-xs uppercase tracking-[0.3em] text-burgundy/60 mb-4 block">
            Connect
          </span>
          <h2 className="font-cormorant text-4xl md:text-4xl text-near-black mb-6">
            Get In Touch
          </h2>
          <p className="font-dm text-sm text-warm-gray mb-12 max-w-sm mx-auto font-light leading-relaxed">
            Interested in a piece or a custom consultation? Reach out to us through any of these channels.
          </p>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-burgundy text-white hover:bg-burgundy-light transition-all duration-500 rounded-full font-dm text-[10px] uppercase tracking-widest group shadow-lg hover:shadow-burgundy/20"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </span>
                {contact.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
