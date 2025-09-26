import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface PresentationNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slideIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const PresentationNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onNavigate, 
  onPrevious, 
  onNext 
}: PresentationNavigationProps) => {
  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-3 bg-card/60 backdrop-blur-lg border border-border/30 rounded-full px-4 py-2 shadow-lg">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="h-8 w-8 p-0 text-foreground hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate(0)}
          className="h-8 w-8 p-0 text-foreground hover:text-primary"
        >
          <Home className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="h-8 w-8 p-0 text-foreground hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        
        <div className="text-xs text-muted-foreground">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

export default PresentationNavigation;