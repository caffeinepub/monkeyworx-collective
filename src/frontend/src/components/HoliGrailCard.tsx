import { useEffect, useRef, useState } from 'react';
import SwiggyBookingCTA from './SwiggyBookingCTA';

export default function HoliGrailCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`container mx-auto max-w-4xl transition-all duration-700 ${
        isVisible ? 'opacity-100 fade-in-jitter' : 'opacity-0'
      }`}
    >
      <div className="relative tactical-border group">
        {/* Tactical Dossier Border Frame */}
        <div className="relative bg-matteBlack border-2 border-neonGreen p-8 md:p-12 tactical-glow">
          {/* Poster Image with Glitch Overlay */}
          <div className="relative overflow-hidden mb-8">
            <img
              src="/assets/Copy of Copy of Grail (1080 x 1440 px)-1.png"
              alt="Holi Grail Event"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 horizontal-glitch-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-matteBlack/80 via-transparent to-transparent"></div>
          </div>

          {/* Event Details */}
          <div className="space-y-6 text-center">
            <p className="text-base md:text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Immerse yourself in a high-energy fusion of industrial beats, neon colors, and underground vibes. 
              This isn't your typical Holi celebration—it's a full-scale sensory assault.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <SwiggyBookingCTA />
            </div>
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none scanlines opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
