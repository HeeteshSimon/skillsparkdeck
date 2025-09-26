import { useState, useEffect } from 'react';
import PresentationNavigation from '@/components/PresentationNavigation';
import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import TechnologySlide from '@/components/slides/TechnologySlide';
import MarketSlide from '@/components/slides/MarketSlide';
import ImpactSlide from '@/components/slides/ImpactSlide';

const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  TechnologySlide,
  MarketSlide,
  ImpactSlide,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'Home') {
        setCurrentSlide(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNavigate = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Slide Content */}
      <CurrentSlideComponent />
      
      {/* Navigation */}
      <PresentationNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={handleNavigate}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      
      {/* Keyboard Shortcuts Info */}
      <div className="fixed top-4 right-4 text-xs text-muted-foreground bg-card/20 hover:bg-card/80 backdrop-blur-sm hover:backdrop-blur-lg border border-border/10 hover:border-border/50 rounded-lg px-2 py-1 hover:px-3 hover:py-2 opacity-20 hover:opacity-100 transition-all duration-300">
        <div>← → Arrow keys or Space to navigate</div>
        <div>Home key to return to start</div>
      </div>
    </div>
  );
};

export default Index;
