import { useEffect, useRef, useState } from 'react';
import GlitchButton from './GlitchButton';
import { Check } from 'lucide-react';

export default function TicketingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tiers = [
    {
      name: 'THE NOMADS',
      subtitle: 'Entry Only',
      price: '₹449',
      features: ['Festival Entry only', 'Pure vibes, no strings attached'],
      color: 'neonGreen',
      tier: 1,
    },
    {
      name: 'THE SEEKERS',
      subtitle: 'General Access',
      price: 'From ₹1,149',
      priceNote: 'Phased pricing up to ₹1,699',
      features: ['Entry', '1 Free Beer', '1 Organic Color Packet'],
      color: 'neonGreen',
      tier: 2,
    },
    {
      name: 'THE ALCHEMISTS',
      subtitle: 'Gold Pass',
      price: '₹2,249',
      features: ['Priority Entry', '2 Beers', 'UNLIMITED Organic Colors'],
      color: 'hotPink',
      tier: 3,
      featured: true,
    },
    {
      name: "KING'S COURT VIP",
      subtitle: 'Table for 5',
      price: '₹44,999',
      features: [
        'Elevated Deck',
        '1 Premium Bottle',
        'Starters',
        'Dedicated Service',
        'Private Security',
        'Unlimited Colors',
      ],
      color: 'hotPink',
      tier: 4,
    },
    {
      name: "KING'S COURT VIP",
      subtitle: 'Table for 10',
      price: '₹78,999',
      features: [
        'Elevated Deck',
        '2 Premium Bottles',
        'Starters',
        'Dedicated Service',
        'Private Security',
        'Unlimited Colors',
      ],
      color: 'hotPink',
      tier: 5,
    },
  ];

  return (
    <div 
      ref={sectionRef}
      className={`py-20 px-4 bg-gradient-to-b from-matteBlack via-matteBlack/95 to-matteBlack transition-all duration-700 ${
        isVisible ? 'opacity-100 fade-in-jitter' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-industrial font-bold tracking-wider text-hotPink mb-4">
            HOLI GRAIL TICKETING PROTOCOL
          </h2>
          <div className="h-1 w-32 bg-neonGreen mx-auto"></div>
          <p className="font-mono text-sm uppercase tracking-widest text-gray-400 mt-4">
            [SELECT YOUR ACCESS LEVEL]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative tactical-border bg-matteBlack transition-all duration-300 ${
                tier.featured ? 'lg:col-span-1 lg:row-span-1 scale-105' : ''
              }`}
            >
              {/* Tier Badge */}
              <div
                className={`absolute -top-3 -right-3 w-12 h-12 ${
                  tier.color === 'neonGreen' ? 'bg-neonGreen' : 'bg-hotPink'
                } text-matteBlack font-mono font-bold flex items-center justify-center text-lg`}
              >
                {tier.tier}
              </div>

              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hotPink text-matteBlack px-4 py-1 font-mono text-xs uppercase tracking-widest">
                  POPULAR
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h3
                    className={`text-2xl font-industrial font-bold tracking-wider ${
                      tier.color === 'neonGreen' ? 'text-neonGreen' : 'text-hotPink'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p className="font-mono text-sm text-gray-400 uppercase tracking-wide">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="py-4 border-y border-gray-700">
                  <div className="text-4xl font-industrial font-bold text-white">{tier.price}</div>
                  {tier.priceNote && (
                    <p className="font-mono text-xs text-gray-500 mt-2">{tier.priceNote}</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.color === 'neonGreen' ? 'text-neonGreen' : 'text-hotPink'
                        }`}
                      />
                      <span className="font-mono text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <GlitchButton className="text-base px-10 py-4">
            <span onClick={() => window.open('https://www.swiggy.com/scenes', '_blank')}>
              BOOK NOW VIA SWIGGY SCENES
            </span>
          </GlitchButton>
        </div>
      </div>
    </div>
  );
}
