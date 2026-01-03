import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockFarms, cropTypeLabels, frameworkLabels } from '@/data/mockData';
import { CropType, CertificationFramework } from '@/types';
import { 
  Search, 
  Plus, 
  Calendar,
  Scale,
  Award,
  TrendingUp,
  Download
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const cropIcons: Record<CropType, string> = {
  vanilla: '🫛',
  cocoa: '🍫',
  coffee: '☕',
  spices: '🌶️',
  herbs: '🌿',
  tea: '🍵',
};

const Crops = () => {
  // Flatten crops from all farms
  const allCrops = mockFarms.flatMap(farm => 
    farm.crops.map(crop => ({
      ...crop,
      farmId: farm.id,
      farmName: farm.name,
      location: farm.location,
    }))
  );

  // Stats
  const totalVolume = allCrops.reduce((sum, c) => sum + (c.actualYield || c.estimatedYield), 0);
  const certifiedVolume = allCrops.reduce((sum, c) => sum + c.certifiedVolume, 0);
  const nonCertifiedVolume = allCrops.reduce((sum, c) => sum + c.nonCertifiedVolume, 0);

  return (
    <div className="min-h-screen">
      <Header 
        title="Crops" 
        subtitle="Track crop production and certification volumes" 
      />
      
      <div className="p-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Scale className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-display font-bold">{(totalVolume / 1000).toFixed(1)}t</p>
                  <p className="text-sm text-muted-foreground">Total Volume</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-display font-bold">{(certifiedVolume / 1000).toFixed(1)}t</p>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-warning/10 to-warning/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-display font-bold">{(nonCertifiedVolume / 1000).toFixed(1)}t</p>
                  <p className="text-sm text-muted-foreground">Non-Certified</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🌱</div>
                <div>
                  <p className="text-2xl font-display font-bold">{((certifiedVolume / totalVolume) * 100).toFixed(0)}%</p>
                  <p className="text-sm text-muted-foreground">Certification Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-1 gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search crops..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Crop Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crop Types</SelectItem>
                {Object.entries(cropTypeLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="2024 Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024 Season</SelectItem>
                <SelectItem value="2023">2023 Season</SelectItem>
                <SelectItem value="2022">2022 Season</SelectItem>
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
              Register Crop
            </Button>
          </div>
        </div>

        {/* Crops Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Crop</TableHead>
                  <TableHead className="font-semibold">Farm</TableHead>
                  <TableHead className="font-semibold">Planting Date</TableHead>
                  <TableHead className="font-semibold">Population</TableHead>
                  <TableHead className="font-semibold">Est. Yield</TableHead>
                  <TableHead className="font-semibold">Actual Yield</TableHead>
                  <TableHead className="font-semibold">Certified Vol.</TableHead>
                  <TableHead className="font-semibold">Certifications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allCrops.map((crop) => (
                  <TableRow key={crop.id} className="hover:bg-muted/30 cursor-pointer">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{cropIcons[crop.cropType]}</span>
                        <span className="font-medium">{cropTypeLabels[crop.cropType]}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{crop.farmName}</p>
                        <p className="text-xs text-muted-foreground">{crop.location.country}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {new Date(crop.plantingDate).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{crop.plantPopulation.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{crop.estimatedYield.toLocaleString()} kg</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium">
                        {crop.actualYield ? `${crop.actualYield.toLocaleString()} kg` : '—'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-success">
                          {crop.certifiedVolume.toLocaleString()} kg
                        </span>
                        {crop.certifiedVolume > 0 && (
                          <Badge variant="success" className="text-xs">
                            {((crop.certifiedVolume / (crop.actualYield || crop.estimatedYield)) * 100).toFixed(0)}%
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {crop.certifications.length > 0 ? (
                          crop.certifications.map((cert) => (
                            <Badge key={cert} variant={cert as CertificationFramework} className="text-xs">
                              {frameworkLabels[cert].split(' ')[0]}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-sm text-muted-foreground">None</span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Crops;
