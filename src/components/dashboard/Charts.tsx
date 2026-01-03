import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { monthlyComplianceData, cropDistributionData } from '@/data/mockData';

export function ComplianceTrendChart() {
  return (
    <Card variant="elevated" className="col-span-2">
      <CardHeader>
        <CardTitle>Certification Progress</CardTitle>
        <p className="text-sm text-muted-foreground">Farmer certification status over time</p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyComplianceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCertified" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(152, 55%, 40%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(152, 55%, 40%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorWorking" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 20%, 88%)" />
              <XAxis dataKey="month" stroke="hsl(150, 15%, 40%)" fontSize={12} />
              <YAxis stroke="hsl(150, 15%, 40%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(40, 25%, 97%)',
                  border: '1px solid hsl(40, 20%, 88%)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}
              />
              <Area
                type="monotone"
                dataKey="certified"
                stroke="hsl(152, 55%, 40%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorCertified)"
                name="Certified"
              />
              <Area
                type="monotone"
                dataKey="working"
                stroke="hsl(38, 92%, 50%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorWorking)"
                name="Working Towards"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-success" />
            <span className="text-sm text-muted-foreground">Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-warning" />
            <span className="text-sm text-muted-foreground">Working Towards</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CropDistributionChart() {
  const COLORS = [
    'hsl(152, 45%, 28%)',
    'hsl(25, 55%, 45%)',
    'hsl(38, 92%, 50%)',
    'hsl(130, 50%, 40%)',
    'hsl(200, 80%, 50%)',
  ];

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Crop Distribution</CardTitle>
        <p className="text-sm text-muted-foreground">Farmers by crop type</p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={cropDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="farmers"
                nameKey="crop"
              >
                {cropDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(40, 25%, 97%)',
                  border: '1px solid hsl(40, 20%, 88%)',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {cropDistributionData.map((item, index) => (
            <div key={item.crop} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm text-muted-foreground">{item.crop}</span>
              <span className="text-sm font-medium ml-auto">{item.farmers}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function VolumeChart() {
  const data = [
    { name: 'Certified', value: 45280, color: 'hsl(152, 55%, 40%)' },
    { name: 'Non-Certified', value: 28450, color: 'hsl(25, 40%, 50%)' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Production Volume</CardTitle>
        <p className="text-sm text-muted-foreground">Certified vs Non-Certified (kg)</p>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" fontSize={12} tickFormatter={(v) => `${(v / 1000).toFixed(0)}t`} />
              <YAxis type="category" dataKey="name" fontSize={12} width={80} />
              <Tooltip
                formatter={(value: number) => [`${(value / 1000).toFixed(1)} tons`, 'Volume']}
                contentStyle={{
                  backgroundColor: 'hsl(40, 25%, 97%)',
                  border: '1px solid hsl(40, 20%, 88%)',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="text-sm text-muted-foreground">Certification Rate</span>
          <span className="text-lg font-display font-bold text-success">
            {((data[0].value / total) * 100).toFixed(1)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
