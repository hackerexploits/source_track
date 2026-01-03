import { 
  Farmer, 
  Farm, 
  FarmerGroup, 
  DashboardMetrics,
  CertificationFramework,
  CropType 
} from '@/types';

export const mockFarmerGroups: FarmerGroup[] = [
  {
    id: 'grp-001',
    name: 'Vanilla Growers Cooperative',
    location: { country: 'Madagascar', region: 'SAVA', district: 'Antalaha', village: 'Ambohitra' },
    memberCount: 156,
    certifications: ['organic', 'fairtrade'],
    registrationDate: '2021-03-15',
  },
  {
    id: 'grp-002',
    name: 'Cocoa Excellence Association',
    location: { country: 'Ghana', region: 'Western', district: 'Sefwi Wiawso', village: 'Asawinso' },
    memberCount: 243,
    certifications: ['rainforest', 'organic'],
    registrationDate: '2020-08-22',
  },
  {
    id: 'grp-003',
    name: 'Highland Spice Farmers',
    location: { country: 'Indonesia', region: 'Sulawesi', district: 'Enrekang', village: 'Alla' },
    memberCount: 89,
    certifications: ['organic'],
    registrationDate: '2022-01-10',
  },
  {
    id: 'grp-004',
    name: 'Sustainable Coffee Alliance',
    location: { country: 'Ethiopia', region: 'Oromia', district: 'Jimma', village: 'Agaro' },
    memberCount: 312,
    certifications: ['fairtrade', 'rainforest', 'organic'],
    registrationDate: '2019-11-05',
  },
];

export const mockFarmers: Farmer[] = [
  {
    id: 'frm-001',
    firstName: 'Andry',
    lastName: 'Rakoto',
    phone: '+261 34 12 345 67',
    location: { country: 'Madagascar', region: 'SAVA', district: 'Antalaha', village: 'Ambohitra' },
    groupId: 'grp-001',
    certificationStatus: 'certified',
    certifications: ['organic', 'fairtrade'],
    registrationDate: '2021-04-20',
    trainings: [
      { id: 't-001', title: 'Organic Farming Practices', framework: 'organic', date: '2021-05-15', completionStatus: 'completed' },
      { id: 't-002', title: 'Fairtrade Standards', framework: 'fairtrade', date: '2021-06-20', completionStatus: 'completed' },
    ],
    inspections: [
      { id: 'i-001', type: 'internal', date: '2023-11-10', inspector: 'Jean Rabe', result: 'pass', framework: 'organic' },
    ],
  },
  {
    id: 'frm-002',
    firstName: 'Kofi',
    lastName: 'Mensah',
    phone: '+233 24 567 8901',
    location: { country: 'Ghana', region: 'Western', district: 'Sefwi Wiawso', village: 'Asawinso' },
    groupId: 'grp-002',
    certificationStatus: 'working-towards',
    certifications: [],
    registrationDate: '2022-02-14',
    trainings: [
      { id: 't-003', title: 'Rainforest Alliance Basics', framework: 'rainforest', date: '2023-08-10', completionStatus: 'completed' },
    ],
    inspections: [],
  },
  {
    id: 'frm-003',
    firstName: 'Siti',
    lastName: 'Rahayu',
    phone: '+62 812 3456 7890',
    location: { country: 'Indonesia', region: 'Sulawesi', district: 'Enrekang', village: 'Alla' },
    groupId: 'grp-003',
    certificationStatus: 'certified',
    certifications: ['organic'],
    registrationDate: '2022-03-08',
    trainings: [
      { id: 't-004', title: 'Organic Certification Prep', framework: 'organic', date: '2022-04-15', completionStatus: 'completed' },
    ],
    inspections: [
      { id: 'i-002', type: 'external', date: '2023-09-22', inspector: 'Bureau Veritas', result: 'pass', framework: 'organic' },
    ],
  },
  {
    id: 'frm-004',
    firstName: 'Alemitu',
    lastName: 'Bekele',
    phone: '+251 91 234 5678',
    location: { country: 'Ethiopia', region: 'Oromia', district: 'Jimma', village: 'Agaro' },
    groupId: 'grp-004',
    certificationStatus: 'certified',
    certifications: ['fairtrade', 'rainforest'],
    registrationDate: '2020-01-12',
    trainings: [
      { id: 't-005', title: 'Fairtrade Premium Use', framework: 'fairtrade', date: '2020-03-10', completionStatus: 'completed' },
      { id: 't-006', title: 'Climate Smart Agriculture', framework: 'rainforest', date: '2021-07-20', completionStatus: 'completed' },
    ],
    inspections: [
      { id: 'i-003', type: 'external', date: '2023-10-15', inspector: 'FLOCERT', result: 'pass', framework: 'fairtrade' },
    ],
  },
  {
    id: 'frm-005',
    firstName: 'Marie',
    lastName: 'Randria',
    phone: '+261 33 98 765 43',
    location: { country: 'Madagascar', region: 'SAVA', district: 'Sambava', village: 'Farahalana' },
    groupId: 'grp-001',
    certificationStatus: 'none',
    certifications: [],
    registrationDate: '2023-06-01',
    trainings: [],
    inspections: [],
  },
  {
    id: 'frm-006',
    firstName: 'Kwame',
    lastName: 'Asante',
    phone: '+233 20 111 2222',
    location: { country: 'Ghana', region: 'Western', district: 'Sefwi Wiawso', village: 'Benchema' },
    groupId: 'grp-002',
    certificationStatus: 'working-towards',
    certifications: [],
    registrationDate: '2023-01-20',
    trainings: [
      { id: 't-007', title: 'Organic Transition', framework: 'organic', date: '2023-09-05', completionStatus: 'in-progress' },
    ],
    inspections: [],
  },
];

