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
            {/* Background Image — slow divine float */}
            <div className="absolute inset-[-5%] z-0 pointer-events-none animate-levitate">
                <Image
                    src="/images/hanuman.jpeg"
                    alt="Our Services"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                />
                {/* Warm golden aura — pulses in sync with the float */}
                <div
                    className="absolute inset-0 mix-blend-plus-lighter z-10 animate-divine-glow"
                    style={{ background: 'radial-gradient(circle at 50% 40%, rgba(255,210,80,0.35) 0%, rgba(255,180,0,0.12) 45%, transparent 70%)' }}
                />
                {/* Conic light-ray halo */}
                <div
                    className="absolute inset-0 mix-blend-overlay z-10 opacity-15"
                    style={{ backgroundImage: 'conic-gradient(from 180deg at 50% 40%, transparent 0deg, rgba(255,223,0,0.4) 40deg, transparent 90deg, rgba(255,223,0,0.4) 130deg, transparent 180deg)' }}
                />
            </div>

            {/* Breathing shadow beneath — shrinks as image rises */}
            <div
                className="absolute bottom-10 left-1/2 w-[55%] h-10 blur-[14px] z-0 pointer-events-none animate-shadow-breathe"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.30) 0%, transparent 70%)' }}
            />

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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
    );
};

const ProcessDaVinci = ({ className = "" }: { className?: string }) => {
    const leftPupilRef = useRef<HTMLDivElement>(null);
    const rightPupilRef = useRef<HTMLDivElement>(null);
    const [imgRatio, setImgRatio] = useState<number>(0.75); // Fallback ratio (~3:4)

    useEffect(() => {
        const moveEyes = (clientX: number, clientY: number) => {
            const pupils = [leftPupilRef.current, rightPupilRef.current];
            pupils.forEach((pupil) => {
                if (!pupil) return;
                const parent = pupil.parentElement;
                if (!parent) return;
                
                const rect = parent.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;

                let dx = clientX - eyeCenterX;
                let dy = clientY - eyeCenterY;

                const maxX = rect.width / 4;
                const maxY = rect.height / 4;

                dx = Math.max(Math.min(dx / 15, maxX), -maxX);
                dy = Math.max(Math.min(dy / 15, maxY), -maxY);

                pupil.style.transform = `translate(${dx}px, ${dy}px)`;
            });
        };

        const handleMouseMove = (e: MouseEvent) => moveEyes(e.clientX, e.clientY);
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches && e.touches.length > 0) {
                moveEyes(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("touchmove", handleTouchMove, { passive: true });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <div 
            className={`relative bg-black overflow-hidden cursor-pointer h-full w-full ${className}`} 
            style={{ containerType: 'size' }} // Enable cqw and cqh for the child
        >
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                style={{
                    width: `max(100cqw, calc(100cqh * ${imgRatio}))`,
                    aspectRatio: `${imgRatio}`,
                    containerType: 'inline-size' // Enable cqi for the eyes
                }}
            >
                <img
                    src="/images/Davinci.jpeg"
                    alt="Process"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-auto"
                    onLoad={(e) => {
                        const { naturalWidth, naturalHeight } = e.currentTarget;
                        if (naturalHeight > 0) setImgRatio(naturalWidth / naturalHeight);
                    }}
                />

                {/* Left Eye */}
                <div 
                    className="absolute overflow-hidden w-[5.4cqi] h-[2.2cqi] bg-[#a3998b]" 
                    style={{ 
                        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.7), inset 0 -1px 2px rgba(0, 0, 0, 0.4), 0 0 2px rgba(0, 0, 0, 0.3)',
                        top: '27.4%', left: '53.44%', transform: 'rotate(-1deg)'
                    }}
                >
                    <div 
                        ref={leftPupilRef} 
                        className="absolute rounded-full transition-transform duration-100 ease-out w-[3.2cqi] h-[3.2cqi]"
                        style={{
                            background: 'radial-gradient(circle, #050505 25%, #2a201a 45%, #18120d 70%)',
                            top: '50%', left: '50%', marginTop: '-1.6cqi', marginLeft: '-1.6cqi',
                            boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.8)'
                        }}
                    >
                        <div className="absolute rounded-full w-[0.6cqi] h-[0.6cqi] bg-white/85" style={{ top: '20%', left: '25%', boxShadow: '0 0 2px rgba(255, 255, 255, 0.6)' }}></div>
                    </div>
                </div>

                {/* Right Eye */}
                <div 
                    className="absolute overflow-hidden w-[5.4cqi] h-[2.2cqi] bg-[#a3998b]" 
                    style={{ 
                        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.7), inset 0 -1px 2px rgba(0, 0, 0, 0.4), 0 0 2px rgba(0, 0, 0, 0.3)',
                        top: '27.2%', right: '29%', transform: 'rotate(2deg) scale(0.92)'
                    }}
                >
                    <div 
                        ref={rightPupilRef} 
                        className="absolute rounded-full transition-transform duration-100 ease-out w-[3.2cqi] h-[3.2cqi]"
                        style={{
                            background: 'radial-gradient(circle, #050505 25%, #2a201a 45%, #18120d 70%)',
                            top: '50%', left: '50%', marginTop: '-1.6cqi', marginLeft: '-1.6cqi',
                            boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.8)'
                        }}
                    >
                        <div className="absolute rounded-full w-[0.6cqi] h-[0.6cqi] bg-white/85" style={{ top: '20%', left: '25%', boxShadow: '0 0 2px rgba(255, 255, 255, 0.6)' }}></div>
                    </div>
                </div>
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
        switch (id) {
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
          30%       { transform: translateY(-6px) scale(1.008); }
          60%       { transform: translateY(-14px) scale(1.015); }
          80%       { transform: translateY(-8px) scale(1.01); }
        }
        .animate-levitate {
          animation: levitate 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          transform-origin: center bottom;
          will-change: transform;
        }
        @keyframes divine-glow {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.28; }
        }
        .animate-divine-glow {
          animation: divine-glow 12s ease-in-out infinite;
        }
        @keyframes shadow-breathe {
          0%, 100% { transform: translateX(-50%) scaleX(1);   opacity: 0.18; }
          50%       { transform: translateX(-50%) scaleX(0.82); opacity: 0.08; }
        }
        .animate-shadow-breathe {
          animation: shadow-breathe 12s ease-in-out infinite;
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