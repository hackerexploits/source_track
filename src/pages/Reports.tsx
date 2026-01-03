import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileBarChart, 
  Users, 
  GraduationCap, 
  ClipboardCheck, 
  Award,
  Scale,
  Download,
  Calendar,
  Filter,
  ChevronRight
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const reportTypes = [
  {
    id: 'farmers-by-crop',
    title: 'Farmers by Crop & Geography',
    description: 'Number of farmers segmented by crop type and location',
    icon: Users,
    color: 'primary',
  },
  {
    id: 'certification-progress',
    title: 'Certification Progress',
    description: 'Farmers working towards certification by standard',
    icon: Award,
    color: 'success',
  },
  {
    id: 'trainings',
    title: 'Training Reports',
    description: 'Number of trainings conducted by framework and region',
    icon: GraduationCap,
    color: 'info',
  },
  {
    id: 'inspections',
    title: 'Inspection Reports',
    description: 'Farm inspections conducted and results summary',
    icon: ClipboardCheck,
    color: 'warning',
  },
  {
    id: 'certified-farmers',
    title: 'Certified Farmers',
    description: 'Number of certified farmers by standard and location',
    icon: Award,
    color: 'accent',
  },
  {
    id: 'volumes',
    title: 'Production Volumes',
    description: 'Certified vs non-certified crop volumes per season',
    icon: Scale,
    color: 'primary',
  },
];

const Reports = () => {
  return (
    <div className="min-h-screen">
      <Header 
        title="Reports" 
        subtitle="Generate and export compliance and sustainability reports" 
      />
      
      <div className="p-8 space-y-6">
        {/* Report Filters */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Report Filters</CardTitle>
            </div>
            <CardDescription>Select parameters to generate reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Crop Type</label>
                <Select>
                  <SelectTrigger>
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
              <div className="space-y-2">
                <label className="text-sm font-medium">Country</label>
                <Select>
                  <SelectTrigger>
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
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Framework</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Frameworks" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Frameworks</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="rainforest">Rainforest Alliance</SelectItem>
                    <SelectItem value="fairtrade">Fairtrade</SelectItem>
                    <SelectItem value="regenerative">Regenerative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Season</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="2024" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Report Types */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">Available Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report) => {
              const Icon = report.icon;
              return (
                <Card 
                  key={report.id} 
                  variant="elevated" 
                  className="group cursor-pointer hover:border-primary/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-${report.color}/10`}>
                        <Icon className={`h-6 w-6 text-${report.color}`} />
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <CardTitle className="text-lg mt-4">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Generate Report
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Previously generated reports</CardDescription>
              </div>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Q4 2024 Certification Summary', date: '2025-01-02', type: 'PDF', size: '2.4 MB' },
                { name: 'Madagascar Farmers Report', date: '2024-12-28', type: 'Excel', size: '1.8 MB' },
                { name: 'Annual Compliance Overview', date: '2024-12-15', type: 'PDF', size: '5.2 MB' },
              ].map((report, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileBarChart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
