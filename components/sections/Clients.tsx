'use client';

import React from 'react';
import Image from 'next/image';

// All logos share the same display dimensions for visual consistency
const LOGO_WIDTH = 160;
const LOGO_HEIGHT = 56;

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

// Duplicate for seamless infinite vertical loop
const marqueeItems = [...clients, ...clients];

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
            alignItems: 'center',
            justifyContent: 'center',
            // Fade top/bottom edges
            maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
          }}
        >
          {/* Vertical scrolling track */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2.4rem',
              animation: 'marquee-vertical 18s linear infinite',
              paddingTop: '1rem',
            }}
          >
            {marqueeItems.map((client, index) => (
              // Wrapper enforces equal size for every logo
              <div
                key={`${client.name}-${index}`}
                style={{
                  width: `${LOGO_WIDTH}px`,
                  height: `${LOGO_HEIGHT}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  // Apply blend mode on wrapper, NOT on Image, to avoid
                  // filter stacking context that breaks mix-blend-mode
                  ...(client.transparent ? { mixBlendMode: 'darken' as const } : {}),
                }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={LOGO_WIDTH}
                  height={LOGO_HEIGHT}
                  style={{
                    maxHeight: `${LOGO_HEIGHT}px`,
                    maxWidth: `${LOGO_WIDTH}px`,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
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
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Clients;