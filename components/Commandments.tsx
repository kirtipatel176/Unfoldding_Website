import React from 'react';
import { Commandment } from '../types';

const COMMANDMENTS_DATA: Commandment[] = [
  { id: 1, title: "THOU SHALT BEGIN WITH TRUTH", description: "For every brand story must rise from something real — a belief, not a briefing." },
  { id: 2, title: "THOU SHALT NOT WORSHIP TRENDS", description: "They pass like seasons. Purpose endures." },
  { id: 3, title: "THOU SHALT SEE CONSUMERS NOT AS DATA, BUT AS PEOPLE", description: "With fears, dreams, and infinite nuance — the true clay of every idea." },
  { id: 4, title: "THOU SHALT BUILD MEANING BEFORE MESSAGES", description: "For what is a campaign if not a vessel without soul?" },
  { id: 5, title: "THOU SHALT HONOR CONTEXT AS MUCH AS CONCEPT", description: "For even the brightest story dims in the wrong light." },
  { id: 6, title: "THOU SHALT DESIGN NOT FOR THE EYE ALONE, BUT FOR THE MIND AND THE HEART", description: "Aesthetics seduce. Empathy stays." },
  { id: 7, title: "THOU SHALT LISTEN BEFORE THOU SPEAKEST", description: "Every great story begins with silence — and an insight waiting to be heard." },
  { id: 8, title: "THOU SHALT WAGE NO WAR FOR ATTENTION, BUT INVITE BELONGING", description: "The truest engagement is not captured; it's chosen." },
  { id: 9, title: "THOU SHALT MEASURE THY IMPACT NOT BY LIKES, BUT BY CHANGE", description: "For numbers count reach; stories count resonance." },
  { id: 10, title: "THOU SHALT LET THE STORY UNFOLD — PATIENTLY, PURPOSEFULLY, HUMANLY", description: "For meaning, like design, reveals itself only to those who wait and listen." },
];

const Commandments: React.FC = () => {
  return (
    <section className="w-full relative flex flex-col md:flex-row min-h-screen bg-white overflow-hidden">
        
        {/* Left Column: Graphics & Title */}
        <div className="w-full md:w-[40%] bg-white relative min-h-[50vh] md:min-h-screen overflow-hidden">
            
            {/* Huge '10' - Positioning based on PDF visual */}
            <div className="absolute top-[10%] left-[-2%] md:left-0 z-10 leading-none select-none">
                <span className="font-serif text-[200px] md:text-[450px] text-[#A68A56] leading-none block transform -translate-x-8 md:-translate-x-16">
                  10
                </span>
            </div>

            {/* Vertical 'COMMANDMENTS' Text */}
            <div className="absolute top-[5%] left-[35%] md:left-[30%] h-[90%] flex items-center z-10 select-none pointer-events-none">
                 <h2 
                   className="font-display text-[80px] md:text-[140px] text-transparent leading-none tracking-tight opacity-90"
                   style={{
                     writingMode: 'vertical-rl',
                     textOrientation: 'mixed',
                     WebkitTextStroke: '2px #0B4634',
                   }}
                 >
                   COMMANDMENTS
                 </h2>
            </div>
            
            {/* Figure Image - Bridging the gap */}
            
        </div>

        {/* Right Column: Content List */}
        <div className="w-full md:w-[60%] bg-[#0B4634] text-white px-6 md:px-16 py-12 md:py-20 relative flex flex-col justify-center">
            
            {/* Red Accent Line Top Right */}
            <div className="absolute top-0 right-0 md:right-12 w-24 h-2 bg-red-600"></div>

            <div className="space-y-6 md:space-y-8 max-w-3xl relative z-30">
               {COMMANDMENTS_DATA.map((cmd) => (
                   <div key={cmd.id} className="flex flex-col group">
                       <h3 className="font-sans font-extrabold text-base md:text-lg uppercase mb-1 tracking-wide text-white group-hover:text-[#A68A56] transition-colors">
                          {cmd.title}
                       </h3>
                       <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed font-normal">
                          {cmd.description}
                       </p>
                   </div>
               ))}
            </div>
        </div>

    </section>
  );
};

export default Commandments;