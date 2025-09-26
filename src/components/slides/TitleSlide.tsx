import PresentationSlide from '../PresentationSlide';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Brain } from 'lucide-react';

const TitleSlide = () => {
  return (
    <PresentationSlide background="hero" className="text-center">
      <div className="space-y-8">
        {/* Main Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 pulse-glow">
              <Sparkles className="h-16 w-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 p-2 rounded-full bg-gradient-primary">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Skill<span className="text-gradient">Spark</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-medium">AI-Powered Micro Learning Platform</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
          Transforming professional development through{' '}
          <span className="text-white font-semibold">30-90 second learning nuggets</span>{' '}
          powered by AI, integrated seamlessly into daily workflows
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button size="lg" className="bg-white text-background hover:bg-white/90 px-8 py-6 text-lg font-semibold">
            Start Presentation
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
            Live Demo
          </Button>
        </div>

        {/* Key Stats Preview */}
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">85%</div>
            <div className="text-sm text-white/60">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2 min</div>
            <div className="text-sm text-white/60">Average Session</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">40%</div>
            <div className="text-sm text-white/60">Faster Learning</div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default TitleSlide;