'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100vh] pt-24 pb-12 overflow-hidden bg-brand-cream">

      {/* =========================================
          MOBILE & TABLET LAYOUT (< lg)
          ========================================= */}
      <div className="lg:hidden flex flex-col items-center w-full px-4">

        {/* Top Text Group */}
        <div className="flex flex-col items-center mt-8 mb-4 space-y-2 md:space-y-4 md:mt-16">
          <h2 className="font-serif italic text-5xl md:text-7xl text-[#B8956A]">
            HERE
          </h2>
          <h1 className="font-display text-3xl md:text-5xl text-[#8B6F47] tracking-wider uppercase">
            WHISPERS IN
          </h1>
        </div>

        {/* Image & Floating Words Container */}
        <div className="relative w-full max-w-[350px] md:max-w-[500px] h-[350px] md:h-[500px] my-4 md:my-8">
          {/* Main Image */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Image
              src="/images/hero_horse.png"
              alt="Hero Horse"
              width={600}
              height={600}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* "CREATIVE" - Floating Top Right */}
          <div className="absolute top-[10%] right-[-5%] md:right-[-10%] z-20 transform -rotate-6">
            <span className="font-serif italic text-4xl md:text-6xl text-[#B8956A] opacity-90">
              CREATIVE
            </span>
          </div>

          {/* "MEANINGFUL" - Overlapping Bottom */}
          <div className="absolute -bottom-8 left-0 z-20">
            <span className="font-display text-4xl md:text-6xl text-[#8B6F47] tracking-wide opacity-90 uppercase">
              MEANINGFUL
            </span>
          </div>
        </div>

        {/* "STRATEGIES" */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif italic text-5xl md:text-7xl text-[#B8956A] text-center">
            STRATEGIES
          </h1>
        </div>

        {/* Description Paragraph */}
        <div className="max-w-[300px] md:max-w-[500px] text-center mb-12 md:mb-16">
          <p className="font-sans text-gray-600 text-sm md:text-lg leading-relaxed">
            An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and <span className="italic">unfoldding</span> with purpose.
          </p>
        </div>

        {/* Bottom Text Group */}
        <div className="flex flex-col items-center space-y-1 mb-8">
          <h1 className="font-serif text-5xl md:text-7xl text-[#8B6F47]">
            DESIGN
          </h1>
          <div className="flex items-center gap-4">
            <h1 className="font-serif italic text-5xl md:text-7xl text-[#B8956A]">
              STORIES
            </h1>
            {/* Optional Badge/Circle if needed based on "N" in screenshot */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#B8956A] flex items-center justify-center text-brand-cream font-serif italic text-lg md:text-2xl">
              N°
            </div>
          </div>
        </div>

      </div>


      {/* =========================================
          DESKTOP LAYOUT (>= lg)
          (Original Design)
          ========================================= */}
      <div className="hidden lg:flex relative flex-col items-center justify-center h-[100vh]">

        {/* Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-brand-green"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-brand-green"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full px-4 mx-auto text-center overflow-hidden h-full flex flex-col justify-center">

          {/* Top Text Cluster */}
          <div className="relative h-[75vh] w-full flex items-center justify-center">

            {/* "HERE" - Top Left */}
            <h2 className="absolute top-[8%] left-[5%] font-serif italic text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#B8956A] z-0">
              HERE
            </h2>

            {/* "CREATIVE STRATEGIES" - Top Right */}
            <div className="absolute top-[5%] right-[5%] z-10 text-left">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#B8956A] leading-tight">
                CREATIVE
              </h1>
              <h1 className="font-serif italic text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#B8956A] leading-tight ml-8 xl:ml-16">
                STRATEGIES
              </h1>
            </div>

            {/* "WHISPERS IN MEANINGFUL" - Left Side */}
            <div className="absolute top-[30%] left-[2%] z-10 text-left">
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#8B6F47] leading-tight tracking-tight">
                WHISPERS IN
              </h1>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#8B6F47] leading-tight tracking-tight">
                MEANINGFUL
              </h1>
            </div>

            {/* Central Image - Hero Horse */}
            <div className="relative z-[5] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] mx-auto transform ">
              <Image
                src="/images/hero_horse.png"
                alt="Hero Horse"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* "DESIGN STORIES" - Bottom Right */}
            <div className="absolute bottom-[8%] right-[5%] z-20 text-right">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#8B6F47] leading-tight">
                DESIGN
              </h1>
              <h1 className="font-serif italic text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#B8956A] leading-tight ml-8 xl:ml-12">
                STORIES
              </h1>
            </div>
          </div>

          {/* Subtitle / Description - Right Side */}
          <div className="absolute right-8 lg:right-12 xl:right-16 top-[55%] transform -translate-y-1/2 max-w-[250px] lg:max-w-xs text-right z-30">
            <p className="font-sans text-gray-600 text-xs lg:text-sm leading-relaxed">
              An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and <span className="italic">unfoldding</span> with purpose.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;