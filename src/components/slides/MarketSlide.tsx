import PresentationSlide from '../PresentationSlide';
import StatsCard from '../StatsCard';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Globe, Target, Rocket } from 'lucide-react';

const MarketSlide = () => {
  return (
    <PresentationSlide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">Market Opportunity</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Massive, growing market with significant disruption potential
          </p>
        </div>

        {/* Market Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={<DollarSign className="h-6 w-6" />}
            value="$366B"
            label="Corporate Training"
            description="Current market size (2023)"
            variant="primary"
          />
          <StatsCard
            icon={<TrendingUp className="h-6 w-6" />}
            value="$399B"
            label="E-Learning Market"
            description="Global online education market"
            variant="secondary"
          />
          <StatsCard
            icon={<Rocket className="h-6 w-6" />}
            value="15.2%"
            label="CAGR Growth"
            description="Micro-learning market growth rate"
          />
          <StatsCard
            icon={<Globe className="h-6 w-6" />}
            value="45%"
            label="AI Education"
            description="AI in education market CAGR"
          />
        </div>

        {/* Target Markets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-card border-primary/20 glow-effect">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Primary Market</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <div>
                  <div className="font-semibold text-foreground">SMEs (10-500 employees)</div>
                  <div className="text-sm text-muted-foreground">Technology & Professional Services</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">2.5M</div>
                  <div className="text-xs text-muted-foreground">Companies</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <div>
                  <div className="font-semibold text-foreground">Tech Companies</div>
                  <div className="text-sm text-muted-foreground">Software, SaaS, Startups</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">500K</div>
                  <div className="text-xs text-muted-foreground">Companies</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="font-semibold text-foreground">Consultancies</div>
                  <div className="text-sm text-muted-foreground">Professional Service Firms</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">1.2M</div>
                  <div className="text-xs text-muted-foreground">Firms</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-secondary/20 intense-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Secondary Market</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <div>
                  <div className="font-semibold text-foreground">Enterprise (500+ employees)</div>
                  <div className="text-sm text-muted-foreground">Large corporations worldwide</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">50K</div>
                  <div className="text-xs text-muted-foreground">Companies</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <div>
                  <div className="font-semibold text-foreground">Educational Institutions</div>
                  <div className="text-sm text-muted-foreground">Universities & Colleges</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">200K</div>
                  <div className="text-xs text-muted-foreground">Institutions</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="font-semibold text-foreground">Government Organizations</div>
                  <div className="text-sm text-muted-foreground">Agencies worldwide</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">50K</div>
                  <div className="text-xs text-muted-foreground">Agencies</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Revenue Projections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Conservative Projections</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-muted-foreground">Year 1</span>
                <span className="font-bold text-foreground">$348K ARR</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-muted-foreground">Year 2</span>
                <span className="font-bold text-foreground">$3.48M ARR</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Year 3</span>
                <span className="font-bold text-primary text-lg">$17.4M ARR</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Optimistic Projections</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-muted-foreground">Year 1</span>
                <span className="font-bold text-foreground">$2.94M ARR</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-muted-foreground">Year 2</span>
                <span className="font-bold text-foreground">$14.7M ARR</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Year 3</span>
                <span className="font-bold text-secondary text-lg">$58.8M ARR</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Competitive Advantages */}
        <Card className="p-8 bg-gradient-card border-border/50">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Competitive Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">vs. Traditional LMS</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="font-bold text-primary">85% vs 15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Session Time</span>
                  <span className="font-bold text-primary">2 min vs 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Personalization</span>
                  <span className="font-bold text-primary">AI vs Static</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">vs. Online Courses</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Flexibility</span>
                  <span className="font-bold text-secondary">Anytime vs Scheduled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cost</span>
                  <span className="font-bold text-secondary">$29/mo vs $500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Content</span>
                  <span className="font-bold text-secondary">Current vs Outdated</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PresentationSlide>
  );
};

export default MarketSlide;