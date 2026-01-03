import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockFarmers, certificationStatusLabels } from '@/data/mockData';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function RecentActivity() {
  const recentFarmers = mockFarmers.slice(0, 4);

  return (
    <Card variant="elevated">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Farmers</CardTitle>
          <p className="text-sm text-muted-foreground">Latest registered farmers</p>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/farmers" className="flex items-center gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentFarmers.map((farmer) => (
            <div
              key={farmer.id}
              className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                {farmer.firstName[0]}{farmer.lastName[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">
                  {farmer.firstName} {farmer.lastName}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="truncate">{farmer.location.village}, {farmer.location.country}</span>
                </div>
              </div>
              <Badge
                variant={
                  farmer.certificationStatus === 'certified'
                    ? 'certified'
                    : farmer.certificationStatus === 'working-towards'
                    ? 'working'
                    : 'none'
                }
              >
                {certificationStatusLabels[farmer.certificationStatus]}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function UpcomingInspections() {
  const inspections = [
    { id: 1, farm: 'Rakoto Vanilla Estate', date: '2025-01-15', type: 'Internal', framework: 'Organic' },
    { id: 2, farm: 'Mensah Cocoa Farm', date: '2025-01-18', type: 'External', framework: 'Rainforest' },
    { id: 3, farm: 'Bekele Coffee Highlands', date: '2025-01-22', type: 'External', framework: 'Fairtrade' },
  ];

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Upcoming Inspections</CardTitle>
        <p className="text-sm text-muted-foreground">Scheduled farm audits</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {inspections.map((inspection) => (
            <div
              key={inspection.id}
              className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div>
                <p className="font-medium text-sm">{inspection.farm}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {inspection.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {inspection.framework}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(inspection.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
