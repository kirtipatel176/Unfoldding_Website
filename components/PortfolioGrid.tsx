import React from 'react';
import { ArrowDown, MoveUpRight, ArrowUpRight } from 'lucide-react';

const PortfolioGrid: React.FC = () => {
  const services = [
    "Brand Strategy", "Visual Identity", "Packaging Design", "Art Direction",
    "Web Development", "Motion Graphics", "Copywriting", "Social Media",
    "Campaign Strategy", "Print Design", "Environmental Design", "Naming",
    "Consultancy", "UI/UX Design", "Content Creation"
  ];

  const insideUpdates = [
    "Latest: Studio won 'Agency of Year'",
    "Culture: Annual Retreat to Kyoto",
    "Hiring: Senior UI/UX Designer wanted",
    "Insight: The Future of Sustainable Packaging",
    "Launch: Tata Motors Rebrand Live",
    "Event: Design Week Panel Discussion",
    "Award: Best Typography 2024",
    "Office: We moved to a new space!",
    "Case Study: How we scaled FinTech"
  ];

  return (
    <section className="w-full bg-brand-cream border-t border-brand-green/20">
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 20s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Full width grid container with 1px gap for borders */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 auto-rows-[350px] gap-[1px] bg-brand-green/20 border-b border-brand-green/20">

        {/* 1. Elysium (Tall Left) - Col 1, Row 1-2 */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-gray-200 cursor-pointer">
          {/* Placeholder: Elysium */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-sans tracking-widest text-sm group-hover:bg-gray-400 transition-colors duration-1000">IMAGE: ELYSIUM</div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <div className="overflow-hidden mb-2">
              <h4 className="font-serif italic text-sm opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">Real Estate</h4>
            </div>
            <h3 className="font-display text-3xl tracking-widest leading-none">ELYSIUM</h3>
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <MoveUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* 2. Inside Unfoldding (Small) - Col 2, Row 1 */}
        <div className="md:col-span-1 md:row-span-1 bg-brand-brown flex flex-col relative group overflow-hidden cursor-default">
          {/* Header */}
          <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-brand-brown via-brand-brown/90 to-transparent">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif italic text-brand-gold text-lg">Inside</h3>
                <h3 className="font-display text-brand-cream text-xl tracking-widest">UNFOLDDING</h3>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="flex-1 overflow-hidden relative mt-16">
            <div className="animate-scroll-vertical flex flex-col px-6 pb-6 gap-6">
              {[...insideUpdates, ...insideUpdates].map((item, i) => (
                <div key={i} className="group/item cursor-pointer">
                  <p className="text-brand-cream/40 text-[10px] uppercase tracking-wider mb-1 group-hover/item:text-brand-gold transition-colors">Update</p>
                  <p className="text-brand-cream/80 font-sans text-sm leading-snug group-hover/item:text-white transition-colors border-l border-brand-gold/30 pl-3">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-brand-brown to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* 3. Aurum (Wide) - Col 3-4, Row 1 */}
        <div className="md:col-span-2 md:row-span-1 relative bg-brand-dark overflow-hidden group cursor-pointer">
          {/* Placeholder: Aurum */}
          <div className="w-full h-full bg-brand-dark/50 flex items-center justify-center text-white/30 font-sans tracking-widest text-sm group-hover:bg-brand-dark/40 transition-colors duration-700">IMAGE: AURUM</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
            <h4 className="text-white/70 font-serif italic text-xl mb-3 transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">Rebranding</h4>
            <h3 className="text-white font-display text-5xl md:text-6xl tracking-[0.2em] text-center">AURUM</h3>
          </div>
        </div>

        {/* 4. Symbol (Small) - Col 2, Row 2 */}
        <div className="md:col-span-1 md:row-span-1 bg-white flex flex-col items-center justify-center p-8 relative group hover:bg-brand-cream transition-colors duration-500">
          <div className="w-32 h-32 text-brand-gold relative">
            <svg viewBox="0 0 100 100" fill="currentColor" className="animate-spin-slow duration-[20s] opacity-80 group-hover:opacity-100 transition-opacity">
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="48" y="0" width="4" height="100" transform={`rotate(${i * 30} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="20" fill="white" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold text-xs text-brand-brown">EST.</span>
            </div>
          </div>
          <span className="absolute bottom-6 font-serif italic text-brand-dark/40 group-hover:text-brand-dark/80 transition-colors">The Core</span>
        </div>

        {/* 5. Nova (Small) - Col 3, Row 2 */}
        <div className="md:col-span-1 md:row-span-1 bg-brand-green relative group overflow-hidden cursor-pointer hover:bg-brand-green/90 transition-colors">
          {/* Image Removed - Solid Color Block */}

          <div className="absolute top-6 right-6 w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#C19B5F]"></div>

          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-serif italic text-white/60 text-sm mb-2">Fintech</h4>
              <h3 className="font-display text-white text-3xl tracking-widest">NOVA</h3>
            </div>
          </div>
        </div>

        {/* 6. Services (Tall Right) - Col 4, Row 2-3 */}
        <div className="md:col-span-1 md:row-span-2 relative bg-brand-cream group overflow-hidden flex flex-col border-l border-brand-green/10">
          <div className="relative z-20 py-8 text-center bg-brand-cream shadow-sm z-10">
            <h3 className="font-serif italic text-3xl text-brand-green">OUR</h3>
            <h3 className="font-display text-2xl text-brand-green tracking-widest">SERVICES</h3>
          </div>

          <div className="relative flex-1 overflow-hidden bg-brand-cream">
            <div className="animate-scroll-vertical w-full flex flex-col items-center gap-5 py-4">
              {[...services, ...services].map((service, i) => (
                <div key={i} className="flex flex-col items-center group/text">
                  <span className="text-sm font-sans font-bold text-brand-green/40 uppercase tracking-widest group-hover/text:text-brand-gold transition-colors cursor-pointer">
                    {service}
                  </span>
                  <span className="w-1 h-1 bg-brand-green/20 rounded-full mt-5"></span>
                </div>
              ))}
            </div>

            {/* Fade gradients */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-brand-cream to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-16 left-0 w-full h-24 bg-gradient-to-t from-brand-cream to-transparent z-10 pointer-events-none"></div>
          </div>

          <div className="absolute bottom-0 w-full p-4 bg-brand-cream flex justify-center z-20">
            <div className="w-10 h-10 rounded-full border border-brand-green/20 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-cream transition-colors cursor-pointer">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 7. Process (Small) - Col 1, Row 3 */}
        <div className="md:col-span-1 md:row-span-1 relative bg-gray-900 group overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors">
          {/* Texture Image Removed - Solid Color Block */}

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 border border-white/5 m-4 transition-all duration-500 group-hover:border-brand-gold/50">
            <div className="w-14 h-14 rounded-full border border-white/20 text-brand-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <h3 className="font-display text-white text-2xl tracking-[0.25em]">PROCESS</h3>
            <p className="text-white/40 text-[10px] mt-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Discover • Define • Design
            </p>
          </div>
        </div>

        {/* 8. Grand Expedition (Wide Bottom) - Col 2-3, Row 3 */}
        <div className="md:col-span-2 md:row-span-1 relative bg-gray-100 overflow-hidden group cursor-pointer">
          {/* Placeholder: Grand Expedition */}
          <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white/50 font-sans tracking-widest text-sm group-hover:bg-gray-500 transition-colors duration-1000">IMAGE: GRAND EXPEDITION</div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

          <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
            <div className="max-w-md">
              <h4 className="text-brand-gold font-serif italic text-xl mb-2">Hospitality</h4>
              <span className="text-white font-display text-4xl tracking-widest leading-none block">THE GRAND EXPEDITION</span>
            </div>
            <div className="hidden md:flex items-center gap-3 group/btn">
              <span className="text-white/80 font-sans text-xs tracking-widest uppercase group-hover/btn:text-white transition-colors">View Case Study</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                <MoveUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 - 2 Wide Boxes */}

        {/* 9. Project 9 - Wide Bottom Left - Row 4, Col 1-2 */}
        <div className="md:col-span-2 md:row-span-1 relative bg-gray-600 overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 font-sans tracking-widest text-sm group-hover:bg-gray-600 transition-colors duration-700">
            PROJECT 9
          </div>
          <div className="absolute bottom-8 left-8 z-10">
            <h4 className="font-serif italic text-brand-gold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Design</h4>
            <h3 className="font-display text-white text-3xl tracking-widest">PROJECT 9</h3>
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <MoveUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* 10. Project 10 - Wide Bottom Right - Row 4, Col 3-4 */}
        <div className="md:col-span-2 md:row-span-1 relative bg-gray-500 overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-300 font-sans tracking-widest text-sm group-hover:bg-gray-500 transition-colors duration-700">
            PROJECT 10
          </div>
          <div className="absolute bottom-8 left-8 z-10">
            <h4 className="font-serif italic text-brand-gold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Branding</h4>
            <h3 className="font-display text-white text-3xl tracking-widest">PROJECT 10</h3>
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <MoveUpRight className="w-5 h-5" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;