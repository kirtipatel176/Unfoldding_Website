'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, MoveUpRight, ArrowUpRight } from 'lucide-react';

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

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE TILE COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const TileInside = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-brand-brown via-brand-brown/90 to-transparent">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-serif italic text-brand-gold text-lg">Inside</h3>
                        <h3 className="font-display text-brand-cream text-xl tracking-widest">UNFOLDDING</h3>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                </div>
            </div>
            <div className="flex-1 overflow-hidden relative mt-16 h-full">
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
        </>
    );
};

const TileElysium = () => {
    return (
        <>
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
        </>
    );
};

const TileNova = () => {
    return (
        <>
             <div className="absolute top-6 right-6 w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#C19B5F]"></div>
             <div className="w-full h-full flex flex-col justify-end p-8">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h4 className="font-serif italic text-white/60 text-sm mb-2">Fintech</h4>
                     <h3 className="font-display text-white text-3xl tracking-widest">NOVA</h3>
                 </div>
             </div>
        </>
    );
};

const TileSymbol = () => {
    return (
        <>
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
        </>
    );
};

const TileAurum = () => {
    return (
        <>
            <div className="w-full h-full bg-brand-dark/50 flex items-center justify-center text-white/30 font-sans tracking-widest text-sm group-hover:bg-brand-dark/40 transition-colors duration-700">IMAGE: AURUM</div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
                <h4 className="text-white/70 font-serif italic text-xl mb-3 transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">Rebranding</h4>
                <h3 className="text-white font-display text-6xl tracking-[0.2em] text-center">AURUM</h3>
            </div>
        </>
    );
};

const TileServices = () => {
    return (
        <>
            {/* Background Image */}
            <div className="absolute inset-[-5%] z-0 pointer-events-none animate-levitate">
                <Image
                    src="/images/hanuman.jpeg"
                    alt="Our Services"
                    fill
                    className="object-cover object-center"
                />
                {/* Warm golden lighting aura */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.15)_0%,_transparent_60%)] mix-blend-plus-lighter z-10 transition-opacity duration-1000 group-hover:bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.25)_0%,_transparent_60%)]"></div>
                {/* Golden light rays via conic-gradient overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay z-10" style={{ backgroundImage: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,223,0,0.3) 45deg, transparent 90deg, rgba(255,223,0,0.3) 135deg, transparent 180deg)' }}></div>
            </div>

            {/* Delicate shadow beneath */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-20 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.25)_0%,_transparent_70%)] blur-[12px] z-0 pointer-events-none group-hover:scale-105 transition-transform duration-[8s]"></div>

            {/* Subtitle */}
            <div className="absolute bottom-6 left-0 w-full text-center z-10 pointer-events-none">
                <p className="font-sans text-brand-dark/50 text-xs tracking-[0.2em] uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity">Subtle divine levitation</p>
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
        </>
    );
};

const TileGrandExpedition = () => {
    return (
        <>
            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white/50 font-sans tracking-widest text-sm group-hover:bg-gray-500 transition-colors duration-1000">IMAGE: GRAND EXPEDITION</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
                <h4 className="text-brand-gold font-serif italic text-xl mb-2">Hospitality</h4>
                <span className="text-white font-display text-3xl tracking-widest leading-none block">THE GRAND EXPEDITION</span>
            </div>
        </>
    );
};

const TileProject9 = () => {
    return (
        <>
            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 font-sans tracking-widest text-sm group-hover:bg-gray-600 transition-colors duration-700">
                PROJECT 9
            </div>
            <div className="absolute bottom-8 left-8 z-10">
                <h4 className="font-serif italic text-brand-gold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Design</h4>
                <h3 className="font-display text-white text-3xl tracking-widest">PROJECT 9</h3>
            </div>
        </>
    );
};

const TilePiedPiper = () => {
    return (
        <Image
            src="/images/Pied Piper.png"
            alt="Pied Piper"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
    );
};

