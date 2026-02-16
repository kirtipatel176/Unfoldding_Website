import React, { useState } from 'react';
import { Volume2, VolumeX, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-green/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <button className="p-2 hover:opacity-70 transition-opacity">
           <Menu className="w-6 h-6 text-brand-green" />
        </button>

        <div className="flex flex-col items-center">
          {/* Logo mark simulation */}
          <div className="w-8 h-8 rounded-full border border-brand-green flex items-center justify-center mb-1">
            <div className="w-6 h-6 border border-brand-gold rounded-full animate-spin-slow"></div>
          </div>
          <span className="font-display font-bold text-lg tracking-[0.2em] text-brand-green leading-none">
            UNFOLDDING
          </span>
        </div>

        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 hover:opacity-70 transition-opacity text-brand-green"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;