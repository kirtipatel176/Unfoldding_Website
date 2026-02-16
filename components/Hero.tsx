import React from 'react';

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

      <div className="relative z-10 max-w-7xl w-full px-4 mx-auto text-center">

        {/* Top Text Cluster */}
        <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center">

          {/* "HERE" */}
          <h2 className="absolute top-[5%] left-[5%] md:left-[15%] font-serif italic text-4xl md:text-7xl text-brand-gold opacity-80 z-0">
            HERE
          </h2>

          {/* "WHISPERS IN" */}
          <h1 className="absolute top-[20%] left-[-2%] md:left-[5%] font-display text-4xl md:text-6xl lg:text-8xl text-brand-brown tracking-tighter z-10 text-right md:text-left leading-tight w-[40%] md:w-auto">
            WHISPERS IN <br />
            <span className="font-serif italic text-brand-gold">MEANINGFUL</span>
          </h1>

          {/* Central Image - Trojan Horse Placeholder */}
          <div className="relative z-20 w-64 h-64 md:w-96 md:h-96 mx-auto">
            {/* Placeholder for Trojan Horse Image */}
            <div
              className="w-full h-full flex items-center justify-center bg-brand-green/10 text-brand-green/40 text-xs font-sans tracking-widest border border-brand-green/20"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}
            >
              [IMAGE]
            </div>
            {/* Overlay simulation of the wooden texture/horse shape */}
            <div className="absolute inset-0 border-2 border-brand-green/20 rotate-3 pointer-events-none"></div>
          </div>

          {/* "CREATIVE STRATEGIES" */}
          <h1 className="absolute top-[5%] right-[-5%] md:right-[5%] font-display text-4xl md:text-7xl lg:text-9xl text-brand-green opacity-90 z-10 text-left w-[50%] md:w-auto leading-none">
            CREATIVE <br />
            <span className="ml-12 md:ml-32 italic font-serif text-brand-gold text-4xl md:text-7xl">STRATEGIES</span>
          </h1>

          {/* "DESIGN STORIES" */}
          <h1 className="absolute bottom-[10%] right-[0%] md:right-[10%] font-serif text-4xl md:text-7xl text-brand-green z-20 text-right">
            DESIGN <br />
            <span className="font-display italic text-brand-gold text-5xl md:text-8xl">STORIES</span>
          </h1>
        </div>

        {/* Subtitle / Description */}
        <div className="max-w-xl mx-auto mt-8 md:mt-16 text-center relative z-30">
          <p className="font-sans text-brand-dark/80 text-sm md:text-base leading-relaxed tracking-wide">
            An independent brand and design consultancy turning complexity into clarity —
            crafting brands that think deeply, feel human, and <span className="italic font-serif">unfoldding</span> with purpose.
          </p>
          <div className="h-1 w-24 bg-brand-gold mx-auto mt-6"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;