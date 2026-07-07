import MosaicCaseStudy from './mosaic/MosaicCaseStudy';
import { mosaicCaseStudyMeta } from './mosaic/mosaicCaseStudyData';
import YubicoCaseStudy from './yubico/YubicoCaseStudy';
import { yubicoCaseStudyMeta } from './yubico/yubicoCaseStudyData';

export const caseStudies = {
  mosaic: {
    ...mosaicCaseStudyMeta,
    Component: MosaicCaseStudy,
  },
  'product-finder-quiz': {
    ...yubicoCaseStudyMeta,
    Component: YubicoCaseStudy,
  },
} as const;

export type CaseStudySlug = keyof typeof caseStudies;
