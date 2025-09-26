import PresentationSlide from '../PresentationSlide';
import { Card } from '@/components/ui/card';
import { Code, Database, Zap, Shield, Cloud, Smartphone } from 'lucide-react';

const TechnologySlide = () => {
  return (
    <PresentationSlide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">Technical Architecture</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technology for scalability, performance, and reliability
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend Stack */}
          <Card className="p-6 bg-gradient-card border-primary/20 glow-effect">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Frontend Stack</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Framework</span>
                <span className="text-primary font-semibold">Next.js 14 + React 18</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Language</span>
                <span className="text-primary font-semibold">TypeScript</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Styling</span>
                <span className="text-primary font-semibold">Tailwind CSS</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Animations</span>
                <span className="text-primary font-semibold">Framer Motion</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-foreground">State Management</span>
                <span className="text-primary font-semibold">TanStack Query</span>
              </div>
            </div>
          </Card>

          {/* Backend Stack */}
          <Card className="p-6 bg-gradient-card border-secondary/20 intense-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary text-white">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Backend Stack</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Runtime</span>
                <span className="text-secondary font-semibold">Node.js + Express</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Database</span>
                <span className="text-secondary font-semibold">PostgreSQL + Redis</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">AI Engine</span>
                <span className="text-secondary font-semibold">OpenAI GPT-4 Turbo</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium text-foreground">Real-time</span>
                <span className="text-secondary font-semibold">Socket.io</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-foreground">Authentication</span>
                <span className="text-secondary font-semibold">JWT + bcrypt</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-card border-border/50 text-center hover:glow-effect transition-all duration-500">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground mb-2">High Performance</h4>
            <p className="text-sm text-muted-foreground">Sub-2 second load times with 99.9% uptime</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border/50 text-center hover:glow-effect transition-all duration-500">
            <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground mb-2">Enterprise Security</h4>
            <p className="text-sm text-muted-foreground">Military-grade encryption and compliance ready</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border/50 text-center hover:glow-effect transition-all duration-500">
            <Cloud className="h-12 w-12 text-accent mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground mb-2">Scalable Cloud</h4>
            <p className="text-sm text-muted-foreground">Auto-scaling to handle 100,000+ users</p>
          </Card>
        </div>

        {/* Integration Capabilities */}
        <Card className="p-8 bg-gradient-card border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Multi-Platform Integration</h3>
            <p className="text-muted-foreground">Seamlessly integrates with your existing workflow tools</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="font-semibold text-foreground">Chrome Extension</div>
              <div className="text-xs text-muted-foreground">Manifest V3</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8" />
              </div>
              <div className="font-semibold text-foreground">Slack Bot</div>
              <div className="text-xs text-muted-foreground">Interactive Blocks</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                <Database className="h-8 w-8" />
              </div>
              <div className="font-semibold text-foreground">REST APIs</div>
              <div className="text-xs text-muted-foreground">Third-party Ready</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto">
                <Cloud className="h-8 w-8" />
              </div>
              <div className="font-semibold text-foreground">Docker Ready</div>
              <div className="text-xs text-muted-foreground">Container Deploy</div>
            </div>
          </div>
        </Card>
      </div>
    </PresentationSlide>
  );
};

export default TechnologySlide;