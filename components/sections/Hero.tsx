'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100vh] pt-24 pb-12 overflow-hidden flex flex-col items-center justify-center bg-brand-cream">

      {/* Decorative Lines - Hide on mobile for cleaner look */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-brand-green"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-brand-green"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 mx-auto text-center overflow-hidden">

        {/* Top Text Cluster */}
        <div className="relative h-[70vh] md:h-[75vh] w-full flex items-center justify-center">

          {/* "HERE" - Top Left */}
          <h2 className="absolute top-[5%] md:top-[8%] left-[2%] sm:left-[5%] md:left-[5%] font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#B8956A] z-0">
            HERE
          </h2>

          {/* "CREATIVE STRATEGIES" - Top Right */}
          <div className="absolute top-[15%] sm:top-[12%] md:top-[5%] right-[2%] sm:right-[5%] md:right-[5%] z-10 text-left">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-[#B8956A] leading-tight">
              CREATIVE
            </h1>
            <h1 className="font-serif italic text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-[#B8956A] leading-tight ml-6 sm:ml-8 md:ml-16">
              STRATEGIES
            </h1>
          </div>

          {/* "WHISPERS IN MEANINGFUL" - Left Side */}
          <div className="absolute top-[32%] md:top-[35%] left-[2%] md:left-[5%] z-10 text-left max-w-[50%] sm:max-w-[45%] md:max-w-none">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#8B6F47] leading-tight tracking-tight">
              WHISPERS IN
            </h1>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#8B6F47] leading-tight tracking-tight">
              MEANINGFUL
            </h1>
          </div>

          {/* Central Image - Hero Horse */}
          <div className="relative z-[5] w-[250px] h-[250px] md:w-[450px] md:h-[450px] mx-auto transform ">
            <Image
              src="/images/hero_horse.png"
              alt="Hero Horse"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* "DESIGN STORIES" - Bottom Right */}
          <div className="absolute bottom-[15%] md:bottom-[8%] right-[2%] sm:right-[3%] md:right-[5%] z-20 text-right">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#8B6F47] leading-tight">
              DESIGN
            </h1>
            <h1 className="font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#B8956A] leading-tight ml-4 sm:ml-6 md:ml-12">
              STORIES
            </h1>
          </div>
        </div>

        {/* Subtitle / Description - Right Side */}
        <div className="absolute right-4 sm:right-6 md:right-16 top-[60%] sm:top-[58%] md:top-[55%] transform -translate-y-1/2 max-w-[200px] sm:max-w-[260px] md:max-w-xs text-right z-30">
          <p className="font-sans text-gray-600 text-[10px] sm:text-xs md:text-sm leading-relaxed">
            An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and <span className="italic">unfoldding</span> with purpose.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;