export const CASE_STUDY_GOLD = '#C09040';
const CASE_STUDY_GOLD_TEXT_ON_LIGHT = '#7A5414';
const CASE_STUDY_GOLD_TEXT_ON_DARK = '#D9B56A';
const DARK_THEME_DEFAULT_TEXT = '#fafafa';

export function getCaseStudyGoldTextColor(defaultTextColor: string) {
  if (defaultTextColor.toLowerCase() === DARK_THEME_DEFAULT_TEXT) {
    return CASE_STUDY_GOLD_TEXT_ON_DARK;
  }

  return CASE_STUDY_GOLD_TEXT_ON_LIGHT;
}

export function getCaseStudyGoldSurfaceColor(
  backgroundColor: string,
  backgroundAmount: number,
) {
  return `color-mix(in oklch, ${CASE_STUDY_GOLD}, ${backgroundColor} ${backgroundAmount}%)`;
}
