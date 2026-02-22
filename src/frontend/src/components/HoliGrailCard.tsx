import SwiggyBookingCTA from './SwiggyBookingCTA';

export default function HoliGrailCard() {
  return (
    <div className="container mx-auto max-w-5xl">
      <div className="relative cyberpunk-card group">
        {/* Neon Glow Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neonGreen via-hotPink to-neonGreen opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-neon-pulse"></div>
        
        {/* Card Content */}
        <div className="relative bg-matteBlack border-2 border-neonGreen p-8 md:p-12">
          {/* Poster Image */}
          <div className="relative overflow-hidden mb-8">
            <img
              src="/assets/generated/holi-grail-card.png"
              alt="Holi Grail Event"
              className="w-full h-auto glitch-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matteBlack/80 via-transparent to-transparent"></div>
          </div>

          {/* Event Details */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-6xl font-industrial font-bold tracking-wider text-neonGreen glitch-text">
              HOLI GRAIL
            </h2>
            <p className="text-xl md:text-2xl font-mono uppercase tracking-widest text-hotPink">
              The Ultimate Cyberpunk Holi Experience
            </p>
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
