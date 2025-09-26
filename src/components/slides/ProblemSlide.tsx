import PresentationSlide from '../PresentationSlide';
import StatsCard from '../StatsCard';
import { Clock, AlertTriangle, TrendingDown, Zap } from 'lucide-react';

const ProblemSlide = () => {
  return (
    <PresentationSlide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">The Learning Crisis</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional professional development is failing in our fast-paced digital world
          </p>
        </div>

        {/* Problem Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={<Clock className="h-6 w-6" />}
            value="73%"
            label="Time Constraints"
            description="Professionals struggle to find time for traditional learning"
            variant="primary"
          />
          <StatsCard
            icon={<AlertTriangle className="h-6 w-6" />}
            value="15%"
            label="Completion Rate"
            description="Traditional online courses have extremely low completion rates"
            variant="secondary"
          />
          <StatsCard
            icon={<TrendingDown className="h-6 w-6" />}
            value="60%"
            label="Information Overload"
            description="Workers feel overwhelmed by too much content"
          />
          <StatsCard
            icon={<Zap className="h-6 w-6" />}
            value="45%"
            label="Skill Gaps"
            description="Companies report critical skill gaps in their workforce"
          />
        </div>

        {/* Problem Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Busy Schedules:</span>
                  <span className="text-muted-foreground ml-2">No time for 2-hour training sessions</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Generic Content:</span>
                  <span className="text-muted-foreground ml-2">One-size-fits-all doesn't work</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Poor Engagement:</span>
                  <span className="text-muted-foreground ml-2">Boring, outdated learning methods</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Rapid Change:</span>
                  <span className="text-muted-foreground ml-2">Skills become obsolete quickly</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">The Cost</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="text-lg font-semibold text-foreground mb-2">For Individuals</div>
                <p className="text-sm text-muted-foreground">Falling behind, missed promotions, career stagnation</p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="text-lg font-semibold text-foreground mb-2">For Organizations</div>
                <p className="text-sm text-muted-foreground">Productivity loss, high turnover, competitive disadvantage</p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="text-lg font-semibold text-foreground mb-2">For Society</div>
                <p className="text-sm text-muted-foreground">Widening skill gaps, economic inefficiency, inequality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground italic">
            "What if there was a better way to learn? A way that fits into your daily workflow..."
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default ProblemSlide;