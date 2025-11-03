import React from 'react';
import { Mail, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const items = [
    { label: 'WhatsApp', href: 'https://tr.ee/dictuzzwa', Icon: MessageCircle },
    { label: 'Email', href: 'mailto:cadrichardricardo@gmail.com', Icon: Mail },
    { label: 'Instagram', href: 'https://tr.ee/dictuzzig', Icon: Instagram },
    { label: 'Facebook', href: 'https://tr.ee/dictuzzfb', Icon: Facebook },
    { label: 'LinkedIn', href: 'https://tr.ee/dictuzzlinkedin', Icon: Linkedin },
  ];

  return (
    <section className="relative bg-white dark:bg-[#0b0c0e]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(154,41,35,0.08),transparent_45%)]" />
      <div className="relative max-w-5xl mx-auto px-6 py-14">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="font-['Oswald',ui-sans-serif] text-2xl md:text-3xl text-[#0f0f11] dark:text-white tracking-wide text-center"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {items.map(({ label, href, Icon }, idx) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-[#9a2923]/15 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 hover:shadow-lg hover:shadow-[#9a2923]/10"
            >
              <Icon className="w-6 h-6 text-[#9a2923] dark:text-[#d4af37]" />
              <span className="font-['Lato',ui-sans-serif] text-sm text-[#1d1f24] dark:text-white/85 group-hover:underline">
                {label}
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#1d1f24]/70 dark:text-white/60 font-['Lato',ui-sans-serif]">
          © {new Date().getFullYear()} Benedictus Richard Ricardo. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
