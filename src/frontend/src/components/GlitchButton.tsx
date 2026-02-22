import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GlitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function GlitchButton({ children, className = '', ...props }: GlitchButtonProps) {
  return (
    <button
      className={`relative font-mono uppercase tracking-widest bg-transparent border-2 border-neonGreen text-neonGreen px-6 py-3 overflow-hidden group transition-all duration-300 hover:bg-hotPink hover:border-hotPink hover:text-matteBlack hover:shadow-[0_0_20px_rgba(255,105,180,0.5)] ${className}`}
      {...props}
    >
      <span className="relative z-10 button-distortion">{children}</span>
      <div className="absolute inset-0 bg-hotPink translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </button>
  );
}
