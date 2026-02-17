'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-[#2F6B3E] relative overflow-hidden flex flex-col font-serif py-12 md:py-20">

      {/* Vertical Lines - 3 Equal Sections */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        {/* Line 1 (Left Edge) */}
        <div className="absolute left-4 sm:left-8 md:left-16 top-0 bottom-0 w-px bg-white/20"></div>
        {/* Line 2 (33.33%) */}
        <div className="absolute left-[33.33%] top-0 bottom-0 w-px bg-white/20 hidden md:block"></div>
        {/* Line 3 (66.66%) */}
        <div className="absolute left-[66.66%] top-0 bottom-0 w-px bg-white/20 hidden md:block"></div>
        {/* Line 4 (Right Edge) */}
        <div className="absolute right-4 sm:right-8 md:right-16 top-0 bottom-0 w-px bg-white/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex-grow flex flex-col justify-center">

        {/* Headline */}
        <div className="w-full flex justify-center mb-8 md:mb-12 px-4 md:px-8 relative z-20">
          <h2 className="whitespace-nowrap text-[2.2vw] md:text-[2.8vw] lg:text-[3.5vw] font-normal text-white tracking-tight leading-none text-center">
            EVERY GREAT STORY STARTS WITH A TOUCH
          </h2>
        </div>

        {/* Images - Aligned to Vertical Lines */}
        {/* Container matches the vertical lines grid width exactly */}
        <div className="relative w-full h-[150px] md:h-[250px] lg:h-[350px] pointer-events-none z-10 mt-[-20px] md:mt-[-40px]">
          {/* Using a grid that mirrors the vertical lines: 3 columns */}
          <div className="grid grid-cols-3 w-full h-full">

            {/* Left Image - Finger should touch right edge of col-1 (Line 2) */}
            <div className="col-span-1 flex items-center justify-end pr-0 relative">
              {/* Translate X to make finger touch the line exactly */}
              <div className="w-[140%] translate-x-[45%] md:translate-x-[40%] flex justify-end">
                <img
                  src="/images/f-1.png"
                  alt="Figure Left"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Middle Column - Gap */}
            <div className="col-span-1"></div>

            {/* Right Image - Finger should touch left edge of col-3 (Line 3) */}
            <div className="col-span-1 flex items-center justify-start pl-0 relative">
              {/* Translate X to make finger touch the line exactly */}
              <div className="w-[140%] -translate-x-[45%] md:-translate-x-[40%] flex justify-start">
                <img
                  src="/images/f-2.png"
                  alt="Figure Right"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Content Columns: Form & Empty Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-20 mt-8 md:mt-12">

          {/* Left Column: Form */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/40 py-3 text-white text-base md:text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors font-light tracking-wide"
              />
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Contact No."
                  className="w-full bg-transparent border-b border-white/40 py-3 text-white text-base md:text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors font-light tracking-wide"
                />
              </div>
              <div className="pt-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/40 py-3 text-white text-base md:text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors font-light tracking-wide"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Message & line */}
          <div className="space-y-8 md:space-y-12 flex flex-col justify-end">
            <div className="flex-grow flex flex-col justify-end pb-4">
              <div className="border-b border-white/40 py-3 w-full">
                <span className="text-white/80 text-base md:text-lg font-light tracking-wide block mb-2">Message</span>
                <textarea
                  className="w-full bg-transparent text-white text-base md:text-lg placeholder-white/60 focus:outline-none resize-none h-20 md:h-24 font-light"
                ></textarea>
              </div>
            </div>

            <div className="pt-4 w-full border-t border-white/40 opacity-0 md:opacity-100"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;