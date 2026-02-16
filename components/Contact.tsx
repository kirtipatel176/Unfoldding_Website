'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-[#0B4634] min-h-screen md:min-h-[140vh] relative overflow-hidden flex flex-col">

      {/* Vertical Lines - 4 columns approx */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-4 sm:px-8 md:px-16 max-w-7xl mx-auto border-l border-r border-white/10">
        <div className="h-full w-px bg-white/10"></div>
        <div className="h-full w-px bg-white/10"></div>
        <div className="h-full w-px bg-white/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-24 md:pt-32 pb-12 flex-grow flex flex-col">

        {/* Headline */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-32 tracking-tight leading-[0.9]">
          EVERY GREAT STORY STARTS WITH A TOUCH
        </h2>

        {/* Images - Creation of Adam Style */}
        <div className="relative md:absolute w-full h-[150px] md:top-[30%] md:left-0 md:h-[400px] pointer-events-none z-10 my-4 md:my-0">
          {/* Left Figure (Adam/Human) */}
          <div className="absolute left-[-10%] md:left-[15%] top-0 md:top-10 w-[180px] md:w-[400px]">
            <img src="/images/f-1.png" alt="Figure Left" className="w-full h-auto object-contain transform " />
          </div>

          {/* Right Figure (God/Divine) */}
          <div className="absolute right-[-10%] md:right-[15%] top-4 md:top-0 w-[180px] md:w-[400px]">
            <img src="/images/f-2.png" alt="Figure Right" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Content Columns: Form & Empty Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-20 mt-0 md:mt-auto">

          {/* Left Column: Form */}
          <div className="space-y-12">
            <div className="space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/30 py-4 text-white text-lg placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="text"
                placeholder="Contact No."
                className="w-full bg-transparent border-b border-white/30 py-4 text-white text-lg placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/30 py-4 text-white text-lg placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Right Column: Message & line */}
          <div className="space-y-12 flex flex-col justify-end">
            <input
              type="text"
              placeholder="Message"
              className="w-full bg-transparent border-b border-white/30 py-4 text-white text-lg placeholder-white/60 focus:outline-none focus:border-white transition-colors"
            />

            <div className="pt-8">
              <div className="w-full h-px bg-white/30"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;