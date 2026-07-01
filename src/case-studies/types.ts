import type { ComponentType } from 'react';
import type { ProjectLink } from '../types';

export interface CaseStudyMeta {
  slug: string;
  title: string;
  eyebrow?: string;
  summary: string;
  year?: number;
  role?: string;
  type?: string;
  industry?: string;
  tech?: string;
  heroImage?: string;
  links?: ProjectLink[];
}

export interface CaseStudyEntry extends CaseStudyMeta {
  Component: ComponentType;
}
