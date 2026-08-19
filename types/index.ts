export interface SiteStat {
  label: string;
  value: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  applications: string[];
  deliverables: string[];
  estimatedTurnaround: string;
}

export interface Project {
  slug: string;
  name: string;
  overview: string;
  clientIndustry: string;
  location: string;
  surveyArea: string;
  droneUsed: string;
  sensorUsed: string;
  accuracy: string;
  deliverables: string[];
  outcomes: string[];
  gallery: string[];
  beforeLabel: string;
  afterLabel: string;
  pin: {
    left: string;
    top: string;
  };
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  outputs: string[];
}

export interface EquipmentItem {
  name: string;
  category: string;
  specifications: string[];
  applications: string[];
  accuracy: string;
  range: string;
  payload: string;
  sampleDataset: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

export interface QuoteRequest {
  company: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  surveyArea: string;
  location: string;
  timeline: string;
  budget: string;
  message: string;
  sitePlan: string;
  cadFiles: string;
}

export type Category =
  | 'Landscape'
  | 'Architecture'
  | 'Automotive'
  | 'Drone'
  | 'Portraits'
  | 'Travel'
  | 'Night';

export interface Photo {
  id: string;
  title: string;
  category: Category;
  location: string;
  camera: string;
  lens: string;
  settings: string;
  src: string;
}
