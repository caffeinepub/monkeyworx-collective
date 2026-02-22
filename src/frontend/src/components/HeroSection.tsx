import SwiggyBookingCTA from './SwiggyBookingCTA';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-video-placeholder.dim_1920x1080.png"
          alt="Warehouse Rave"
          className="w-full h-full object-cover animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matteBlack/60 via-matteBlack/40 to-matteBlack"></div>
        <div className="absolute inset-0 bg-neonGreen/5 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-industrial font-bold tracking-wider glitch-text text-neonGreen drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">
            MONKEYWORX
          </h1>
          <h2 className="text-3xl md:text-5xl font-industrial font-bold tracking-wider text-hotPink drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]">
            COLLECTIVE & CO.
          </h2>
          <p className="text-xl md:text-2xl font-mono uppercase tracking-widest text-neonGreen drop-shadow-[0_0_8px_rgba(57,255,20,0.6)] mt-8">
            Industrial Cyberpunk / High-end Underground
          </p>
          <div className="mt-12">
            <SwiggyBookingCTA />
          </div>
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none scanlines"></div>
    </div>
  );
}
