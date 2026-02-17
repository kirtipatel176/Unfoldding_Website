'use client';

import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-[#2F6B3E] relative overflow-hidden font-serif py-12 md:py-20">

      <div className="relative w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

        {/* ───────────────── HERO / ARTWORK AREA ONLY ───────────────── */}
        <div className="relative">

          {/* Vertical Divider Lines (CLIPPED to hero area) */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/30 hidden md:block" />
            <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/30 hidden md:block" />
          </div>

          {/* Headline */}
          <div className="relative z-20 flex justify-center mb-10 md:mb-14">
            <h2 className="whitespace-nowrap text-[2.2vw] md:text-[2.8vw] lg:text-[3.5vw] text-white tracking-tight leading-none text-center">
              EVERY GREAT STORY STARTS WITH A TOUCH
            </h2>
          </div>

          {/* Figures */}
          <div className="relative z-20 w-full h-[150px] md:h-[250px] lg:h-[350px] mt-[-20px] md:mt-[-40px] pointer-events-none">
            <div className="grid grid-cols-3 w-full h-full">

              <div className="flex items-center justify-end">
                <div className="w-[140%] translate-x-[40%] relative h-[150px] md:h-[250px] lg:h-[350px]">
                  <Image
                    src="/images/f-1.png"
                    alt="Left Figure"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div />

              <div className="flex items-center justify-start">
                <div className="w-[140%] -translate-x-[40%] -translate-y-[32px] relative h-[150px] md:h-[250px] lg:h-[350px]">
                  <Image
                    src="/images/f-2.png"
                    alt="Right Figure"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ───────────────── FORM AREA (NO DIVIDERS) ───────────────── */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-12 md:mt-16">

          {/* Left Column */}
          <div className="space-y-10">

            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-white border-b-[1px] py-3 text-white text-lg placeholder-white/70 focus:outline-none font-light tracking-wide"
            />

            <input
              type="text"
              placeholder="Contact No."
              className="w-full bg-transparent border-b border-white border-b-[1px] py-3 text-white text-lg placeholder-white/70 focus:outline-none font-light tracking-wide"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white border-b-[1px] py-3 text-white text-lg placeholder-white/70 focus:outline-none font-light tracking-wide"
            />

          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end">
            <div className="border-b border-white border-b-[1px] pb-3">
              <span className="block mb-2 text-white/70 text-lg font-light">
                Message
              </span>
              <textarea
                className="w-full bg-transparent text-white text-lg focus:outline-none resize-none h-24 font-light"
              />
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="relative z-30 mt-8 md:mt-12 flex justify-center md:justify-end">
          <button
            type="submit"
            className="bg-white text-[#2F6B3E] px-12 py-3 font-serif text-lg tracking-wide hover:bg-white/90 transition-all duration-300 uppercase"
          >
            Submit
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
