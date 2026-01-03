import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockFarms, frameworkLabels } from '@/data/mockData';
import { CertificationFramework } from '@/types';
import { 
  ShieldCheck, 
  Leaf, 
  TreeDeciduous, 
  Heart, 
  Recycle,
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const complianceDimensions = [
  { key: 'inputsSpecification', label: 'Inputs Specification', description: 'Organic inputs, approved agro-inputs, prohibited materials' },
  { key: 'landProductivity', label: 'Land & Productivity', description: 'Yields, land efficiency, soil health' },
  { key: 'farmerReturn', label: 'Farmer Return', description: 'Price, premium, economic sustainability' },
  { key: 'ethicsFairness', label: 'Ethics & Fairness', description: 'Labour practices, worker welfare, training' },
  { key: 'environmentalStewardship', label: 'Environmental Stewardship', description: 'Biodiversity, soil, water, climate' },
];

const frameworkIcons: Record<CertificationFramework, React.ElementType> = {
  organic: Leaf,
  rainforest: TreeDeciduous,
  fairtrade: Heart,
  regenerative: Recycle,
};

const Compliance = () => {
  // Calculate overall stats
  const allScores = mockFarms.flatMap(farm => Object.values(farm.complianceStatus).map(s => s.score));
  const avgScore = Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length);
  const compliantFarms = mockFarms.filter(farm => {
    const scores = Object.values(farm.complianceStatus);
    return scores.every(s => s.score >= 80);
  }).length;
  const partialFarms = mockFarms.filter(farm => {
    const scores = Object.values(farm.complianceStatus);
    const avg = scores.reduce((a, b) => a + b.score, 0) / scores.length;
    return avg >= 60 && avg < 80;
  }).length;
  const nonCompliantFarms = mockFarms.length - compliantFarms - partialFarms;

  return (
    <div className="min-h-screen">
      <Header 
        title="Compliance" 
        subtitle="Monitor sustainability standards and compliance status" 
      />
      
      <div className="p-8 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-display font-bold text-primary">{avgScore}%</p>
                  <p className="text-sm text-muted-foreground mt-1">Average Compliance</p>
                </div>
                <ShieldCheck className="h-10 w-10 text-primary/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-display font-bold text-success">{compliantFarms}</p>
                  <p className="text-sm text-muted-foreground mt-1">Fully Compliant</p>
                </div>
                <CheckCircle className="h-10 w-10 text-success/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-display font-bold text-warning">{partialFarms}</p>
                  <p className="text-sm text-muted-foreground mt-1">Partial Compliance</p>
                </div>
                <Clock className="h-10 w-10 text-warning/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-destructive/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-display font-bold text-destructive">{nonCompliantFarms}</p>
                  <p className="text-sm text-muted-foreground mt-1">Needs Attention</p>
                </div>
                <AlertTriangle className="h-10 w-10 text-destructive/40" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Framework Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {(['organic', 'rainforest', 'fairtrade', 'regenerative'] as CertificationFramework[]).map(fw => {
              const Icon = frameworkIcons[fw];
              return (
                <TabsTrigger key={fw} value={fw} className="gap-2">
                  <Icon className="h-4 w-4" />
                  {frameworkLabels[fw]}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Compliance Dimensions */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance Dimensions</CardTitle>
                <CardDescription>Performance across all sustainability requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {complianceDimensions.map((dim) => {
                  const scores = mockFarms.map(f => f.complianceStatus[dim.key as keyof typeof f.complianceStatus].score);
                  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
                  
                  return (
                    <div key={dim.key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{dim.label}</p>
                          <p className="text-sm text-muted-foreground">{dim.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-display font-bold">{avg}%</span>
                          <Badge variant={avg >= 80 ? 'success' : avg >= 60 ? 'warning' : 'destructive'}>
                            {avg >= 80 ? 'Compliant' : avg >= 60 ? 'Partial' : 'Action Needed'}
                          </Badge>
                        </div>
                      </div>
                      <Progress 
                        value={avg} 
                        className="h-3"
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Farm Compliance Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Farm Compliance Status</CardTitle>
                  <CardDescription>Individual farm performance</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockFarms.map((farm) => {
                    const scores = Object.values(farm.complianceStatus);
                    const avg = Math.round(scores.reduce((a, b) => a + b.score, 0) / scores.length);
                    
                    return (
                      <div 
                        key={farm.id} 
                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex-1">
                          <p className="font-medium">{farm.name}</p>
                          <p className="text-sm text-muted-foreground">{farm.location.country}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          {complianceDimensions.slice(0, 3).map((dim) => {
                            const score = farm.complianceStatus[dim.key as keyof typeof farm.complianceStatus].score;
                            return (
                              <div key={dim.key} className="text-center">
                                <p className="text-xs text-muted-foreground">{dim.label.split(' ')[0]}</p>
                                <p className={`font-semibold ${score >= 80 ? 'text-success' : score >= 60 ? 'text-warning' : 'text-destructive'}`}>
                                  {score}%
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-24">
                          <div className="flex items-center gap-2">
                            <Progress value={avg} className="h-2 flex-1" />
                            <span className="text-sm font-bold">{avg}%</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {(['organic', 'rainforest', 'fairtrade', 'regenerative'] as CertificationFramework[]).map(fw => (
            <TabsContent key={fw} value={fw} className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = frameworkIcons[fw];
                      return <Icon className={`h-6 w-6 text-${fw}`} />;
                    })()}
                    <div>
                      <CardTitle>{frameworkLabels[fw]}</CardTitle>
                      <CardDescription>Framework-specific compliance requirements</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Framework-specific compliance tracking coming soon.</p>
                    <p className="text-sm mt-2">This will show detailed requirements and audit results for {frameworkLabels[fw]}.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Compliance;
