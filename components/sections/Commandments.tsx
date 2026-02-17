'use client';

import React from 'react';
import Image from 'next/image';
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

const Commandments: React.FC = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden mt-0 pt-0">

      {/* ================= MOBILE VIEW (Visible < md) ================= */}
      <div className="md:hidden w-full min-h-screen flex flex-col relative bg-[#2F6B3E]">

        {/* Top Section: Cream Background, "10", Title, Image */}
        <div className="relative w-full h-[45vh] bg-brand-cream flex flex-col items-center justify-center overflow-hidden shrink-0">
          {/* Big 10 Watermark */}
          <div className="absolute top-4 left-4 z-0">
            <span className="font-serif text-[180px] text-[#A68A56] leading-none opacity-40 select-none">
              10
            </span>
          </div>

          {/* Title */}
          <h2 className="absolute top-8 right-6 font-display text-[32px] text-[#0B4634] tracking-tight z-10 leading-[0.9] text-right">
            COMMANDMENTS
          </h2>

          {/* Prophet Image */}
          <div className="absolute bottom-0 right-[-10%] w-[80%] h-[85%] z-20">
            <Image
              src="/images/Elderly_prophet.png"
              alt="Prophet"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Bottom Section: Scrollable Content List */}
        <div className="flex-grow w-full bg-[#2F6B3E] px-6 py-8 z-30 relative shadow-[0_-10px_20px_rgba(0,0,0,0.1)] rounded-t-[30px] mt-[-20px]">
          <div className="space-y-6 pb-20">
            {COMMANDMENTS_DATA.map((cmd) => (
              <div key={cmd.id} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <h3 className="font-sans font-extrabold uppercase text-xs tracking-wide mb-1 text-[#A68A56]">
                  {cmd.id}. {cmd.title}
                </h3>
                <p className="font-sans text-white/80 text-sm leading-relaxed">
                  {cmd.description}
                </p>
              </div>
            ))}
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
            <span className="font-serif text-[180px] sm:text-[260px] md:text-[380px] lg:text-[460px] text-[#A68A56] leading-none opacity-50">
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
        <div className="relative w-full md:w-[70%] bg-[#2F6B3E] text-white px-6 md:px-16 py-12 md:py-20 flex items-center">

          <div className="space-y-6 md:space-y-8 max-w-3xl z-30 md:pl-48">
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
      </div>
    </section>
  );
};

export default Commandments;
