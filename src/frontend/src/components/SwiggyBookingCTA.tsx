import GlitchButton from './GlitchButton';
import { ExternalLink } from 'lucide-react';

export default function SwiggyBookingCTA() {
  return (
    <GlitchButton
      onClick={() => window.open('https://r.swiggy.com/v1/swiggy/scenes/comms/100052615', '_blank', 'noopener,noreferrer')}
      className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
    >
      <span className="flex items-center gap-3">
        BOOK TICKETS VIA SWIGGY SCENES
        <ExternalLink size={24} />
      </span>
    </GlitchButton>
  );
}
