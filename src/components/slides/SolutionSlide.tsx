import PresentationSlide from '../PresentationSlide';
import FeatureCard from '../FeatureCard';
import { Brain, Smartphone, Zap, Target } from 'lucide-react';

const SolutionSlide = () => {
  return (
    <PresentationSlide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gradient">The SkillSpark Solution</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            AI-powered micro-learning that delivers <span className="text-primary font-semibold">30-90 second learning nuggets</span> seamlessly integrated into your daily workflow
          </p>
          
          {/* Key Value Proposition */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20 glow-effect max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Revolutionary Approach</h2>
            <p className="text-lg text-muted-foreground">
              Transform learning from a time-consuming burden into an effortless, engaging part of your daily routine
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="AI-Powered"
            description="Personalized content generation"
            features={[
              "GPT-4 content creation",
              "Smart recommendations",
              "Adaptive difficulty",
              "Contextual relevance"
            ]}
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Micro-Learning"
            description="Bite-sized, digestible content"
            features={[
              "30-90 second sessions",
              "Perfect for busy schedules",
              "High retention rates",
              "Immediate application"
            ]}
          />
          <FeatureCard
            icon={<Smartphone className="h-8 w-8" />}
            title="Multi-Channel"
            description="Integrated into your workflow"
            features={[
              "Web dashboard",
              "Chrome extension",
              "Slack integration",
              "Mobile-ready"
            ]}
          />
          <FeatureCard
            icon={<Target className="h-8 w-8" />}
            title="Results-Driven"
            description="Measurable learning outcomes"
            features={[
              "Progress tracking",
              "Skill assessments",
              "Analytics dashboard",
              "ROI measurement"
            ]}
          />
        </div>

        {/* How It Works */}
        <div className="bg-gradient-card p-8 rounded-2xl border border-border/50">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">How SkillSpark Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">1</div>
              <h4 className="text-lg font-semibold text-foreground">AI Analyzes</h4>
              <p className="text-sm text-muted-foreground">Your role, interests, and learning patterns to create personalized content</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">2</div>
              <h4 className="text-lg font-semibold text-foreground">Smart Delivery</h4>
              <p className="text-sm text-muted-foreground">Content appears at optimal times through your preferred channels</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">3</div>
              <h4 className="text-lg font-semibold text-foreground">Continuous Growth</h4>
              <p className="text-sm text-muted-foreground">Track progress, build streaks, and develop skills incrementally</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default SolutionSlide;