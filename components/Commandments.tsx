'use client';

import React from 'react';
import Image from 'next/image';
import { Commandment } from '../types';

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

const Commandments: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-white overflow-hidden relative mt-0 pt-0">

      {/* PROPHET IMAGE — CENTERED BETWEEN SECTIONS */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 w-[60%] md:w-[40%] h-full pointer-events-none">
        <Image
          src="/images/elderly-prophet-transparent.png"
          alt="Elderly Prophet with Stone Tablets"
          width={900}
          height={1400}
          priority
          className="w-full h-auto object-contain object-bottom"
        />
      </div>

      {/* LEFT PANEL */}
      <div className="relative w-full md:w-[50%] bg-brand-cream min-h-[50vh] md:min-h-screen flex items-end overflow-hidden">

        {/* BIG 10 */}
        <div className="absolute top-[8%] left-[-5%] z-10 select-none">
          <span className="font-serif text-[160px] sm:text-[260px] md:text-[380px] lg:text-[460px] text-[#A68A56] leading-none opacity-50">
            10
          </span>
        </div>

        {/* VERTICAL COMMANDMENTS */}
        <div className="absolute inset-y-0 left-[20%] flex items-center z-10 pointer-events-none">
          <h2
            className="font-display text-[60px] sm:text-[90px] md:text-[120px] lg:text-[140px] tracking-tight text-transparent"
            style={{
              writingMode: 'sideways-lr',
              WebkitTextStroke: '1px #0B4634',
            }}
          >
            COMMANDMENTS
          </h2>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="relative w-full md:w-[50%] bg-[#0B4634] text-white px-6 md:px-16 py-12 md:py-20 flex items-center">

        <div className="space-y-6 md:space-y-8 max-w-3xl z-30">
          {COMMANDMENTS_DATA.map((cmd) => (
            <div key={cmd.id}>
              <h3 className="font-sans font-extrabold uppercase text-sm md:text-lg tracking-wide mb-1 transition-colors hover:text-[#A68A56]">
                {cmd.title}
              </h3>
              <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed">
                {cmd.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Commandments;
