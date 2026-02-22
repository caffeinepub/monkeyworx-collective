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
        <div className="space-y-8 max-w-5xl">
          {/* Hero Headline with Chromatic Aberration */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas font-bold tracking-wider chromatic-aberration text-white mb-12">
            THE RARE HOLI GRAIL EVENT
          </h1>
          
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
