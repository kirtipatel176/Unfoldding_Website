'use client';

import React, { useEffect, useRef, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 192;
const SCROLL_DISTANCE_PX = 2400;
const EASE = 0.12;

function buildFramePaths(): string[] {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return `/images/hero_animation/ezgif-frame-${num}.jpg`;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMobileRef = useRef<HTMLCanvasElement>(null);
  const canvasDesktopRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const displayFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const drawFrame = useCallback((index: number) => {
    const img = imagesRef.current[Math.round(index)];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvases = [canvasMobileRef.current, canvasDesktopRef.current];
    canvases.forEach(canvas => {
      if (!canvas) return;
      if (canvas.offsetParent === null) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }

      // Clear canvas for transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // Make white and light gray (checkerboard) background transparent
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        // Solid white or near-white background
        const isWhite = r > 240 && g > 240 && b > 240;

        // Light gray checkerboard pattern (color roughly rgb(204,204,204) to rgb(230,230,230))
        // Checkerboard is pure gray, max-min is very close to 0
        const isGrayChecker = r > 180 && g > 180 && b > 180 && (max - min) < 10;

        if (isWhite || isGrayChecker) {
          data[i + 3] = 0; // Alpha
        }
      }
      ctx.putImageData(imageData, 0, 0);
    });
  }, []);

  const animate = useCallback(() => {
    rafRef.current = requestAnimationFrame(animate);
    displayFrameRef.current += (currentFrameRef.current - displayFrameRef.current) * EASE;
    drawFrame(Math.min(Math.round(displayFrameRef.current), TOTAL_FRAMES - 1));
  }, [drawFrame]);

  const onScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrolled = -container.getBoundingClientRect().top;
    const progress = Math.min(Math.max(scrolled / SCROLL_DISTANCE_PX, 0), 1);
    currentFrameRef.current = Math.round(progress * (TOTAL_FRAMES - 1));
  }, []);

  useEffect(() => {
    const paths = buildFramePaths();
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;
    let firstFrameLoaded = false;

    function loadImage(i: number) {
      const img = new Image();
      img.src = paths[i];
      images[i] = img;
      img.onload = () => {
        if (!firstFrameLoaded && i === 0) {
          firstFrameLoaded = true;
          drawFrame(0);
        }
      };
    }

    loadImage(0);
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      loadImage(i);
    }
  }, [drawFrame]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [onScroll, animate]);

  return (
    <section
      ref={containerRef}
      style={{ height: `calc(90vh + ${SCROLL_DISTANCE_PX}px)` }}
      className="relative w-full bg-brand-cream"
    >
      <div className="sticky top-0 w-full min-h-[100vh] pt-24 pb-12 overflow-hidden flex flex-col justify-center">

        {/* =========================================
            MOBILE & TABLET LAYOUT (< lg)
            ========================================= */}
        <div className="lg:hidden flex flex-col items-center justify-center w-full px-4 overflow-hidden min-h-[100svh]">

          {/* Top Text Group */}
          <div className="flex flex-col items-center mt-12 mb-2 md:mt-16 text-center z-10 w-full">
            <div className="flex justify-center items-center w-full">
              <h2 className="font-serif italic text-5xl md:text-7xl text-[#B8956A]">
                <span className="font-burgues text-7xl md:text-8xl">H</span>ERE
              </h2>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-[#8B6F47] tracking-wider uppercase mt-4">
              WHISPERS IN
            </h1>
          </div>

          <div className="flex flex-col items-center mb-6 text-center z-10 w-full">
            <h1 className="font-display text-4xl md:text-6xl text-[#8B6F47] tracking-wider uppercase">
              MEANINGFUL
            </h1>
          </div>

          {/* Main Huge Image Canvas */}
          <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center z-[5] -my-6 md:-my-10 pointer-events-none transform scale-110 md:scale-125">
            <canvas
              ref={canvasMobileRef}
              className="object-contain w-full h-full mix-blend-darken"
              style={{ filter: 'brightness(1.05) contrast(1.05)', background: 'transparent' }}
              aria-label="Hero scroll animation"
            />
          </div>

          {/* Middle Text: CREATIVE STRATEGIES */}
          <div className="flex flex-col items-center mb-8 gap-2 text-center z-10 mt-8 w-full">
            <h1 className="font-serif text-4xl md:text-6xl text-[#B8956A] uppercase">
              CREATIVE
            </h1>
            <h1 className="font-serif italic text-4xl md:text-6xl text-[#B8956A]">
              STRATEGIES
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-[320px] md:max-w-[500px] text-center mb-10 z-10">
            <p className="font-sans text-gray-600 text-sm md:text-lg leading-relaxed">
              An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and <span className="italic">unfoldding</span> with purpose.
            </p>
          </div>

          {/* Bottom Text: DESIGN STORIES */}
          <div className="flex flex-col items-center space-y-2 mb-16 text-center z-10 w-full">
            <div className="flex flex-row justify-center items-baseline">
              <h1 className="font-serif text-5xl md:text-7xl text-[#8B6F47] uppercase">
                <span className="font-burgues text-7xl md:text-8xl relative top-2 mr-1">D</span>ESIGN
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center mt-2 w-full">
              <h1 className="font-serif italic text-5xl md:text-6xl text-[#B8956A] leading-none mb-0 flex items-center h-full">
                STORIES
              </h1>
            </div>
          </div>

        </div>


        {/* =========================================
            DESKTOP LAYOUT (>= lg)
            (Original Design)
            ========================================= */}
        <div className="hidden lg:flex relative flex-col items-center justify-center h-[100vh]">

          {/* Decorative Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-brand-green"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-brand-green"></div>
          </div>

          <div className="relative z-10 max-w-[1800px] w-full px-8 xl:px-16 mx-auto text-center h-full flex flex-col justify-center">

            {/* Top Text Cluster (Desktop Flex Layout Array) */}
            <div className="relative w-full h-[80vh] flex flex-row items-center justify-between">

              {/* Left Column Text */}
              <div className="flex flex-col justify-center h-full w-[25%] lg:w-[30%] z-10 text-left relative gap-y-12 xl:gap-y-24">
                {/* HERE */}
                <div className="transform translate-x-[130px] -translate-y-8 xl:-translate-y-16">
                  <h2 className="font-serif italic text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#B8956A]">
                    <span className="font-burgues text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">H</span>ERE
                  </h2>
                </div>

                {/* WHISPERS IN MEANINGFUL */}
                <div className="transform translate-x-[120px] translate-y-12 xl:translate-y-24">
                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#8B6F47] leading-tight tracking-tight uppercase">
                    WHISPERS IN
                    <br />
                    MEANINGFUL
                  </h1>
                </div>
              </div>

              {/* Center Image Canvas (Grown Larger) */}
              <div className="relative z-[5] flex-1 flex items-center justify-center h-full w-[50%] lg:w-[40%]">
                <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[750px] 2xl:h-[750px] relative pointer-events-none transform scale-110 xl:scale-125">
                  <canvas
                    ref={canvasDesktopRef}
                    className="mix-blend-darken object-contain w-full h-full"
                    style={{ filter: 'brightness(1.05) contrast(1.05)', background: 'transparent' }}
                    aria-label="Hero scroll animation desktop"
                  />
                </div>
              </div>

              {/* Right Column Text */}
              <div className="flex flex-col justify-between h-full w-[25%] lg:w-[30%] py-16 xl:py-24 z-10 text-right relative">
                {/* CREATIVE STRATEGIES */}
                <div className="mt-8 flex flex-col items-end w-full transform -translate-x-[250px] -translate-y-[130px]">
                  <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#B8956A]  -translate-x-[250px] leading-tight uppercase relative left-4 flex justify-end items-baseline w-full">
                    CREATIVE
                  </h1>
                  <h1 className="font-serif italic text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#B8956A] leading-tight mt-1 flex justify-end items-baseline w-full">
                    <span className="font-burgues not-italic text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] relative lg:top-4 mr-1">S</span>TRATEGIES
                  </h1>
                </div>

                <div className="flex flex-col items-end gap-12 xl:gap-20 mb-[2vh]">
                  {/* Subtitle */}
                  <div className="max-w-[200px] lg:max-w-[250px] xl:max-w-[320px] text-right transform -translate-x-[170px] -translate-y-[120px]">
                    <p className="font-sans text-[#B8956A] text-xs lg:text-base xl:text-lg leading-relaxed">
                      An independent brand and design consultancy turning complexity into clarity — crafting brands that think deeply, feel human, and <span className="italic">unfoldding</span> with purpose.
                    </p>
                  </div>

                  {/* DESIGN STORIES */}
                  <div className="flex flex-col items-end w-full transform -translate-x-[120px] -translate-y-[140px]">
                    <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#8B6F47] leading-tight uppercase flex justify-end items-baseline w-full">
                      <span className="font-burgues text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl relative lg:top-4 mr-1">D</span>ESIGN
                    </h1>
                    <h1 className="font-serif italic text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#B8956A] leading-tight mt-2 min-w-max pr-0 lg:pr-8 xl:pr-12">
                      STORIES
                    </h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;