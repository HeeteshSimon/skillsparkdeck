import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard = ({ icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50 transition-all duration-500 hover:scale-105 hover:glow-effect">
      <div className="text-center mb-6">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-primary text-white mb-4 float-animation">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gradient mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0"></div>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FeatureCard;