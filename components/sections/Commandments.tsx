'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Commandment } from '@/types';

const COMMANDMENTS_DATA: Commandment[] = [
  { id: 1, title: "THOU SHALT BEGIN WITH TRUTH", description: "For every brand story must rise from something real — a belief, not a briefing." },
  { id: 2, title: "THOU SHALT NOT WORSHIP TRENDS", description: "They pass like seasons. Purpose endures." },
  { id: 3, title: "THOU SHALT SEE CONSUMERS NOT AS DATA, BUT AS PEOPLE", description: "With fears, dreams, and infinite nuance — the true clay of every idea." },
  { id: 4, title: "THOU SHALT BUILD MEANING BEFORE MESSAGES", description: "For what is a campaign if not a vessel without soul?" },
  { id: 5, title: "THOU SHALT HONOR CONTEXT AS MUCH AS CONCEPT", description: "For even the brightest story dims in the wrong light." },
  { id: 6, title: "THOU SHALT DESIGN NOT FOR THE EYE ALONE, BUT FOR THE MIND AND THE HEART", description: "Aesthetics seduce. Empathy stays." },
  { id: 7, title: "THOU SHALT LISTEN BEFORE THOU SPEAKEST", description: "Every great story begins with silence — and an insight waiting to be heard." },
  { id: 8, title: "THOU SHALT WAGE NO WAR FOR ATTENTION, BUT INVITE BELONGING", description: "The truest engagement is not captured; it's chosen." },
  { id: 9, title: "THOU SHALT MEASURE THY IMPACT NOT BY LIKES, BUT BY CHANGE", description: "For numbers count reach; stories count resonance." },
  { id: 10, title: "THOU SHALT LET THE STORY UNFOLD — PATIENTLY, PURPOSEFULLY, HUMANLY", description: "For meaning, like design, reveals itself only to those who wait and listen." },
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      // Pause at the end before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Pause before re-typing
      timer = setTimeout(() => setIsDeleting(false), 500);
    } else {
      // Typing or deleting speed
      const speed = isDeleting ? 20 : 50;
      timer = setTimeout(() => {
        setDisplayText(
          text.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span className="relative block">
      {/* Invisible text reserves full height/width to prevent layout shifts */}
      <span className="invisible">{text}</span>

      {/* Animated text overlay */}
      <span className="absolute top-0 left-0">
        {displayText}
        <span className="animate-pulse inline-block opacity-70 ml-[2px] font-light">|</span>
      </span>
    </span>
  );
};

const Commandments: React.FC = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden mt-0 pt-0">

      {/* ================= MOBILE VIEW (Visible < md) ================= */}
      <div className="md:hidden w-full min-h-screen flex flex-col relative">

        {/* Top Section: Cream Background, "10", Title, Image */}
        <div className="relative w-full h-[45vh] bg-brand-cream flex flex-col items-center justify-center overflow-hidden shrink-0">
          {/* Big 10 Watermark */}
          <div className="absolute top-4 left-4 z-0">
            <span className="font-serif text-[180px] text-[#A68A56] leading-none select-none opacity-100">
              10
            </span>
          </div>

          {/* Title - Vertical */}
          <h2
            className="absolute top-12 right-8 font-display text-[28px] text-[#0B4634] tracking-tight z-10 leading-[1.1] uppercase"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            <span className="font-burgues text-[30px] inline-block -rotate-90">C</span>OMMANDMENTS
          </h2>

          {/* Prophet Image */}
          <div className="absolute bottom-0 left-0 w-full h-[85%] z-20">
            <Image
              src="/images/Elderly_prophet.png"
              alt="Prophet"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="w-full bg-[#2F6B3E] px-8 pt-8 pb-6 z-30 relative shadow-[0_-10px_20px_rgba(0,0,0,0.1)] rounded-t-[30px] mt-[-20px]">
          <p className="font-serif italic text-white/90 text-center text-base leading-relaxed">
            &ldquo;For what is a campaign if not a vessel<br />without soul?&rdquo;
          </p>
        </div>

        {/* Commandments List Section */}
        <div className="flex-grow w-full bg-[#2F6B3E] px-6 pb-8">
          <div className="space-y-6 pb-20">
            {COMMANDMENTS_DATA.map((cmd, index) => {

              // Extract title without "THOU SHALT" prefix for cleaner display
              const cleanTitle = cmd.title.replace('THOU SHALT ', '');

              return (
                <motion.div
                  key={cmd.id}
                  className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.015 } },
                    hidden: {}
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-[#C5A572] text-lg shrink-0 mt-0.5">
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <h3 className="font-sans font-bold uppercase text-xs tracking-wide mb-1 text-white">
                        <TypewriterText text={cleanTitle} />
                      </h3>
                      <p className="font-sans text-white/70 text-sm leading-relaxed">
                        <TypewriterText text={cmd.description} />
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ================= DESKTOP VIEW (Visible >= md) ================= */}
      <div className="hidden md:flex w-full min-h-screen flex-row bg-white relative">

        {/* PROPHET IMAGE — CENTERED BETWEEN SECTIONS */}
        <div className="absolute top-0 left-[calc(50%-150px)] transform -translate-x-1/2 z-20 w-[10%] md:w-[40%] h-full pointer-events-none">
          <Image
            src="/images/Elderly_prophet.png"
            alt="Prophet"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>

        {/* LEFT PANEL */}
        <div className="relative w-full md:w-[30%] bg-brand-cream min-h-[50vh] md:min-h-screen flex items-end overflow-hidden">

          {/* BIG 10 */}
          <div className="absolute top-[5%] left-[5%] z-10 select-none">
            <span className="font-serif text-[180px] sm:text-[260px] md:text-[380px] lg:text-[460px] text-[#A68A56] leading-none opacity-100">
              10
            </span>
          </div>

          {/* VERTICAL COMMANDMENTS */}
          <div className="absolute inset-y-0 left-[20%] flex items-center z-10 pointer-events-none">
            <h2
              className="font-display text-[60px] sm:text-[90px] md:text-[120px] lg:text-[140px] tracking-tight text-[#0B4634] uppercase"
              style={{ writingMode: 'sideways-lr' }}
            >
              <span className="font-burgues text-[70px] sm:text-[110px] md:text-[150px] lg:text-[180px] mr-2">C</span>OMMANDMENTS
            </h2>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative w-full md:w-[70%] bg-[#2F6B3E] text-white px-6 md:px-16 py-12 md:py-20 flex items-center">

          <div className="space-y-6 md:space-y-8 max-w-3xl z-30 md:pl-48">
            {COMMANDMENTS_DATA.map((cmd) => (
              <motion.div
                key={cmd.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.015 } },
                  hidden: {}
                }}
              >
                <h3 className="font-sans font-extrabold uppercase text-sm md:text-lg tracking-wide mb-1 transition-colors hover:text-[#A68A56]">
                  <TypewriterText text={cmd.title} />
                </h3>
                <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed">
                  <TypewriterText text={cmd.description} />
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Commandments;