export const mockFarms: Farm[] = [
  {
    id: 'farm-001',
    farmerId: 'frm-001',
    name: 'Rakoto Vanilla Estate',
    location: { country: 'Madagascar', region: 'SAVA', district: 'Antalaha', village: 'Ambohitra', gps: { latitude: -14.8833, longitude: 50.2833 } },
    sizeHectares: 2.5,
    cropAreaHectares: 2.0,
    crops: [
      {
        id: 'crop-001',
        cropType: 'vanilla',
        plantingDate: '2020-01-15',
        plantPopulation: 8000,
        estimatedYield: 400,
        actualYield: 380,
        certifiedVolume: 320,
        nonCertifiedVolume: 60,
        certifications: ['organic', 'fairtrade'],
        season: '2024',
      },
    ],
    complianceStatus: {
      inputsSpecification: { score: 92, status: 'compliant' },
      landProductivity: { score: 85, status: 'compliant' },
      farmerReturn: { score: 88, status: 'compliant' },
      ethicsFairness: { score: 95, status: 'compliant' },
      environmentalStewardship: { score: 90, status: 'compliant' },
    },
    registrationDate: '2021-04-20',
  },
  {
    id: 'farm-002',
    farmerId: 'frm-002',
    name: 'Mensah Cocoa Farm',
    location: { country: 'Ghana', region: 'Western', district: 'Sefwi Wiawso', village: 'Asawinso', gps: { latitude: 6.2167, longitude: -2.4833 } },
    sizeHectares: 4.0,
    cropAreaHectares: 3.5,
    crops: [
      {
        id: 'crop-002',
        cropType: 'cocoa',
        plantingDate: '2018-06-10',
        plantPopulation: 3500,
        estimatedYield: 2100,
        actualYield: 1950,
        certifiedVolume: 0,
        nonCertifiedVolume: 1950,
        certifications: [],
        season: '2024',
      },
    ],
    complianceStatus: {
      inputsSpecification: { score: 65, status: 'partial' },
      landProductivity: { score: 70, status: 'partial' },
      farmerReturn: { score: 55, status: 'non-compliant' },
      ethicsFairness: { score: 80, status: 'compliant' },
      environmentalStewardship: { score: 60, status: 'partial' },
    },
    registrationDate: '2022-02-14',
  },
  {
    id: 'farm-003',
    farmerId: 'frm-003',
    name: 'Rahayu Spice Garden',
    location: { country: 'Indonesia', region: 'Sulawesi', district: 'Enrekang', village: 'Alla', gps: { latitude: -3.5667, longitude: 119.8167 } },
    sizeHectares: 1.8,
    cropAreaHectares: 1.5,
    crops: [
      {
        id: 'crop-003',
        cropType: 'spices',
        plantingDate: '2019-03-20',
        plantPopulation: 5000,
        estimatedYield: 750,
        actualYield: 720,
        certifiedVolume: 650,
        nonCertifiedVolume: 70,
        certifications: ['organic'],
        season: '2024',
      },
    ],
    complianceStatus: {
      inputsSpecification: { score: 88, status: 'compliant' },
      landProductivity: { score: 82, status: 'compliant' },
      farmerReturn: { score: 75, status: 'partial' },
      ethicsFairness: { score: 90, status: 'compliant' },
      environmentalStewardship: { score: 85, status: 'compliant' },
    },
    registrationDate: '2022-03-08',
  },
  {
    id: 'farm-004',
    farmerId: 'frm-004',
    name: 'Bekele Coffee Highlands',
    location: { country: 'Ethiopia', region: 'Oromia', district: 'Jimma', village: 'Agaro', gps: { latitude: 7.85, longitude: 36.5833 } },
    sizeHectares: 3.2,
    cropAreaHectares: 2.8,
    crops: [
      {
        id: 'crop-004',
        cropType: 'coffee',
        plantingDate: '2015-08-01',
        plantPopulation: 4200,
        estimatedYield: 1800,
        actualYield: 1750,
        certifiedVolume: 1600,
        nonCertifiedVolume: 150,
        certifications: ['fairtrade', 'rainforest'],
        season: '2024',
      },
    ],
    complianceStatus: {
      inputsSpecification: { score: 95, status: 'compliant' },
      landProductivity: { score: 90, status: 'compliant' },
      farmerReturn: { score: 92, status: 'compliant' },
      ethicsFairness: { score: 94, status: 'compliant' },
      environmentalStewardship: { score: 96, status: 'compliant' },
    },
    registrationDate: '2020-01-12',
  },
];

