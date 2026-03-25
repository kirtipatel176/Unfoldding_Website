'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, MoveUpRight, ArrowUpRight } from 'lucide-react';

const ProcessDaVinci = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let clientX = 0;
    let clientY = 0;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateEyes);
      }
    };

    const handleLeave = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      const leftPupil = leftEyeRef.current?.firstElementChild as HTMLElement;
      const rightPupil = rightEyeRef.current?.firstElementChild as HTMLElement;
      if (leftPupil) leftPupil.style.transform = `translate(0px, 0px)`;
      if (rightPupil) rightPupil.style.transform = `translate(0px, 0px)`;
    };

    const updateEyes = () => {
      const maxMove = 5; // Maximum pixel movement for pupil

      const updateEye = (eye: HTMLDivElement | null) => {
        if (!eye) return;
        const pupil = eye.firstElementChild as HTMLElement;
        if (!pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = clientX - eyeCenterX;
        const deltaY = clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        // Distance capped to maxMove
        const distance = Math.min(Math.hypot(deltaX, deltaY) / 10, maxMove);

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      };

      updateEye(leftEyeRef.current);
      updateEye(rightEyeRef.current);

      animationFrameId = null;
    };

    const container = containerRef.current;
    if (container) {
      // Desktop: Only track when hovering over the element
      container.addEventListener('mousemove', handleMove as EventListener);
      container.addEventListener('mouseleave', handleLeave as EventListener);
    }

    // Mobile/Tablet: Track touch anywhere on the screen since there's no hover
    globalThis.addEventListener('touchmove', handleMove as EventListener, { passive: true });
    globalThis.addEventListener('touchstart', handleMove as EventListener, { passive: true });
    globalThis.addEventListener('touchend', handleLeave as EventListener);

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMove as EventListener);
        container.removeEventListener('mouseleave', handleLeave as EventListener);
      }
      globalThis.removeEventListener('touchmove', handleMove as EventListener);
      globalThis.removeEventListener('touchstart', handleMove as EventListener);
      globalThis.removeEventListener('touchend', handleLeave as EventListener);

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative bg-transparent group overflow-hidden cursor-pointer ${className}`}>
      <Image
        src="/images/Davinci.jpg.jpeg"
        alt="Process"
        fill
        className="object-cover transition-transform duration-500"
      />

      {/* Left Eye wrapper */}
      <div
        ref={leftEyeRef}
        className="absolute w-8 h-8 -ml-4 -mt-[30px] md:-mt-4 z-10 flex items-center justify-center"
        style={{ top: '16%', left: '55.5%' }}
      >
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#111] transition-transform duration-100 ease-out" />
      </div>

      {/* Right Eye wrapper */}
      <div
        ref={rightEyeRef}
        className="absolute w-8 h-8 -ml-4 -mt-[30px] md:-mt-4 z-10 flex items-center justify-center"
        style={{ top: '16%', left: '67.6%' }}
      >
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#111] transition-transform duration-100 ease-out" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 border border-white/5 m-4 transition-all duration-500 md:group-hover:border-brand-gold/50 z-20">
        <div className="w-14 h-14 rounded-full border border-white/20 text-brand-gold flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform bg-black/40 backdrop-blur-[2px]">
          <ArrowUpRight className="w-6 h-6" />
        </div>
        <h3 className="font-display text-white text-2xl tracking-[0.25em] drop-shadow-lg">PROCESS</h3>
        <p className="text-white text-[10px] font-bold mt-3 uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 drop-shadow-md text-center">
          Discover • Define • Design
        </p>
      </div>
    </div>
  );
};

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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes levitate {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
        .animate-levitate {
          animation: levitate 8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* MOBILE VIEW - Single Column  Stacked Design (< md) */}
      <div className="md:hidden w-full flex flex-col">

        {/* 1. Inside Unfoldding - Full Width */}
        <div className="w-full h-[280px] bg-brand-brown flex flex-col relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-brand-brown via-brand-brown/90 to-transparent">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif italic text-brand-gold text-lg">Inside</h3>
                <h3 className="font-display text-brand-cream text-xl tracking-widest">UNFOLDDING</h3>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
          </div>
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
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-brand-brown to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* 2. Two Small Projects Side by Side */}
        <div className="w-full grid grid-cols-2 gap-[1px] bg-brand-green/20">
          {/* Project 1 - Elysium */}
          <div className="h-[200px] relative group overflow-hidden bg-gray-200 cursor-pointer">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-sans tracking-widest text-xs group-hover:bg-gray-400 transition-colors duration-1000">IMAGE: ELYSIUM</div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <div className="overflow-hidden mb-2">
                <h4 className="font-serif italic text-xs opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">Real Estate</h4>
              </div>
              <h3 className="font-display text-base tracking-widest leading-none">PROJECT 1</h3>
            </div>
          </div>

          {/* Project 2 - Nova */}
          <div className="h-[200px] bg-gray-400 relative group overflow-hidden cursor-pointer hover:bg-gray-500 transition-colors">
            <div className="absolute top-6 right-6 w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#C19B5F]"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-serif italic text-white/60 text-xs mb-1">Project</h4>
                <h3 className="font-display text-white text-base tracking-widest">PROJECT 2</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Symbol - Full Width */}
        <div className="w-full h-[200px] bg-white flex flex-col items-center justify-center p-8 relative group hover:bg-brand-cream transition-colors duration-500">
          <div className="w-24 h-24 text-brand-gold relative">
            <svg viewBox="0 0 100 100" fill="currentColor" className="animate-spin-slow duration-[20s] opacity-80 group-hover:opacity-100 transition-opacity">
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="48" y="0" width="4" height="100" transform={`rotate(${i * 30} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="20" fill="white" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* 4. Aurum - Full Width */}
        <div className="w-full h-[250px] relative bg-brand-dark overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-brand-dark/50 flex items-center justify-center text-white/30 font-sans tracking-widest text-sm group-hover:bg-brand-dark/40 transition-colors duration-700">IMAGE: AURUM</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
            <h4 className="text-white/70 font-serif italic text-base mb-2 transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">Rebranding</h4>
            <h3 className="text-white font-display text-3xl tracking-[0.2em] text-center">AURUM</h3>
          </div>
        </div>

        {/* 5. Services - Full Width with Floating Hanuman */}
        <div className="w-full h-[450px] relative bg-[#D4B37F] group overflow-hidden flex flex-col justify-start items-center pt-8 pb-8 cursor-pointer border-t border-brand-green/20">
          {/* Background Image */}
          <div className="absolute inset-[-5%] z-0 pointer-events-none animate-levitate">
            <Image
              src="/images/hanuman.jpeg"
              alt="Our Services"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Scrolling Text Layer */}
          <div className="absolute top-[40%] left-0 w-[200%] overflow-hidden flex items-center z-10 pointer-events-none opacity-30 mix-blend-overlay">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-6xl text-white mx-4 tracking-widest">OUR SERVICES</span>
            </div>
          </div>

          <div className="relative z-20 text-center mt-2">
            <h3 className="font-serif italic text-4xl text-[#0B4634] drop-shadow-md leading-none">OUR</h3>
            <h3 className="font-display text-4xl text-[#0B4634] tracking-widest drop-shadow-md leading-none">SERVICES</h3>
            <div className="w-12 h-12 mt-6 mx-auto rounded-full bg-[#0B4634] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* 6. Process - Full Width */}
        <ProcessDaVinci className="w-full h-[280px]" />

        {/* 7. Grand Expedition - Full Width */}
        <div className="w-full h-[300px] relative bg-gray-100 overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white/50 font-sans tracking-widest text-sm group-hover:bg-gray-500 transition-colors duration-1000">IMAGE: GRAND EXPEDITION</div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h4 className="text-brand-gold font-serif italic text-base mb-2">Hospitality</h4>
            <span className="text-white font-display text-2xl tracking-widest leading-none block">THE GRAND EXPEDITION</span>
          </div>
        </div>

        {/* 8. Project 9 - Full Width */}
        <div className="w-full h-[250px] relative bg-gray-600 overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 font-sans tracking-widest text-sm group-hover:bg-gray-600 transition-colors duration-700">
            PROJECT 9
          </div>
          <div className="absolute bottom-6 left-6 z-10">
            <h4 className="font-serif italic text-brand-gold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Design</h4>
            <h3 className="font-display text-white text-2xl tracking-widest">PROJECT 9</h3>
          </div>
        </div>

        {/* 9. Project 10 - Full Width */}
        <div className="w-full h-[250px] relative bg-white overflow-hidden group cursor-pointer">
          <Image
            src="/images/Pied Piper.png"
            alt="Pied Piper"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>

      {/* DESKTOP VIEW - 4 Column Grid (≥ md) */}
      <div className="hidden md:grid w-full grid-cols-4 auto-rows-[350px] gap-[1px] bg-brand-green/20 border-b border-brand-green/20">

        {/* 1. Elysium (Tall Left) - Col 1, Row 1-2 */}
        <div className="col-span-1 row-span-2 relative group overflow-hidden bg-gray-200 cursor-pointer">
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
        <div className="col-span-1 row-span-1 bg-brand-brown flex flex-col relative group overflow-hidden cursor-default">
          <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-brand-brown via-brand-brown/90 to-transparent">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif italic text-brand-gold text-lg">Inside</h3>
                <h3 className="font-display text-brand-cream text-xl tracking-widest">UNFOLDDING</h3>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
          </div>
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
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-brand-brown to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* 3. Aurum (Wide) - Col 3-4, Row 1 */}
        <div className="col-span-2 row-span-1 relative bg-brand-dark overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-brand-dark/50 flex items-center justify-center text-white/30 font-sans tracking-widest text-sm group-hover:bg-brand-dark/40 transition-colors duration-700">IMAGE: AURUM</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
            <h4 className="text-white/70 font-serif italic text-xl mb-3 transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">Rebranding</h4>
            <h3 className="text-white font-display text-6xl tracking-[0.2em] text-center">AURUM</h3>
          </div>
        </div>

        {/* 4. Symbol (Small) - Col 2, Row 2 */}
        <div className="col-span-1 row-span-1 bg-white flex flex-col items-center justify-center p-8 relative group hover:bg-brand-cream transition-colors duration-500">
          <div className="w-32 h-32 text-brand-gold relative">
            <svg viewBox="0 0 100 100" fill="currentColor" className="animate-spin-slow duration-[20s] opacity-80 group-hover:opacity-100 transition-opacity">
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="48" y="0" width="4" height="100" transform={`rotate(${i * 30} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="20" fill="white" />
              < circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold text-xs text-brand-brown">EST.</span>
            </div>
          </div>
          <span className="absolute bottom-6 font-serif italic text-brand-dark/40 group-hover:text-brand-dark/80 transition-colors">The Core</span>
        </div>

        {/* 5. Nova (Small) - Col 3, Row 2 */}
        <div className="col-span-1 row-span-1 bg-brand-green relative group overflow-hidden cursor-pointer hover:bg-brand-green/90 transition-colors">
          <div className="absolute top-6 right-6 w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#C19B5F]"></div>
          <div className="absolute bottom-8 left-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-serif italic text-white/60 text-sm mb-2">Fintech</h4>
              <h3 className="font-display text-white text-3xl tracking-widest">NOVA</h3>
            </div>
          </div>
        </div>

        {/* 6. Services (Tall Right) - Col 4, Row 2-3 */}
        <div className="col-span-1 row-span-2 relative bg-[#D4B37F] group overflow-hidden flex flex-col border-l border-brand-green/10 justify-start items-center pt-10 pb-8 cursor-pointer">
          {/* Background Image */}
          <div className="absolute inset-[-5%] z-0 pointer-events-none animate-levitate">
            <Image
              src="/images/hanuman.jpeg"
              alt="Our Services"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Scrolling Text Layer */}
          <div className="absolute top-[40%] left-0 w-[200%] overflow-hidden flex items-center z-10 pointer-events-none opacity-30 mix-blend-overlay">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
              <span className="font-display text-5xl text-white mx-4 tracking-widest">OUR SERVICES</span>
            </div>
          </div>

          <div className="relative z-20 text-center">
            <h3 className="font-serif italic text-4xl xl:text-5xl text-[#0B4634] drop-shadow-md leading-none">OUR</h3>
            <h3 className="font-display text-3xl xl:text-4xl text-[#0B4634] tracking-widest drop-shadow-md leading-none">SERVICES</h3>
            <div className="w-12 h-12 mt-8 mx-auto rounded-full bg-[#0B4634] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* 7. Process (Small) - Col 1, Row 3 */}
        <ProcessDaVinci className="col-span-1 row-span-1" />

        {/* 8. Grand Expedition (Wide Bottom) - Col 2-3, Row 3 */}
        <div className="col-span-2 row-span-1 relative bg-gray-100 overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white/50 font-sans tracking-widest text-sm group-hover:bg-gray-500 transition-colors duration-1000">IMAGE: GRAND EXPEDITION</div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h4 className="text-brand-gold font-serif italic text-xl mb-2">Hospitality</h4>
            <span className="text-white font-display text-3xl tracking-widest leading-none block">THE GRAND EXPEDITION</span>
          </div>
        </div>

        {/* Row 4 - 2 Wide Boxes */}

        {/* 9. Project 9 - Wide Bottom Left - Row 4, Col 1-2 */}
        <div className="col-span-2 row-span-1 relative bg-gray-600 overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 font-sans tracking-widest text-sm group-hover:bg-gray-600 transition-colors duration-700">
            PROJECT 9
          </div>
          <div className="absolute bottom-8 left-8 z-10">
            <h4 className="font-serif italic text-brand-gold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Design</h4>
            <h3 className="font-display text-white text-3xl tracking-widest">PROJECT 9</h3>
          </div>
        </div>

        {/* 10. Project 10 - Wide Bottom Right - Row 4, Col 3-4 */}
        <div className="col-span-2 row-span-1 relative bg-white overflow-hidden group cursor-pointer">
          <Image
            src="/images/Pied Piper.png"
            alt="Pied Piper"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;