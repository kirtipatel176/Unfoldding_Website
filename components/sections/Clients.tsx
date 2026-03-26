'use client';

import React from 'react';
import Image from 'next/image';

// Responsive base dimensions for images (Next.js Image requires numbers)
const BASE_WIDTH = 160;
const BASE_HEIGHT = 56;

const clients = [
  {
    name: 'Axis Bank',
    src: '/images/Axis_Bank_logo.svg',
  },
  {
    name: 'Tata Motors',
    src: '/images/tata-motors-connecting-aspirations-tata-motors-connecting-aspirations.png',
    transparent: true,
    // PNG has generous built-in whitespace; scale up so it matches peer logos visually
    scale: 1.8,
  },
  {
    name: 'Borzo',
    src: '/images/borzo.svg',
  },
  {
    name: 'Pan Parag',
    src: '/images/panParag.png',
    scale: 1.5,
  },
  {
    name: 'Geeta Press',
    src: '/images/GeetaPress.jpeg',
    transparent: true,
    scale: 1.5,
  },
];

// Duplicate items to ensure enough content for a seamless loop even on tall ultra-wide monitors
const marqueeItems = [...clients, ...clients, ...clients, ...clients];

const Clients: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
      aria-label="Our Clients"
    >
      {/* Background image */}
      <Image
        src="/images/client.png"
        alt="Our Clients Background"
        width={1596}
        height={894}
        className="w-full h-auto object-contain"
        priority
        quality={100}
      />

      {/* Overlay: centered gold circle with vertical scrolling logos */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Vertical scroll area — no drawn circle */}
        <div
          style={{
            width: '30%',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', // pin to top so translation loop is mathematically exact
            paddingTop: '1rem', // place user's requested 1rem padding outside the scroll container
            // Fade top/bottom edges
            maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
          }}
        >
          {/* Vertical scrolling track */}
          <div
            className="flex flex-col items-center gap-4 pb-4 md:gap-[2.4rem] md:pb-[2.4rem]"
            style={{
              // responsive gap and matching paddingBottom ensures one Set's total height is mathematically perfect
              animation: 'marquee-vertical 18s linear infinite',
            }}
          >
            {marqueeItems.map((client, index) => (
              // Wrapper enforces equal size for every logo, scaling down gracefully on smaller screens
              <div
                key={`${client.name}-${index}`}
                className="w-16 h-6 sm:w-20 sm:h-7 md:w-28 md:h-10 lg:w-40 lg:h-14 flex items-center justify-center shrink-0"
                style={{
                  // Apply blend mode on wrapper, NOT on Image, to avoid
                  // filter stacking context that breaks mix-blend-mode
                  ...(client.transparent ? { mixBlendMode: 'darken' as const } : {}),
                }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={BASE_WIDTH}
                  height={BASE_HEIGHT}
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                  style={{
                    // Scale individual logos that have baked-in whitespace
                    ...('scale' in client && client.scale ? { transform: `scale(${client.scale})` } : {}),
                    // Only add shadow to non-transparent logos
                    ...(client.transparent
                      ? {}
                      : { filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.15))' }),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-vertical {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-25%); } /* Translates exactly 1 Set out of the 4 */
        }
      `}</style>
    </section>
  );
};

export default Clients;