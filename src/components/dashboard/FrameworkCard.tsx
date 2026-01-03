import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CertificationFramework } from '@/types';
import { frameworkLabels } from '@/data/mockData';
import { Leaf, TreeDeciduous, Heart, Recycle } from 'lucide-react';

interface FrameworkCardProps {
  framework: CertificationFramework;
  farmers: number;
  farms: number;
  volume: number;
  percentage: number;
}

const frameworkIcons: Record<CertificationFramework, React.ElementType> = {
  organic: Leaf,
  rainforest: TreeDeciduous,
  fairtrade: Heart,
  regenerative: Recycle,
};

const frameworkColors: Record<CertificationFramework, string> = {
  organic: 'organic',
  rainforest: 'rainforest',
  fairtrade: 'fairtrade',
  regenerative: 'regenerative',
};

export function FrameworkCard({ framework, farmers, farms, volume, percentage }: FrameworkCardProps) {
  const Icon = frameworkIcons[framework];
  const color = frameworkColors[framework];

  return (
    <Card variant="elevated" className="group cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`rounded-lg p-2 bg-${color}/10`}>
            <Icon className={`h-5 w-5 text-${color}`} />
          </div>
          <Badge variant={framework}>{percentage}%</Badge>
        </div>
        <CardTitle className="text-lg">{frameworkLabels[framework]}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Certified Farmers</span>
            <span className="font-semibold">{farmers.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Certified Farms</span>
            <span className="font-semibold">{farms.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Certified Volume</span>
            <span className="font-semibold">{(volume / 1000).toFixed(1)}t</span>
          </div>
          
          {/* Progress bar */}
          <div className="mt-3 pt-3 border-t">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${color} rounded-full transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
