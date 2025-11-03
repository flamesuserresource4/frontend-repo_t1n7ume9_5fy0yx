import React from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
  return (
    <section className="relative bg-white dark:bg-[#111214]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(154,41,35,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="font-['Oswald',ui-sans-serif] text-2xl md:text-3xl text-[#0f0f11] dark:text-white tracking-wide"
        >
          Professional Summary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-base md:text-lg leading-relaxed text-[#1d1f24] dark:text-white/85 font-['Lato',ui-sans-serif]"
        >
          Results-driven and adaptable professional with leadership experience in student organizations, project management, and process optimization. Skilled in communication, teamwork, and data-driven problem solving, with a solid foundation in business analysis and strategic planning. Guided by the principle “Quam plurimi et quam aptissimi”, I aim to contribute meaningfully, grow continuously, and deliver sustainable impact in every role. Currently pursuing a B.Sc. in Data Science to strengthen strategic and analytical capabilities and technological proficiency.
        </motion.p>
      </div>
    </section>
  );
};

export default Summary;
