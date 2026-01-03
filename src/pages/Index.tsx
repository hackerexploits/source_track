import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { FrameworkCard } from '@/components/dashboard/FrameworkCard';
import { ComplianceTrendChart, CropDistributionChart, VolumeChart } from '@/components/dashboard/Charts';
import { RecentActivity, UpcomingInspections } from '@/components/dashboard/RecentActivity';
import { mockDashboardMetrics } from '@/data/mockData';
import { 
  Users, 
  MapPin, 
  Leaf, 
  Award, 
  GraduationCap, 
  ClipboardCheck,
  Scale,
  TrendingUp 
} from 'lucide-react';

const Index = () => {
  const metrics = mockDashboardMetrics;

  return (
    <div className="min-h-screen">
      <Header 
        title="Dashboard" 
        subtitle="Overview of your sustainability operations" 
      />
      
      <div className="p-8 space-y-8">
        {/* Key Metrics */}
        <section>
          <h2 className="font-display text-lg font-semibold mb-4 text-foreground">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Farmers"
              value={metrics.totalFarmers}
              subtitle="Across all groups"
              icon={Users}
              trend={{ value: 12, isPositive: true }}
              color="primary"
              delay={0}
            />
            <MetricCard
              title="Total Farms"
              value={metrics.totalFarms}
              subtitle={`${metrics.totalCropArea.toLocaleString()} hectares`}
              icon={MapPin}
              trend={{ value: 8, isPositive: true }}
              color="success"
              delay={100}
            />
            <MetricCard
              title="Certified Farmers"
              value={metrics.certifiedFarmers}
              subtitle={`${((metrics.certifiedFarmers / metrics.totalFarmers) * 100).toFixed(1)}% of total`}
              icon={Award}
              trend={{ value: 15, isPositive: true }}
              color="accent"
              delay={200}
            />
            <MetricCard
              title="Working Towards"
              value={metrics.workingTowardsCertification}
              subtitle="In certification process"
              icon={TrendingUp}
              trend={{ value: 23, isPositive: true }}
              color="warning"
              delay={300}
            />
          </div>
        </section>

        {/* Secondary Metrics */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Trainings Completed"
              value={metrics.trainingsCompleted}
              icon={GraduationCap}
              color="info"
              delay={400}
            />
            <MetricCard
              title="Inspections Done"
              value={metrics.inspectionsCompleted}
              icon={ClipboardCheck}
              color="primary"
              delay={500}
            />
            <MetricCard
              title="Certified Volume"
              value={`${(metrics.certifiedVolume / 1000).toFixed(1)}t`}
              subtitle="This season"
              icon={Scale}
              color="success"
              delay={600}
            />
            <MetricCard
              title="Non-Certified Volume"
              value={`${(metrics.nonCertifiedVolume / 1000).toFixed(1)}t`}
              subtitle="Pending certification"
              icon={Leaf}
              color="warning"
              delay={700}
            />
          </div>
        </section>

        {/* Certification Frameworks */}
        <section>
          <h2 className="font-display text-lg font-semibold mb-4 text-foreground">Certification Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FrameworkCard
              framework="organic"
              farmers={245}
              farms={230}
              volume={18500}
              percentage={31}
            />
            <FrameworkCard
              framework="rainforest"
              farmers={189}
              farms={175}
              volume={14200}
              percentage={24}
            />
            <FrameworkCard
              framework="fairtrade"
              farmers={156}
              farms={148}
              volume={11800}
              percentage={19}
            />
            <FrameworkCard
              framework="regenerative"
              farmers={67}
              farms={62}
              volume={4800}
              percentage={8}
            />
          </div>
        </section>

        {/* Charts Row */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ComplianceTrendChart />
          <CropDistributionChart />
        </section>

        {/* Activity & Volume */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentActivity />
          <UpcomingInspections />
          <VolumeChart />
        </section>
      </div>
    </div>
  );
};

export default Index;
