import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <div className="mt-10">
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="font-['Oswald',ui-sans-serif] text-xl md:text-2xl text-[#9a2923] dark:text-[#d4af37]"
    >
      {title}
    </motion.h3>
    <div className="mt-3 text-sm md:text-base text-[#1d1f24] dark:text-white/85 font-['Lato',ui-sans-serif]">
      {children}
    </div>
  </div>
);

const Details = () => {
  return (
    <section className="relative bg-[#f8f8f9] dark:bg-[#0b0c0e]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_100%,rgba(154,41,35,0.07),transparent_50%),radial-gradient(circle_at_100%_0%,rgba(212,175,55,0.06),transparent_50%)]" />
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-16">
        <Section title="Work Experience">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 md:p-5 rounded-lg border border-[#9a2923]/15 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <p className="font-semibold text-[#0f0f11] dark:text-white">Home Digital Indonesia</p>
                <p className="text-[#9a2923] dark:text-[#d4af37] text-sm">Management Trainee · Jul 2024 – Sep 2025</p>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Gained hands-on experience in project management and workflow optimization</li>
                <li>Designed and implemented a cross-departmental project that saved 12 hours per week</li>
                <li>Analyzed employee satisfaction data to improve workplace efficiency</li>
                <li>Collaborated with finance, sales, and operations teams to enhance process alignment</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-4 md:p-5 rounded-lg border border-[#9a2923]/15 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <p className="font-semibold text-[#0f0f11] dark:text-white">Ultimate Event Organizer</p>
                <p className="text-[#9a2923] dark:text-[#d4af37] text-sm">Stage Crew · Jun 2022 – Aug 2022</p>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Coordinated backstage operations for events with 1,000+ participants</li>
                <li>Managed stage setup and technical transitions with lighting, security, field, and sound crews</li>
                <li>Streamlined backstage logistics, improving safety and time management</li>
                <li>Guided visitors and participants by providing instructions and directions, ensuring smooth event flow and positive experience</li>
              </ul>
            </motion.div>
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Saint Mary 2 Bandung, Indonesia (Jul 2020 – Jun 2023)</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Senior High School Science Program (IPA)</li>
                <li>Vice President (Year 1) and President (Year 2) of Student Council (OSIS)</li>
                <li>Represented school at UNDIP Biology Championship</li>
                <li>Active member of Pramuka (Scouting)</li>
                <li>Organized rock-climbing training with Vertical Rescue Indonesia</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Open University Indonesia — Bachelor of Science in Data Science (Aug 2025 - Present)</p>
            </div>
          </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-8">
          <Section title="Skills">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Technical:</span> Microsoft Office Suite, Google Workspace, Obsidian, Excel Automation, Basic Data Visualization</li>
              <li><span className="font-semibold">Soft Skills:</span> Communication, Leadership, Analytical Thinking, Project Management, Collaboration, Strategic Planning</li>
            </ul>
          </Section>

          <Section title="Certifications & Courses">
            <ul className="list-disc pl-5 space-y-1">
              <li>Google Data Analytics — Coursera (In Progress)</li>
              <li>Goethe-Institut German Language Course (A1 - B2.2 Completed)</li>
            </ul>
          </Section>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Section title="Languages">
            <ul className="list-disc pl-5 space-y-1">
              <li>Indonesian: Native</li>
              <li>English: Upper Intermediate (B2)</li>
              <li>German: Upper Intermediate (B2, Goethe-Zertifikat B1)</li>
              <li>Latin: Beginner (Self-learning)</li>
            </ul>
          </Section>

          <Section title="Hobbies & Interests">
            <p>Rock Climbing, Social Impact & Leadership, Language & Technical Learning, Workflow Automation & Dashboarding</p>
          </Section>
        </div>

        <Section title="Awards & Accomplishments">
          <ul className="list-disc pl-5 space-y-1">
            <li>1st Place: Short Film Competition, Komisi Komsos Keuskupan Bandung (2019) — Film 'Dilema' on bullying awareness</li>
            <li>1st Place: Instagram Reels Competition, Goethe-Institut Bandung (2023) — 'Ein Tag in meinem Leben'</li>
          </ul>
        </Section>

        <Section title="References">
          <p>Available upon request</p>
        </Section>
      </div>
    </section>
  );
};

export default Details;
