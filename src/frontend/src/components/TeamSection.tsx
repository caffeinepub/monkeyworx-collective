import { useEffect, useRef, useState } from 'react';

export default function TeamSection() {
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

  const team = [
    {
      name: 'VIKRAM',
      role: 'Founder | Chief Visionary',
      image: '/assets/generated/vikram-portrait.dim_400x400.png',
      id: 'V-001',
    },
    {
      name: 'SUNNY',
      role: 'Head of Vigilance & Hospitality',
      image: '/assets/generated/sunny-portrait.dim_400x400.png',
      id: 'S-002',
    },
    {
      name: 'DEV',
      role: 'Tactical Lead | Operations',
      image: '/assets/generated/dev-portrait.dim_400x400.png',
      id: 'D-003',
    },
    {
      name: 'ALEENA',
      role: 'Media & Communications',
      image: '/assets/generated/aleena-portrait.dim_400x400.png',
      id: 'A-004',
    },
  ];

  return (
    <div 
      ref={sectionRef}
      className={`py-20 px-4 bg-matteBlack transition-all duration-700 ${
        isVisible ? 'opacity-100 fade-in-jitter' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-industrial font-bold tracking-wider text-neonGreen mb-4">
            THE CORE UNIT
          </h2>
          <div className="h-1 w-32 bg-hotPink mx-auto"></div>
          <p className="font-mono text-sm uppercase tracking-widest text-gray-400 mt-4">
            [TACTICAL DOSSIER]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative tactical-border bg-matteBlack hover:border-neonGreen transition-all duration-300 overflow-hidden"
            >
              {/* Dossier Header */}
              <div className="bg-neonGreen/10 border-b border-neonGreen/30 p-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-neonGreen">ID: {member.id}</span>
                  <span className="font-mono text-xs text-hotPink">ACTIVE</span>
                </div>
              </div>

              {/* Portrait with Glitch Overlay */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 horizontal-glitch-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-matteBlack via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-industrial font-bold tracking-wider text-neonGreen">
                  {member.name}
                </h3>
                <p className="font-mono text-sm text-gray-400 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>

              {/* Glitch Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-neonGreen/5 mix-blend-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
