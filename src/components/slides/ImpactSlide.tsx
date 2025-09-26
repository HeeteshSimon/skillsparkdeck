import PresentationSlide from '../PresentationSlide';
import StatsCard from '../StatsCard';
import { Card } from '@/components/ui/card';
import { User, Building, Globe, Leaf, TrendingUp, Award } from 'lucide-react';

const ImpactSlide = () => {
  return (
    <PresentationSlide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">Large-Scale Impact</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Transforming individuals, organizations, and society through accessible, effective learning
          </p>
        </div>

        {/* Impact Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Individual Impact */}
          <Card className="p-6 bg-gradient-card border-primary/20 glow-effect">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <User className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Individual Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Faster skill acquisition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Higher promotion rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Average salary increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Improvement in job satisfaction</div>
              </div>
            </div>
          </Card>

          {/* Organizational Impact */}
          <Card className="p-6 bg-gradient-card border-secondary/20 intense-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Organizational Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Productivity improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Reduction in turnover</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Training cost reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Increase in innovation</div>
              </div>
            </div>
          </Card>

          {/* Societal Impact */}
          <Card className="p-6 bg-gradient-card border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Societal Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Reduction in travel</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Digital content delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Equal</div>
                <div className="text-sm text-muted-foreground">Access regardless of location</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Workforce enhancement</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={<TrendingUp className="h-6 w-6" />}
            value="85%"
            label="Learning Retention"
            description="Through spaced repetition methodology"
            variant="primary"
          />
          <StatsCard
            icon={<Award className="h-6 w-6" />}
            value="90%"
            label="Compliance Training"
            description="Completion rate improvement"
            variant="secondary"
          />
          <StatsCard
            icon={<Leaf className="h-6 w-6" />}
            value="Carbon-"
            label="Neutral Learning"
            description="Significant footprint reduction"
          />
          <StatsCard
            icon={<Globe className="h-6 w-6" />}
            value="24/7"
            label="Global Access"
            description="Learning opportunities worldwide"
          />
        </div>

        {/* Long-term Vision */}
        <Card className="p-8 bg-gradient-card border-border/50">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Long-term Vision: Education Revolution</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                  <User className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">Lifelong Learning</h4>
                <p className="text-sm text-muted-foreground">Making continuous learning accessible to everyone</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">Skill Democratization</h4>
                <p className="text-sm text-muted-foreground">Equal access to professional development</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">Economic Growth</h4>
                <p className="text-sm text-muted-foreground">Skilled workforce driving development</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">Global Competitiveness</h4>
                <p className="text-sm text-muted-foreground">Enhanced workforce capabilities worldwide</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">The Future of Learning is Here</h3>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join us in revolutionizing professional development and creating a world where continuous learning is effortless, engaging, and effective.
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default ImpactSlide;