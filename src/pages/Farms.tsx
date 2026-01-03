import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockFarms, mockFarmers, cropTypeLabels } from '@/data/mockData';
import { 
  Search, 
  Plus, 
  MapPin, 
  Ruler,
  Leaf,
  MoreVertical,
  Download,
  Eye
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const Farms = () => {
  const getFarmerName = (farmerId: string) => {
    const farmer = mockFarmers.find(f => f.id === farmerId);
    return farmer ? `${farmer.firstName} ${farmer.lastName}` : 'Unknown';
  };

  const getComplianceScore = (farm: typeof mockFarms[0]) => {
    const scores = Object.values(farm.complianceStatus);
    const avg = scores.reduce((sum, s) => sum + s.score, 0) / scores.length;
    return Math.round(avg);
  };

  const getComplianceColor = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="min-h-screen">
      <Header 
        title="Farms" 
        subtitle="Monitor farm locations and compliance" 
      />
      
      <div className="p-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-3xl font-display font-bold text-primary">756</p>
              <p className="text-sm text-muted-foreground">Total Farms</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-3xl font-display font-bold text-success">1,842</p>
              <p className="text-sm text-muted-foreground">Total Hectares</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-3xl font-display font-bold text-accent">82%</p>
              <p className="text-sm text-muted-foreground">Avg. Compliance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-3xl font-display font-bold text-info">4</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-1 gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search farms..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Crops" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crops</SelectItem>
                <SelectItem value="vanilla">Vanilla</SelectItem>
                <SelectItem value="cocoa">Cocoa</SelectItem>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="spices">Spices</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Farm
            </Button>
          </div>
        </div>

        {/* Farms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFarms.map((farm) => {
            const complianceScore = getComplianceScore(farm);
            
            return (
              <Card key={farm.id} variant="elevated" className="group cursor-pointer overflow-hidden">
                {/* Map placeholder */}
                <div className="h-32 bg-gradient-to-br from-primary/20 to-success/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary/50" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant={complianceScore >= 80 ? 'success' : complianceScore >= 60 ? 'warning' : 'destructive'}>
                      {complianceScore}% Compliant
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{farm.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{getFarmerName(farm.farmerId)}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{farm.location.village}, {farm.location.country}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Ruler className="h-4 w-4 text-muted-foreground" />
                      <span>{farm.sizeHectares} ha total</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="h-4 w-4 text-muted-foreground" />
                      <span>{farm.cropAreaHectares} ha crops</span>
                    </div>
                  </div>

                  {/* Crops */}
                  <div className="flex flex-wrap gap-2">
                    {farm.crops.map((crop) => (
                      <Badge key={crop.id} variant="secondary">
                        {cropTypeLabels[crop.cropType]}
                      </Badge>
                    ))}
                  </div>

                  {/* Compliance bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Compliance Score</span>
                      <span className="font-semibold">{complianceScore}%</span>
                    </div>
                    <Progress value={complianceScore} className="h-2" />
                  </div>

                  <Button variant="outline" className="w-full" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Farms;
