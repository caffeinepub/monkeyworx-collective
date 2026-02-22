import GlitchButton from './GlitchButton';
import { Phone, Briefcase, Music, Heart, Users, Sparkles } from 'lucide-react';

export default function CorporateEventsSection() {
  const services = [
    { name: 'Concerts', icon: Music },
    { name: 'Weddings', icon: Heart },
    { name: 'Corporate Parties', icon: Briefcase },
    { name: 'Private Events', icon: Users },
  ];

  return (
    <div className="py-20 px-4 bg-matteBlack">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-industrial font-bold tracking-wider text-neonGreen mb-6 glitch-text">
            PROFESSIONAL GRADE CHAOS
          </h2>
          <div className="h-1 w-32 bg-hotPink mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border-2 border-neonGreen/30 bg-matteBlack hover:border-neonGreen transition-all duration-300 p-8 text-center group"
              >
                <Icon
                  size={48}
                  className="mx-auto mb-4 text-neonGreen group-hover:text-hotPink transition-colors"
                />
                <h3 className="font-industrial text-xl tracking-wider text-white">{service.name}</h3>
              </div>
            );
          })}
        </div>

        {/* Corporate Perks */}
        <div className="border-2 border-hotPink/30 bg-matteBlack p-8 md:p-12 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-hotPink" size={32} />
            <h3 className="text-3xl font-industrial font-bold tracking-wider text-hotPink">
              CORPORATE PERKS
            </h3>
            <Sparkles className="text-hotPink" size={32} />
          </div>
          <p className="font-mono text-lg text-center text-gray-300 uppercase tracking-wide">
            Bulk discounts available for teams & companies
          </p>
        </div>

        {/* Contact CTA */}
        <div className="border-2 border-neonGreen bg-neonGreen/5 p-8 md:p-12 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-gray-400 mb-4">
            For Hosting & Corporate Discounts
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:+916363353339"
              className="flex items-center gap-3 text-2xl md:text-3xl font-mono font-bold text-neonGreen hover:text-hotPink transition-colors"
            >
              <Phone size={32} />
              +91 63633 53339
            </a>
          </div>
          <div className="mt-8">
            <GlitchButton
              onClick={() => (window.location.href = 'tel:+916363353339')}
              className="text-base px-8 py-3"
            >
              CALL NOW
            </GlitchButton>
          </div>
        </div>
      </div>
    </div>
  );
}
