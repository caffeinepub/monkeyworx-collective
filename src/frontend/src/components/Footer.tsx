import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'monkeyworx-collective'
  );

  return (
    <footer className="bg-matteBlack border-t border-neonGreen/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-industrial font-bold tracking-wider text-neonGreen mb-4">
              MONKEYWORX
            </h3>
            <p className="font-mono text-sm text-gray-400 uppercase tracking-wide">
              Industrial Cyberpunk
              <br />
              High-end Underground
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-hotPink mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-mono text-sm text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neonGreen transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neonGreen transition-colors"
                >
                  Tickets
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('corporate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neonGreen transition-colors"
                >
                  Corporate Events
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-hotPink mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+916363353339"
                className="block font-mono text-sm text-gray-400 hover:text-neonGreen transition-colors"
              >
                +91 63633 53339
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neonGreen transition-colors"
                  aria-label="Facebook"
                >
                  <SiFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com/monkeyworxcollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-hotPink transition-colors"
                  aria-label="Instagram - @monkeyworxcollective"
                  title="@monkeyworxcollective"
                >
                  <SiInstagram size={24} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neonGreen transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neonGreen/20 pt-8 text-center">
          <p className="font-mono text-sm text-gray-400">
            © {currentYear} MONKEYWORX COLLECTIVE & CO. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-500 mt-2 flex items-center justify-center gap-2">
            Built with <Heart size={14} className="text-hotPink" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neonGreen hover:text-hotPink transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
