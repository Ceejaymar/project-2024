import MosaicCaseStudy from './mosaic/MosaicCaseStudy';
import { mosaicCaseStudyMeta } from './mosaic/mosaicCaseStudyData';

export const caseStudies = {
  mosaic: {
    ...mosaicCaseStudyMeta,
    Component: MosaicCaseStudy,
  },
} as const;

export type CaseStudySlug = keyof typeof caseStudies;
