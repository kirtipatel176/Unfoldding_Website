'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Music ON by default
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to play on mount (autoplay)
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          // Expected behavior: Browsers block unmuted autoplay until user interacts.
          // Wait silently instead of polluting the console with warnings.
          setIsPlaying(false);
        }
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-green/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <button className="p-2 hover:opacity-70 transition-opacity">
          <Menu className="w-6 h-6 text-brand-green" />
        </button>

        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="UNFOLDDING Logo"
            width={120}
            height={120}
            className="h-30 w-auto"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>

        <button
          onClick={togglePlay}
          className="p-2 hover:opacity-70 transition-opacity text-brand-green"
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
        >
          {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </button>
        <audio
          ref={audioRef}
          src="/music/universfield-calm-flute-for-documentaries-351909.mp3"
          loop
        />
      </div>
    </header>
  );
};

export default Navbar;