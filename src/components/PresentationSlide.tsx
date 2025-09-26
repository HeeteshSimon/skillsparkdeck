import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'hero';
}

const PresentationSlide = ({ children, className, background = 'default' }: PresentationSlideProps) => {
  const backgroundClasses = {
    default: 'bg-background',
    gradient: 'bg-gradient-card',
    hero: 'bg-gradient-hero'
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden slide-enter",
      backgroundClasses[background],
      className
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PresentationSlide;