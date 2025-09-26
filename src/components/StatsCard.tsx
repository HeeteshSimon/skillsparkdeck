import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  variant?: 'default' | 'primary' | 'secondary';
}

const StatsCard = ({ icon, value, label, description, variant = 'default' }: StatsCardProps) => {
  const variants = {
    default: 'border-border bg-card',
    primary: 'border-primary/30 bg-card glow-effect',
    secondary: 'border-secondary/30 bg-card intense-glow'
  };

  return (
    <Card className={`p-6 transition-all duration-500 hover:scale-105 ${variants[variant]}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-primary text-white">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold text-gradient mb-1">{value}</div>
          <div className="text-lg font-semibold text-foreground mb-2">{label}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;