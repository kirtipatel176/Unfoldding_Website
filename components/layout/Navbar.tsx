'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-green/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <button className="p-2 hover:opacity-70 transition-opacity">
          <Menu className="w-6 h-6 text-brand-green" />
        </button>

        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="UNFOLDDING Logo"
            className="h-30 w-auto"
          />
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