export const mockDashboardMetrics: DashboardMetrics = {
  totalFarmers: 800,
  totalFarms: 756,
  totalCropArea: 1842,
  certifiedFarmers: 412,
  workingTowardsCertification: 189,
  trainingsCompleted: 1247,
  inspectionsCompleted: 634,
  certifiedVolume: 45280,
  nonCertifiedVolume: 28450,
};

export const frameworkLabels: Record<CertificationFramework, string> = {
  organic: 'Organic',
  rainforest: 'Rainforest Alliance',
  fairtrade: 'Fairtrade',
  regenerative: 'Regenerative Agriculture',
};

export const cropTypeLabels: Record<CropType, string> = {
  vanilla: 'Vanilla',
  cocoa: 'Cocoa',
  coffee: 'Coffee',
  spices: 'Spices',
  herbs: 'Herbs',
  tea: 'Tea',
};

export const certificationStatusLabels = {
  none: 'Not Certified',
  'working-towards': 'Working Towards',
  certified: 'Certified',
};

// Chart data for dashboard
export const monthlyComplianceData = [
  { month: 'Jan', certified: 320, working: 145, none: 180 },
  { month: 'Feb', certified: 335, working: 152, none: 168 },
  { month: 'Mar', certified: 348, working: 160, none: 157 },
  { month: 'Apr', certified: 365, working: 168, none: 142 },
  { month: 'May', certified: 382, working: 175, none: 128 },
  { month: 'Jun', certified: 398, working: 182, none: 115 },
  { month: 'Jul', certified: 412, working: 189, none: 99 },
];

export const cropDistributionData = [
  { crop: 'Vanilla', farmers: 245, area: 412 },
  { crop: 'Cocoa', farmers: 312, area: 625 },
  { crop: 'Coffee', farmers: 156, area: 485 },
  { crop: 'Spices', farmers: 67, area: 198 },
  { crop: 'Tea', farmers: 20, area: 122 },
];

export const countryData = [
  { country: 'Madagascar', farmers: 285, certified: 156 },
  { country: 'Ghana', farmers: 243, certified: 98 },
  { country: 'Ethiopia', farmers: 189, certified: 112 },
  { country: 'Indonesia', farmers: 83, certified: 46 },
];
