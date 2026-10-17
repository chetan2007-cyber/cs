export type ProjectType =
  | 'Website Development'
  | 'Web Applications'
  | 'Mobile Applications'
  | 'SaaS Development'
  | 'AI Solutions'
  | 'Custom Software'
  | 'UI/UX and Product Design'
  | 'Automation and Integrations'
  | 'Backend and Cloud'
  | 'E-commerce'
  | 'MVP Development'
  | 'Other / Custom Scope';

export type BudgetRange =
  | '$3,000 - $7,500'
  | '$7,500 - $15,000'
  | '$15,000 - $30,000'
  | '$30,000+'
  | 'Custom / Retainer Scope';

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: ProjectType | string;
  budget: BudgetRange | string;
  message: string;
  website_trap?: string;
  _timestamp?: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Product Engineering' | 'Systems & Cloud' | 'Design & Strategy';
  shortDescription: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface CaseStudyItem {
  id: string;
  slug: 'kami' | 'nova' | 'flow' | 'orbit' | 'vertex';
  title: string;
  subtitle: string;
  category: string;
  typeBadge: string;
  summary: string;
  challenge: string;
  approach: string;
  productDesign: string;
  solution: string;
  intendedValue: string;
  keyFeatures: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  titleBadge: string;
  bioSnippet: string;
  focus: string[];
}

export interface ProcessStage {
  number: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
}
