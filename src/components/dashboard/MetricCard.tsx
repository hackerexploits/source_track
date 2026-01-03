import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'accent' | 'success' | 'warning' | 'info';
  delay?: number;
}

const colorStyles = {
  primary: {
    icon: 'bg-primary/10 text-primary',
    trend: 'text-primary',
  },
  accent: {
    icon: 'bg-accent/10 text-accent',
    trend: 'text-accent',
  },
  success: {
    icon: 'bg-success/10 text-success',
    trend: 'text-success',
  },
  warning: {
    icon: 'bg-warning/10 text-warning',
    trend: 'text-warning',
  },
  info: {
    icon: 'bg-info/10 text-info',
    trend: 'text-info',
  },
};

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = 'primary',
  delay = 0,
}: MetricCardProps) {
  const styles = colorStyles[color];

  return (
    <div
      className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-display font-bold text-foreground tracking-tight">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center gap-1 text-xs font-medium">
              <span className={cn(trend.isPositive ? 'text-success' : 'text-destructive')}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        
        <div className={cn('rounded-xl p-3', styles.icon)}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
