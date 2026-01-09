import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CarouselSection = () => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState("right");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  const carouselX = useMotionValue(0);
  const smoothCarouselX = useSpring(carouselX, { stiffness: 60, damping: 35 });
  
  const speedMultiplier = 0.8;

  const items = [
    { id: "01", title: "International Credibility", desc: "Backed by Fashion TV's 28 years of global authority in fashion & lifestyle." },
    { id: "02", title: "Training & Grooming", desc: "Work with top industry mentors, choreographers, fitness experts, & stylists." },
    { id: "03", title: "Launchpad For Career", desc: "Walk global runways and be featured in major campaigns & entertainment media." },
    { id: "04", title: "Global Exposure", desc: "Appears across Fashion TV’s worldwide network broadcast in 196 countries." },
    { id: "05", title: "Luxury, Prestige & Exclusivity", desc: "Experience the highest standard of production and pageantry India has seen." },
    { id: "06", title: "Build an international network", desc: "Establish long-lasting and fruitful relations with industry stalwarts." },
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current || isMobile) return;

    // 1. Update Cursor position using CLIENT coordinates (Viewport)
    // This fixes the cursor not reaching the right end
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    // 2. Calculate RELATIVE position for carousel logic
    const rect = containerRef.current.getBoundingClientRect();
    const xRel = e.clientX - rect.left;

    const center = rect.width / 2;
    setDirection(xRel > center ? "right" : "left");

    const itemWidth = rect.width / 3;
    const totalItemsWidth = items.length * itemWidth;
    const scrollableWidth = totalItemsWidth - rect.width;
    
    const normalizedX = Math.max(0, Math.min(1, xRel / rect.width));
    const scaledInput = normalizedX / speedMultiplier;
    const clampedInput = Math.max(0, Math.min(1, scaledInput));
    const scrollPosition = clampedInput * scrollableWidth;
    carouselX.set(-scrollPosition);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="bg-black py-12 md:py-32 overflow-hidden relative md:cursor-none"
    >
      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-[#E6C188]/40 bg-black/20 backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
      >
        <motion.div 
          className="relative flex items-center w-10"
          animate={{ rotate: direction === "right" ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="h-[1px] w-full bg-[#E6C188]" />
          <div className="absolute right-0 w-2 h-2 border-t border-r border-[#E6C188] rotate-45 translate-x-0.5" />
        </motion.div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative px-6 md:px-0">
        <div className="relative py-10 md:py-20 border-y border-transparent [border-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(163,132,95,0.2)_20%,rgba(163,132,95,1)_50%,rgba(163,132,95,0.2)_80%,rgba(0,0,0,0)_100%)1]">
          
          <div className="hidden md:block absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="relative">
            <motion.div 
              className="flex flex-col md:flex-row gap-12 md:gap-0"
              style={{ x: isMobile ? 0 : smoothCarouselX }}
            >
              {items.map((item, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-1/3 flex-shrink-0 flex items-start gap-4 md:px-10 select-none"
                >
                  <span className="text-5xl md:text-[5rem] leading-[1em] grotesk-roman text-[#E6C188] pb-1 opacity-80">
                    {item.id}
                  </span>

                  <div className="flex flex-col w-full">
                    <h2 className="text-[#E6C188] bg-gradient-to-r bg-clip-text from-[#E6C188] to-[#C29D65] text-transparent md:text-[2.2rem] text-2xl uppercase leading-[1.1em] grotesk-medium">
                      {item.title}
                    </h2>
                    <p className="text-[#BFBFBF] text-[14px] leading-relaxed md:text-lg tracking-wider mt-3 grotesk-roman opacity-70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;