const ProcessDaVinci = ({ className = "" }: { className?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            if (!videoRef.current || !containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            
            // Calculate percentage from 0 to 1 based on mouse X position
            // This assumes the video shows eye movement from left to right as time progresses
            const percentage = Math.max(0, Math.min(1, x / width));
            
            if (videoRef.current.duration) {
                 // Use requestAnimationFrame for smoother scrubbing
                 cancelAnimationFrame(animationFrameId);
                 animationFrameId = requestAnimationFrame(() => {
                    if (videoRef.current) {
                        videoRef.current.currentTime = percentage * videoRef.current.duration;
                    }
                 });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }
        
        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative bg-black group overflow-hidden cursor-pointer h-full w-full ${className}`}>
             <video 
                ref={videoRef}
                src="/videos/Video_Generation_Eye_Movements.gif"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                muted
                playsInline
                preload="auto"
             />
             
             {/* Overlay Content */}
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 border border-white/5 m-4 transition-all duration-500 md:group-hover:border-brand-gold/50 z-20 pointer-events-none">
                <div className="w-14 h-14 rounded-full border border-white/20 text-brand-gold flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform bg-black/40 backdrop-blur-[2px]">
                    <ArrowUpRight className="w-6 h-6" />
                </div>
                <h3 className="font-display text-white text-2xl tracking-[0.2em] drop-shadow-lg">PROCESS</h3>
                <p className="text-white text-[10px] font-bold mt-3 uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 drop-shadow-md text-center">
                    Discover • Define • Design
                </p>
            </div>
        </div>
    );
};


// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const PortfolioGrid: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const containerRef = useRef<HTMLElement>(null);

    const toggleExpand = (id: string) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
            // Scroll with offset for fixed header
            setTimeout(() => {
                if (containerRef.current) {
                    const y = containerRef.current.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    // Helper to get component by ID
    const renderContent = (id: string) => {
        switch (id) {
            case 'inside': return <TileInside />;
            case 'elysium': return <TileElysium />;
            case 'nova': return <TileNova />;
            case 'symbol': return <TileSymbol />;
            case 'aurum': return <TileAurum />;
            case 'services': return <TileServices />;
            case 'process': return <ProcessDaVinci />;
            case 'grand-expedition': return <TileGrandExpedition />;
            case 'project-9': return <TileProject9 />;
            case 'pied-piper': return <TilePiedPiper />;
            default: return null;
        }
    };
    
    // Classes for Expanded View Container based on ID (optional customization)
    const getExpandedClasses = (id: string) => {
        switch(id) {
             case 'inside': return 'bg-brand-brown';
             case 'elysium': return 'bg-gray-200';
             case 'nova': return 'bg-brand-green';
             case 'symbol': return 'bg-white';
             case 'aurum': return 'bg-brand-dark';
             case 'services': return 'bg-[#D4B37F]';
             case 'process': return 'bg-transparent';
             case 'grand-expedition': return 'bg-gray-100';
             case 'project-9': return 'bg-gray-600';
             case 'pied-piper': return 'bg-white';
             default: return 'bg-brand-cream';
        }
    };

    return (
        <section ref={containerRef} className="w-full bg-brand-cream border-t border-brand-green/20 min-h-[50vh] transition-all duration-500">
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

            {/* EXPANDED VIEW */}
            {expandedId && (
                <div 
                    className={`w-full h-[80vh] md:h-screen relative animate-in fade-in duration-500 cursor-pointer ${getExpandedClasses(expandedId)}`}
                    onClick={() => setExpandedId(null)}
                >
                    {renderContent(expandedId)}
                    <div className="absolute top-8 right-8 z-30 bg-black/20 p-2 rounded-full text-white backdrop-blur-sm opacity-50 hover:opacity-100 transition-opacity">
                        <span className="text-xs font-sans tracking-widest uppercase">Close</span>
                    </div>
                </div>
            )}

            {/* GRID VIEW (Hidden when expanded) */}
            {!expandedId && (
                <>
                    {/* MOBILE VIEW - Single Column Stacked Design (< md) */}
                    <div className="md:hidden w-full flex flex-col">

                        {/* 1. Inside Unfoldding */}
                        <div onClick={() => toggleExpand('inside')} className="w-full h-[280px] bg-brand-brown flex flex-col relative group overflow-hidden cursor-pointer">
                            <TileInside />
                        </div>

                        {/* 2. Two Small Projects Side by Side */}
                        <div className="w-full grid grid-cols-2 gap-[1px] bg-brand-green/20">
                            {/* Project 1 - Elysium */}
                            <div onClick={() => toggleExpand('elysium')} className="h-[200px] relative group overflow-hidden bg-gray-200 cursor-pointer">
                                <TileElysium />
                            </div>

                            {/* Project 2 - Nova */}
                            <div onClick={() => toggleExpand('nova')} className="h-[200px] bg-gray-400 relative group overflow-hidden cursor-pointer hover:bg-gray-500 transition-colors">
                                <TileNova />
                            </div>
                        </div>

                        {/* 3. Symbol */}
                        <div onClick={() => toggleExpand('symbol')} className="w-full h-[200px] bg-white flex flex-col items-center justify-center p-8 relative group hover:bg-brand-cream transition-colors duration-500 cursor-pointer">
                            <TileSymbol />
                        </div>

                        {/* 4. Aurum */}
                        <div onClick={() => toggleExpand('aurum')} className="w-full h-[250px] relative bg-brand-dark overflow-hidden group cursor-pointer">
                            <TileAurum />
                        </div>

                        {/* 5. Services */}
                        <div onClick={() => toggleExpand('services')} className="w-full h-[450px] relative bg-[#D4B37F] group overflow-hidden flex flex-col justify-start items-center pt-8 pb-8 cursor-pointer border-t border-brand-green/20">
                            <TileServices />
                        </div>

                        {/* 6. Process */}
                        <div onClick={() => toggleExpand('process')} className="w-full h-[280px]">
                            <ProcessDaVinci />
                        </div>

                        {/* 7. Grand Expedition */}
                        <div onClick={() => toggleExpand('grand-expedition')} className="w-full h-[300px] relative bg-gray-100 overflow-hidden group cursor-pointer">
                            <TileGrandExpedition />
                        </div>

                        {/* 8. Project 9 */}
                        <div onClick={() => toggleExpand('project-9')} className="w-full h-[250px] relative bg-gray-600 overflow-hidden group cursor-pointer">
                            <TileProject9 />
                        </div>

                        {/* 9. Project 10 */}
                        <div onClick={() => toggleExpand('pied-piper')} className="w-full h-[250px] relative bg-white overflow-hidden group cursor-pointer">
                            <TilePiedPiper />
                        </div>

                    </div>

                    {/* DESKTOP VIEW - 4 Column Grid (≥ md) */}
                    <div className="hidden md:grid w-full grid-cols-4 auto-rows-[350px] gap-[1px] bg-brand-green/20 border-b border-brand-green/20">

                        {/* 1. Elysium (Tall Left) - Col 1, Row 1-2 */}
                        <div onClick={() => toggleExpand('elysium')} className="col-span-1 row-span-2 relative group overflow-hidden bg-gray-200 cursor-pointer">
                            <TileElysium />
                        </div>

                        {/* 2. Inside Unfoldding (Small) - Col 2, Row 1 */}
                        <div onClick={() => toggleExpand('inside')} className="col-span-1 row-span-1 bg-brand-brown flex flex-col relative group overflow-hidden cursor-pointer">
                            <TileInside />
                        </div>

                        {/* 3. Aurum (Wide) - Col 3-4, Row 1 */}
                        <div onClick={() => toggleExpand('aurum')} className="col-span-2 row-span-1 relative bg-brand-dark overflow-hidden group cursor-pointer">
                            <TileAurum />
                        </div>

                        {/* 4. Symbol (Small) - Col 2, Row 2 */}
                        <div onClick={() => toggleExpand('symbol')} className="col-span-1 row-span-1 bg-white flex flex-col items-center justify-center p-8 relative group hover:bg-brand-cream transition-colors duration-500 cursor-pointer">
                            <TileSymbol />
                        </div>

                        {/* 5. Nova (Small) - Col 3, Row 2 */}
                        <div onClick={() => toggleExpand('nova')} className="col-span-1 row-span-1 bg-brand-green relative group overflow-hidden cursor-pointer hover:bg-brand-green/90 transition-colors">
                            <TileNova />
                        </div>

                        {/* 6. Services (Tall Right) - Col 4, Row 2-3 */}
                        <div onClick={() => toggleExpand('services')} className="col-span-1 row-span-2 relative bg-[#D4B37F] group overflow-hidden flex flex-col border-l border-brand-green/10 justify-start items-center pt-10 pb-8 cursor-pointer">
                            <TileServices />
                        </div>

                        {/* 7. Process (Small) - Col 1, Row 3 */}
                        <div onClick={() => toggleExpand('process')} className="col-span-1 row-span-1 cursor-pointer">
                            <ProcessDaVinci />
                        </div>

                        {/* 8. Grand Expedition (Wide Bottom) - Col 2-3, Row 3 */}
                        <div onClick={() => toggleExpand('grand-expedition')} className="col-span-2 row-span-1 relative bg-gray-100 overflow-hidden group cursor-pointer">
                            <TileGrandExpedition />
                        </div>

                        {/* 9. Project 9 - Wide Bottom Left - Row 4, Col 1-2 */}
                        <div onClick={() => toggleExpand('project-9')} className="col-span-2 row-span-1 relative bg-gray-600 overflow-hidden group cursor-pointer">
                            <TileProject9 />
                        </div>

                        {/* 10. Project 10 - Wide Bottom Right - Row 4, Col 3-4 */}
                        <div onClick={() => toggleExpand('pied-piper')} className="col-span-2 row-span-1 relative bg-white overflow-hidden group cursor-pointer">
                            <TilePiedPiper />
                        </div>

                    </div>
                </>
            )}
        </section>
    );
};

export default PortfolioGrid;