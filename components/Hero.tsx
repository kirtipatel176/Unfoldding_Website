import React from 'react';
import trojanHorse from '../assets/images/trojan-horse.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100vh] pt-24 pb-12 overflow-hidden flex flex-col items-center justify-center bg-brand-cream">

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-brand-green"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-brand-green"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-brand-green"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-brand-green"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 mx-auto text-center overflow-hidden">

        {/* Top Text Cluster */}
        <div className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center">

          {/* "HERE" - Top Left */}
          <h2 className="absolute top-[8%] left-[8%] md:left-[12%] font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#B8956A] z-0">
            HERE
          </h2>

          {/* "CREATIVE STRATEGIES" - Top Right */}
          <div className="absolute top-[5%] right-[8%] md:right-[15%] z-10 text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#B8956A] leading-tight">
              CREATIVE
            </h1>
            <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#B8956A] leading-tight ml-12 md:ml-16">
              STRATEGIES
            </h1>
          </div>

          {/* "WHISPERS IN MEANINGFUL" - Left Side */}
          <div className="absolute top-[35%] left-[2%] md:left-[5%] z-10 text-left max-w-[35%] md:max-w-none">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#8B6F47] leading-tight tracking-tight">
              WHISPERS IN
            </h1>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#8B6F47] leading-tight tracking-tight">
              MEANINGFUL
            </h1>
          </div>

          {/* Central Image - Trojan Horse */}
          {/* <div className="relative z-20 w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
            <img
              src={trojanHorse}
              alt="Trojan Horse"
              className="w-full h-full object-contain"
            />
          </div> */}

          {/* "DESIGN STORIES" - Bottom Right */}
          <div className="absolute bottom-[8%] right-[5%] md:right-[12%] z-20 text-right">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#8B6F47] leading-tight">
              DESIGN
            </h1>
            <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#B8956A] leading-tight ml-8 md:ml-12">
              STORIES
            </h1>
          </div>
        </div>

        {/* Subtitle / Description - Right Side */}
        <div className="absolute right-6 md:right-16 top-[55%] md:top-[55%] transform -translate-y-1/2 max-w-[280px] md:max-w-xs text-right z-30">
          <p className="font-sans text-gray-600 text-xs md:text-sm leading-relaxed">
            An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and <span className="italic">unfoldding</span> with purpose.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;