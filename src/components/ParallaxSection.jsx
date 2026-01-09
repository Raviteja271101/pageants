import React, { useState, useEffect, useRef } from 'react';
import CarouselSection from './CarouselSection';

export const ParallaxSection = () => {
    const [crownSize, setCrownSize] = useState('250px');
    const [isIOS, setIsIOS] = useState(false);
    const crownContainerRef = useRef(null);
    const crownImageRef = useRef(null);

    useEffect(() => {
        // Detect iOS devices
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        setIsIOS(iOS);

        const updateSize = () => {
            if (window.innerWidth < 768) {
                setCrownSize('250px'); // Mobile size
            } else {
                setCrownSize('400px'); // Desktop size
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // Fixed position effect for iOS - keeps crown completely stationary in viewport
    useEffect(() => {
        if (!isIOS || !crownContainerRef.current || !crownImageRef.current) return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const container = crownContainerRef.current;
                    const image = crownImageRef.current;
                    if (!container || !image) return;

                    const rect = container.getBoundingClientRect();
                    
                    // Calculate viewport center
                    const viewportCenterY = window.innerHeight / 2;
                    
                    // Calculate container center in viewport
                    const containerCenterY = rect.top + rect.height / 2;
                    
                    // Calculate offset to keep crown centered in viewport
                    // This makes the crown appear fixed in the viewport center
                    const offsetY = viewportCenterY - containerCenterY;
                    
                    // Apply transform to keep crown visually fixed in viewport center
                    image.style.transform = `translate(-50%, calc(-50% + ${offsetY}px))`;
                    
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Use scroll, touchmove for iOS support
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });

        // Initial calculation - wait a bit for layout to settle
        const initTimeout = setTimeout(() => {
            handleScroll();
        }, 100);

        // Also run immediately in case layout is already ready
        handleScroll();

        return () => {
            clearTimeout(initTimeout);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
        };
    }, [isIOS, crownSize]);

    return (
        <section className="bg-black text-white py-24 flex flex-col items-center px-6 relative overflow-hidden">
            {/* 1. Header Area */}
            <div className="text-center mb-16 z-10">
                <h2 className="text-3xl md:text-7xl obviously flex items-center justify-center bg-gradient-to-r from-[#F3BC83] via-[#A68059] via-[38%] to-[#3E4755] bg-clip-text text-transparent pb-2">
                    <span>Miss</span>
                    <img src='/images/star.png' className="w-10 md:w-[5rem] align-middle mx-2" alt="star" />
                    <span>TV India</span>
                </h2>
                <p className="text-[#BFBFBF] grotesk-roman tracking-[2px] text-xs md:text-lg mt-4 uppercase">
                    The Crown Awaits Its Queen
                </p>
            </div>

            {/* 2. The Crowns Circle (The "Periscope" Window) */}
            {/* 
          We use a div with a background image instead of an <img> tag.
          'background-attachment: fixed' ensures the crown stays at the center 
          of the screen while the circle moves over it.
          For iOS, we use JavaScript-based parallax with an img tag.
      */}
            <div
                ref={crownContainerRef}
                className="relative w-80 h-80 md:w-[550px] md:h-[550px] rounded-full mb-24 shadow-[inset_0px_0px_100px_rgba(0,0,0,0.8),0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{
                    // Layer 2: The Golden Gradient Background
                    backgroundImage: isIOS ? 'radial-gradient(circle, #FFC282 0%, #BB9166 71%, #44372B 100%)' : `url("/images/crowns.png"), radial-gradient(circle, #FFC282 0%, #BB9166 71%, #44372B 100%)`,
                    backgroundAttachment: isIOS ? 'scroll' : 'fixed, scroll',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: isIOS ? 'cover' : `${crownSize}, cover`, // Responsive size for mobile and desktop
                }}
            >
                {/* For iOS: Use absolute position with transform to keep crown visually fixed in viewport */}
                {isIOS && (
                    <img 
                        ref={crownImageRef}
                        src="/images/crowns.png" 
                        alt="Crowns" 
                        className="absolute object-contain z-10"
                        style={{
                            width: crownSize,
                            height: crownSize,
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                            willChange: 'transform',
                            opacity: 1,
                            visibility: 'visible'
                        }}
                    />
                )}
                {/* Inner ring for visual depth/shading */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none"></div>
                <div className="absolute inset-4 rounded-full  border-white/10 pointer-events-none"></div>
            </div>

            {/* 3. Description & Winged Emblem Background */}
            <div className="max-w-4xl text-center relative py-10 mb-20">
                <img
                    src="/images/wingsBg.png"
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-full md:min-w-[1200px] opacity-[0.5] md:opacity-[0.2] pointer-events-none z-0 object-contain"
                />

                <div className="relative z-10 flex flex-col items-center">
                    <p className="text-[#BFBFBF] text-[14px] md:text-lg leading-relaxed mb-24 min-w-full md:min-w-5xl grotesk-roman">
                    F-Pageants is a platform for India’s most dynamic, poised, and radiant women. <br className="hidden md:block" />
                         
You’ve prepared. You’ve visualized. Now it’s time to compete for the crown that transforms destinies. Your ambition, creativity, challenge and triumph is a treasure to us all. We honour your individuality, strength, courage, and complexities that make you who you are. 

                    </p>

                    <h4 className="text-[#A3845F] text-[12px] md:text-xl tracking-[0.1em] uppercase grotesk-medium mb-4">
                        Why F Pageants by FashionTV
                    </h4>

                    <h1 className="max-w-xs md:max-w-7xl mx-auto text-2xl md:text-6xl font-black uppercase obviously leading-tight bg-gradient-to-r from-[#F3BC83] via-[#A68059] via-[38%] to-[#3E4755] bg-clip-text text-transparent">
                        Cultivate Confidence <br className='md:block hidden' /> & <br className='block md:hidden' /> Global Influence
                    </h1>

                    <div className="my-8">
                        <img className='w-full max-w-[8rem] md:max-w-4xl mx-auto opacity-[0.6]' src="/images/bigStar.png" alt="" />
                    </div>

                    <p className="text-[#C1C1C1] text-[14px] md:text-base md:max-w-5xl w-full max-w-xl mx-auto tracking-[1px] grotesk-roman">
                        FashionTV is a space shaped by elegance, ambition, and global perspective, where everyone is encouraged
                        to rise, evolve, and positively influence the world around them with authenticity and purpose. We foster an
                        environment where talented aspirants can share their journey, embrace their individuality, and grow into
                        stronger, more confident versions of themselves.
                    </p>
                </div>
            </div>


            <CarouselSection />
        </section>
    );
};