import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-matteBlack/95 backdrop-blur-md border-b border-neonGreen/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo with Icon + Text */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex flex-col items-start gap-1 group"
          >
            <div className="flex items-center gap-3">
              <img
                src="/assets/monkeyworx-1.png"
                alt="MonkeyWorx Icon"
                className="h-12 w-12 md:h-14 md:w-14 logo-rgb-split"
              />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bebas tracking-wider text-neonGreen logo-flicker">
                  MONKEYWORX
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm md:text-base font-mono tracking-widest text-gray-400">
                    COLLECTIVE
                  </span>
                  <span className="text-xs font-mono text-gray-500 self-end">& CO.</span>
                </div>
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="font-mono text-sm uppercase tracking-widest hover:text-neonGreen transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="font-mono text-sm uppercase tracking-widest hover:text-neonGreen transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              className="font-mono text-sm uppercase tracking-widest hover:text-hotPink transition-colors"
            >
              Tickets
            </button>
            <button
              onClick={() => scrollToSection('corporate')}
              className="font-mono text-sm uppercase tracking-widest hover:text-hotPink transition-colors"
            >
              Corporate/Events
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neonGreen"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-neonGreen/20 pt-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left font-mono text-sm uppercase tracking-widest hover:text-neonGreen transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left font-mono text-sm uppercase tracking-widest hover:text-neonGreen transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              className="block w-full text-left font-mono text-sm uppercase tracking-widest hover:text-hotPink transition-colors"
            >
              Tickets
            </button>
            <button
              onClick={() => scrollToSection('corporate')}
              className="block w-full text-left font-mono text-sm uppercase tracking-widest hover:text-hotPink transition-colors"
            >
              Corporate/Events
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
