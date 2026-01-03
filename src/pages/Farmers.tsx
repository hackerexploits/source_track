import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockFarmers, mockFarmerGroups, certificationStatusLabels, frameworkLabels } from '@/data/mockData';
import { 
  Search, 
  Filter, 
  Plus, 
  MapPin, 
  Phone, 
  Calendar,
  MoreVertical,
  Download,
  Users as UsersIcon
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
import { CertificationFramework } from '@/types';

const Farmers = () => {
  const getGroupName = (groupId: string) => {
    const group = mockFarmerGroups.find(g => g.id === groupId);
    return group?.name || 'Unknown';
  };

  return (
    <div className="min-h-screen">
      <Header 
        title="Farmers" 
        subtitle="Manage farmer profiles and certifications" 
      />
      
      <div className="p-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <UsersIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">800</p>
                  <p className="text-sm text-muted-foreground">Total Farmers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-success/5 border-success/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <Badge variant="certified" className="px-1.5 py-0.5">✓</Badge>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">412</p>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-warning/5 border-warning/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Badge variant="working" className="px-1.5 py-0.5">→</Badge>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">189</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-muted border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted-foreground/10">
                  <Badge variant="none" className="px-1.5 py-0.5">○</Badge>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">199</p>
                  <p className="text-sm text-muted-foreground">Not Certified</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-1 gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, location, or ID..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="madagascar">Madagascar</SelectItem>
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="ethiopia">Ethiopia</SelectItem>
                <SelectItem value="indonesia">Indonesia</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="certified">Certified</SelectItem>
                <SelectItem value="working">Working Towards</SelectItem>
                <SelectItem value="none">Not Certified</SelectItem>
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
              Add Farmer
            </Button>
          </div>
        </div>

        {/* Farmers Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Farmer</TableHead>
                  <TableHead className="font-semibold">Location</TableHead>
                  <TableHead className="font-semibold">Group</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Certifications</TableHead>
                  <TableHead className="font-semibold">Trainings</TableHead>
                  <TableHead className="font-semibold">Registered</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFarmers.map((farmer) => (
                  <TableRow key={farmer.id} className="hover:bg-muted/30 cursor-pointer">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                          {farmer.firstName[0]}{farmer.lastName[0]}
                        </div>
                        <div>
                          <p className="font-medium">{farmer.firstName} {farmer.lastName}</p>
                          {farmer.phone && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              {farmer.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{farmer.location.village}, {farmer.location.country}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{getGroupName(farmer.groupId)}</span>
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {farmer.certifications.length > 0 ? (
                          farmer.certifications.map((cert) => (
                            <Badge key={cert} variant={cert as CertificationFramework} className="text-xs">
                              {frameworkLabels[cert].split(' ')[0]}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-sm text-muted-foreground">None</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{farmer.trainings.length}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(farmer.registrationDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
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

export default Farmers;
