// Certification Frameworks
export type CertificationFramework = 'organic' | 'rainforest' | 'fairtrade' | 'regenerative';

export type CertificationStatus = 'none' | 'working-towards' | 'certified';

// Geographic entities
export interface Location {
  country: string;
  region: string;
  district: string;
  village: string;
  gps?: {
    latitude: number;
    longitude: number;
  };
}

// Farmer entity
export interface Farmer {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  phone?: string;
  email?: string;
  location: Location;
  groupId: string;
  certificationStatus: CertificationStatus;
  certifications: CertificationFramework[];
  registrationDate: string;
  trainings: Training[];
  inspections: Inspection[];
}

// Farm entity
export interface Farm {
  id: string;
  farmerId: string;
  name: string;
  location: Location;
  sizeHectares: number;
  cropAreaHectares: number;
  crops: FarmCrop[];
  complianceStatus: ComplianceStatus;
  registrationDate: string;
}

// Crop on a farm
export interface FarmCrop {
  id: string;
  cropType: CropType;
  plantingDate: string;
  plantPopulation: number;
  estimatedYield: number;
  actualYield?: number;
  certifiedVolume: number;
  nonCertifiedVolume: number;
  certifications: CertificationFramework[];
  season: string;
}

// Crop types
export type CropType = 'vanilla' | 'cocoa' | 'coffee' | 'spices' | 'herbs' | 'tea';

// Farmer Group
export interface FarmerGroup {
  id: string;
  name: string;
  location: Location;
  memberCount: number;
  certifications: CertificationFramework[];
  registrationDate: string;
}

// Training
export interface Training {
  id: string;
  title: string;
  framework: CertificationFramework;
  date: string;
  completionStatus: 'completed' | 'in-progress' | 'scheduled';
}

// Inspection
export interface Inspection {
  id: string;
  type: 'internal' | 'external';
  date: string;
  inspector: string;
  result: 'pass' | 'fail' | 'pending';
  findings?: string;
  framework: CertificationFramework;
}

// Compliance dimensions
export interface ComplianceStatus {
  inputsSpecification: ComplianceScore;
  landProductivity: ComplianceScore;
  farmerReturn: ComplianceScore;
  ethicsFairness: ComplianceScore;
  environmentalStewardship: ComplianceScore;
}

export interface ComplianceScore {
  score: number; // 0-100
  status: 'compliant' | 'partial' | 'non-compliant';
  lastAuditDate?: string;
  notes?: string;
}

// Dashboard metrics
export interface DashboardMetrics {
  totalFarmers: number;
  totalFarms: number;
  totalCropArea: number;
  certifiedFarmers: number;
  workingTowardsCertification: number;
  trainingsCompleted: number;
  inspectionsCompleted: number;
  certifiedVolume: number;
  nonCertifiedVolume: number;
}

// Report filters
export interface ReportFilters {
  crop?: CropType;
  country?: string;
  region?: string;
  district?: string;
  village?: string;
  groupId?: string;
  framework?: CertificationFramework;
  season?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}
