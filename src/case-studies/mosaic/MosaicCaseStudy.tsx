import React from 'react';
import styled from 'styled-components';
import CaseStudyCallout from '../components/CaseStudyCallout';
import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudySection from '../components/CaseStudySection';
import {
  CASE_STUDY_GOLD,
  getCaseStudyGoldTextColor,
} from '../components/caseStudyColorTokens';
import { mosaicCaseStudyMeta } from './mosaicCaseStudyData';

import ci1 from '../../assets/case-study/mosaic/ci-1.webp';
import ci3 from '../../assets/case-study/mosaic/ci-3.webp';
import ci4 from '../../assets/case-study/mosaic/ci-4.webp';
import a11y from '../../assets/case-study/mosaic/a11y.webp';
import e1 from '../../assets/case-study/mosaic/e-1.webp';
import e2 from '../../assets/case-study/mosaic/e-2.webp';
import m from '../../assets/case-study/mosaic/m.webp';
import y from '../../assets/case-study/mosaic/y.webp';
import t from '../../assets/case-study/mosaic/t.webp';

const MOSAIC_GOLD = CASE_STUDY_GOLD;
const EMOTION_SURFACE_GRADIENT = `linear-gradient(
  180deg,
  rgb(255 255 255 / 0.16) 0%,
  rgb(255 255 255 / 0.03) 46%,
  rgb(0 0 0 / 0.14) 100%
)`;

const HeroScene = styled.figure`
  position: relative;
  isolation: isolate;
  display: grid;
  column-gap: clamp(1.5rem, 4vw, 3rem);
  row-gap: clamp(1rem, 2vw, 1.5rem);
  overflow: hidden;
  margin: 0;
  min-height: 30rem;
  padding: clamp(1.25rem, 4vw, 3rem);
  border: 1px solid
    color-mix(in oklch, ${({ theme }) => theme.colors.border}, transparent 12%);
  border-radius: 28px;
  background: radial-gradient(
      circle at 18% 22%,
      oklch(75% 0.15 63 / 0.28),
      transparent 34%
    ),
    radial-gradient(
      circle at 86% 72%,
      oklch(63% 0.13 304 / 0.22),
      transparent 38%
    ),
    linear-gradient(
      135deg,
      color-mix(
        in oklch,
        ${({ theme }) => theme.colors.background},
        oklch(86% 0.11 94) 16%
      ),
      color-mix(
          in oklch,
          ${({ theme }) => theme.colors.background},
          oklch(67% 0.12 250) 12%
        )
        46%,
      color-mix(
        in oklch,
        ${({ theme }) => theme.colors.background},
        oklch(72% 0.12 154) 14%
      )
    ),
    ${({ theme }) => theme.colors.background};
  box-shadow: 0 30px 90px -58px ${({ theme }) => theme.colors.boxShadow};

  @media (min-width: 860px) {
    grid-template-columns: minmax(0, 0.82fr) minmax(22rem, 1fr);
    align-items: center;
  }
`;

const SceneCopy = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 34rem;
`;

const SceneTitle = styled.h1`
  max-width: 8ch;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(3.25rem, 9vw, 6rem);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 0.92;
  text-wrap: balance;
`;

const SceneSubtitle = styled.p`
  max-width: 22ch;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.08;
`;

const SceneText = styled.p`
  max-width: 34rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 1rem;
  line-height: 1.7;
`;

const HeroMeta = styled.dl`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr;
  gap: 1px;
  overflow: hidden;
  border: 1px solid
    color-mix(in oklch, ${({ theme }) => theme.colors.border}, transparent 8%);
  border-radius: 16px;
  background-color: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.border},
    transparent 20%
  );

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(7rem, 1fr)) minmax(14rem, 2fr);
  }
`;

const HeroMetaItem = styled.div`
  padding: 0.95rem 1rem;
  background-color: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.background},
    transparent 16%
  );

  @media (min-width: 640px) and (max-width: 959px) {
    &:last-child {
      grid-column: 1 / -1;
    }
  }
`;

const HeroMetaLabel = styled.dt`
  margin: 0;
  margin-bottom: 0.35rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.67rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const HeroMetaValue = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

const PhoneStage = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  min-height: clamp(22rem, 70vw, 28rem);
`;

const CalendarHalo = styled.div`
  position: absolute;
  inset: 8% 0 auto;
  display: grid;
  grid-template-columns: repeat(18, minmax(0, 1fr));
  gap: 0.35rem;
  z-index: 0;
  pointer-events: none;
  transform: rotate(-7deg);
  opacity: 0.42;
`;

const CalendarHaloTile = styled.span<{ $color: string }>`
  aspect-ratio: 1;
  border-radius: 0.35rem;
  background: ${EMOTION_SURFACE_GRADIENT}, ${({ $color }) => $color};
`;

const PhoneFrame = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 22rem);
  padding: 0.75rem;
  border: 1px solid
    color-mix(in oklch, ${({ theme }) => theme.colors.border}, transparent 18%);
  border-radius: 2rem;
  background: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors['default-text']} 5%
  );
  box-shadow:
    0 28px 70px -38px ${({ theme }) => theme.colors.boxShadow},
    inset 0 0 0 1px
      color-mix(
        in oklch,
        ${({ theme }) => theme.colors.border},
        transparent 28%
      );
`;

const PhoneScreen = styled.div`
  overflow: hidden;
  padding: 1rem;
  border-radius: 1.45rem;
  background-color: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors['default-text']} 2.5%
  );
`;

const PhoneTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const PhoneMonth = styled.p`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.94rem;
  font-weight: 800;
`;

const PhoneBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.65rem;
  padding: 0 0.6rem;
  border: 1px solid
    color-mix(
      in oklch,
      ${MOSAIC_GOLD},
      ${({ theme }) => theme.colors.border} 58%
    );
  border-radius: 999px;
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  background-color: color-mix(
    in oklch,
    ${MOSAIC_GOLD},
    ${({ theme }) => theme.colors.background} 84%
  );
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.35rem;
`;

const CalendarTile = styled.span<{
  $layout: 'one' | 'two' | 'three' | 'four';
  $delay: string;
}>`
  display: grid;
  grid-template-columns: ${({ $layout }) =>
    $layout === 'one' ? '1fr' : 'repeat(2, minmax(0, 1fr))'};
  grid-template-rows: ${({ $layout }) =>
    $layout === 'three' || $layout === 'four'
      ? 'repeat(2, minmax(0, 1fr))'
      : '1fr'};
  gap: 1px;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  background-color: oklch(18% 0.01 250 / 0.12);
  box-shadow: inset 0 -1px 0 oklch(18% 0.01 250 / 0.12);
  animation: tile-breathe 7s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  animation-delay: ${({ $delay }) => $delay};

  span:last-child {
    ${({ $layout }) => ($layout === 'three' ? 'grid-column: 1 / -1;' : '')}
  }

  @keyframes tile-breathe {
    0%,
    76%,
    100% {
      transform: translateY(0);
      filter: saturate(1);
    }

    84% {
      transform: translateY(-3px);
      filter: saturate(1.16);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CalendarTileSegment = styled.span<{ $color: string }>`
  min-width: 0;
  min-height: 0;
  background: ${EMOTION_SURFACE_GRADIENT}, ${({ $color }) => $color};
`;

const CalendarBlank = styled.span`
  aspect-ratio: 1;
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows:
      auto
      minmax(8.75rem, auto)
      minmax(8.5rem, auto)
      auto;
    align-items: stretch;
  }
`;

const ResearchQuote = styled.article`
  display: grid;
  gap: 1rem;
  min-height: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 760px) {
    grid-row: span 4;
    grid-template-rows: subgrid;
  }
`;

const ResearchLabel = styled.p`
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
`;

const ResearchMethod = styled.p`
  max-width: 62ch;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const ResearchInsightNote = styled.p`
  max-width: 62ch;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const ResearchExcerpt = styled.blockquote`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.45;
`;

const ResearchBlock = styled.div`
  display: grid;
  align-content: start;
  gap: 0.35rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ResearchRowLabel = styled.p`
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
`;

const ResearchRowText = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const VisualSystemLead = styled.p`
  max-width: 68ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
`;

const VisualSubsection = styled.section`
  display: grid;
  gap: clamp(1.1rem, 3vw, 1.75rem);
  margin-top: clamp(2.25rem, 5vw, 3.75rem);
`;

const VisualSubheading = styled.h3`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.08;
`;

const VisualFeatureLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: start;

  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(17rem, 0.7fr);
  }
`;

const VisualFoundationsPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: clamp(1.5rem, 4vw, 2.5rem);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const VisualFoundationColumn = styled.div`
  display: grid;
  align-content: start;
  gap: clamp(1.25rem, 3vw, 1.75rem);
  padding: clamp(1.35rem, 3vw, 2rem);

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: 760px) {
    & + & {
      border-top: 0;
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

const FoundationGroup = styled.div`
  display: grid;
  align-content: start;
  gap: 0.85rem;

  & + & {
    padding-top: clamp(0.5rem, 2vw, 0.85rem);
  }
`;

const FoundationEyebrow = styled.p`
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1;
  text-transform: uppercase;
`;

const FoundationTitle = styled.h4`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;

const FoundationText = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ColorTokenGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.95rem 1rem;

  @media (min-width: 380px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ColorToken = styled.div`
  display: grid;
  grid-template-columns: 2.15rem minmax(0, 1fr);
  align-items: center;
  align-content: start;
  gap: 0.65rem;
  min-width: 0;

  > span:last-child {
    display: grid;
    gap: 0.18rem;
    min-width: 0;
  }
`;

const ColorTokenSwatch = styled.span<{ $color: string }>`
  width: 2.15rem;
  height: 2.15rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.45rem;
  background-color: ${({ $color }) => $color};
`;

const ColorTokenName = styled.span`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.25;
  overflow-wrap: anywhere;
`;

const ColorTokenValue = styled.span`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.25;
  white-space: nowrap;
`;

const EmotionColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem 0.65rem;
  padding-top: 0.15rem;

  @media (min-width: 560px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const EmotionColorItem = styled.div`
  display: grid;
  align-content: start;
  gap: 0.45rem;
  min-width: 0;

  > span:last-child {
    display: grid;
    gap: 0.18rem;
    min-width: 0;
  }
`;

const EmotionColorSwatch = styled.span<{ $color: string }>`
  width: 2rem;
  aspect-ratio: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.45rem;
  background: ${EMOTION_SURFACE_GRADIENT}, ${({ $color }) => $color};
`;

const EmotionColorName = styled.span`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.25;
  overflow-wrap: anywhere;
`;

const EmotionColorValue = styled.span`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.66rem;
  font-weight: 600;
  line-height: 1.25;
  overflow-wrap: anywhere;
`;

const TypeRoleList = styled.div`
  display: grid;
  margin-top: 0.15rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TypeRole = styled.div<{ $role: 'heading' | 'body' | 'label' }>`
  display: grid;
  gap: 0.5rem;
  padding: clamp(1rem, 2vw, 1.25rem) 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }

  span {
    color: ${({ theme }) =>
      getCaseStudyGoldTextColor(theme.colors['default-text'])};
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    line-height: 1;
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.colors['default-text']};
    font-family: ${({ $role }) => {
      if ($role === 'heading') {
        return '"Fraunces", Georgia, serif';
      }

      if ($role === 'label') {
        return '"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      }

      return "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    }};
    font-size: ${({ $role }) => {
      if ($role === 'label') {
        return '0.82rem';
      }

      return $role === 'heading' ? '1.35rem' : '0.95rem';
    }};
    font-weight: ${({ $role }) => ($role === 'heading' ? 600 : 700)};
    letter-spacing: ${({ $role }) => {
      if ($role === 'heading') {
        return '-0.02em';
      }

      return $role === 'label' ? '0.06em' : 0;
    }};
    line-height: ${({ $role }) => ($role === 'heading' ? 1.2 : 1.35)};
  }

  p {
    color: ${({ theme }) => theme.colors['secondary-text']};
    font-size: 0.82rem;
    line-height: 1.5;
  }
`;

const VisualScreensPair = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 4vw, 2.5rem);
  align-items: start;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  > * {
    justify-self: center;
  }
`;

const AccessibilityLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: start;

  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(17rem, 0.7fr);
  }
`;

const ArchitectureContent = styled.div`
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  width: 100%;
`;

const ArchitectureLead = styled.p`
  margin: 0;
  max-width: 68ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
`;

const ArchitectureTechLine = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.7rem;
  margin: 0;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ArchitectureTechLabel = styled.span`
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1;
  text-transform: uppercase;
`;

const ArchitectureTechValue = styled.span`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.55;
`;

const ArchitecturePanel = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ArchitecturePanelHeader = styled.div`
  padding: clamp(1.1rem, 2.5vw, 1.5rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ArchitecturePanelTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.16;
`;

const ArchitecturePanelGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto auto auto minmax(0, 1fr);
    row-gap: 1rem;
    align-items: stretch;
  }
`;

const ArchitecturePanelColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 1rem;
  padding: clamp(1.1rem, 2.5vw, 1.5rem);

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: 760px) {
    grid-row: span 4;
    grid-template-rows: subgrid;
    align-content: stretch;
    gap: 1rem;

    & + & {
      border-top: 0;
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

const ArchitectureEyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1;
  text-transform: uppercase;
`;

const ArchitectureColumnTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;

const ArchitectureColumnText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ArchitectureDataList = styled.div`
  display: grid;
  align-self: start;
  gap: 1px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.border};
`;

const ArchitectureDataItem = styled.div`
  display: grid;
  grid-template-columns: minmax(4.4rem, 0.7fr) minmax(0, 1fr);
  gap: 0.75rem;
  padding: 0.65rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ArchitectureDataLabel = styled.span`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const ArchitectureDataValue = styled.span`
  display: inline-flex;
  align-items: center;
  min-width: 0;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.84rem;
  font-weight: 600;
  overflow-wrap: anywhere;
`;

const ArchitectureReasonList = styled.ul`
  display: grid;
  align-self: start;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  list-style: none;
`;

const ArchitectureReasonItem = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.55rem;
  padding: 0.72rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.55;

  &::before {
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.52rem;
    border-radius: 999px;
    background-color: color-mix(
      in oklch,
      ${MOSAIC_GOLD},
      ${({ theme }) => theme.colors['default-text']} 34%
    );
    content: '';
  }

  &:last-child {
    border-bottom: 0;
  }
`;

const ArchitecturePostCopy = styled.p`
  margin: 0;
  max-width: 68ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const InteractionLead = styled.p`
  max-width: 68ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
`;

const InteractionDecisionList = styled.div`
  display: grid;
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  > * {
    padding: clamp(1.5rem, 4vw, 2.5rem) 0;
  }

  > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  > *:last-child {
    padding-bottom: 0;
  }
`;

const InteractionDecision = styled.article`
  display: grid;
  gap: 0.75rem;
  max-width: 72ch;
`;

const InteractionDecisionEyebrow = styled.p`
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1;
  text-transform: uppercase;
`;

const InteractionDecisionTitle = styled.h3`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.16;
`;

const InteractionDecisionText = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const InteractionFlowVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.9rem, 2.5vw, 1.25rem);
  width: 100%;
  margin-top: 0.25rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const InteractionScreenImageFrame = styled.figure`
  width: 100%;
  margin: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  aspect-ratio: 9 / 19.5;
  background-color: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.background} 94%
  );
`;

const InteractionScreenImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InteractionFlowCaption = styled.p`
  max-width: 62ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.65;
`;

const ReflectionViewsPair = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 4vw, 2.5rem);
  margin-top: 0.25rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  > * {
    justify-self: center;
  }
`;

const TileProgression = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 0.25rem;

  @media (min-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, max-content));
  }

  @media (min-width: 760px) {
    grid-template-columns: repeat(4, minmax(0, max-content));
  }
`;

const TileProgressionTile = styled.span<{
  $layout: 'one' | 'two' | 'three' | 'four';
}>`
  display: grid;
  grid-template-columns: ${({ $layout }) =>
    $layout === 'one' ? '1fr' : 'repeat(2, minmax(0, 1fr))'};
  grid-template-rows: ${({ $layout }) =>
    $layout === 'three' || $layout === 'four'
      ? 'repeat(2, minmax(0, 1fr))'
      : '1fr'};
  gap: 1px;
  overflow: hidden;
  width: 4.75rem;
  aspect-ratio: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.65rem;
  background-color: ${({ theme }) => theme.colors.border};
  box-shadow: inset 0 -1px 0 oklch(18% 0.01 250 / 0.08);

  span {
    min-width: 0;
    min-height: 0;
    background-image: ${EMOTION_SURFACE_GRADIENT};
  }

  span:last-child {
    ${({ $layout }) => ($layout === 'three' ? 'grid-column: 1 / -1;' : '')}
  }
`;

const TileProgressionCaption = styled.p`
  max-width: 52ch;
  margin-top: 0.65rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.55;
`;

const NextDirectionsList = styled.div`
  display: grid;
  margin-bottom: clamp(1.5rem, 4vw, 2.25rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  > * {
    padding: clamp(1.25rem, 3vw, 2rem) 0;
  }

  > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  > *:last-child {
    padding-bottom: 0;
  }
`;

const CORE_EMOTION_COLORS = {
  happy: '#F2A900',
  sad: '#3D71D9',
  calm: '#00B894',
  angry: '#FF2D55',
  fearful: '#FF8A00',
  surprised: '#C026D3',
  disgusted: '#7C3AED',
} as const;

const HERO_EMOTION_COLOR_SCALES = [
  ['#F2A900', '#F4C95D', '#FFE08A'], // Happy
  ['#3D71D9', '#53C7F5', '#91E2FF'], // Sad
  ['#00B894', '#22CFA3', '#8FE6C8'], // Calm
  ['#FF2D55', '#F26D6D', '#FFA19A'], // Angry
  ['#FF8A00', '#F2A65A', '#FFC078'], // Fearful
  ['#C026D3', '#D946EF', '#F0ABFC'], // Surprised
  ['#7C3AED', '#A77CEB', '#C9A7FF'], // Disgusted
] as const;

type HeroEmotionColor = (typeof HERO_EMOTION_COLOR_SCALES)[number][number];

type HeroCalendarDay = {
  day: number;
  colors: HeroEmotionColor[];
};

type HeroCalendarTileLayout = 'one' | 'two' | 'three' | 'four';

function getPreviousMonthCalendar(referenceDate = new Date()) {
  const finalDayOfPreviousMonth = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    0,
  );
  const year = finalDayOfPreviousMonth.getFullYear();
  const monthIndex = finalDayOfPreviousMonth.getMonth();
  const daysInMonth = finalDayOfPreviousMonth.getDate();
  const leadingEmptyCells = new Date(year, monthIndex, 1).getDay();
  const totalCells =
    Math.max(5, Math.ceil((leadingEmptyCells + daysInMonth) / 7)) * 7;

  const cells: Array<HeroCalendarDay | null> = Array.from(
    { length: totalCells },
    (_, cellIndex): HeroCalendarDay | null => {
      const day = cellIndex - leadingEmptyCells + 1;

      if (day < 1 || day > daysInMonth) {
        return null;
      }

      const segmentCount = ((day + monthIndex) % 4) + 1;
      const startingFamilyIndex =
        (day * 2 + monthIndex) % HERO_EMOTION_COLOR_SCALES.length;
      const colors = Array.from({ length: segmentCount }, (_, colorOffset) => {
        const familyIndex =
          (startingFamilyIndex + colorOffset) %
          HERO_EMOTION_COLOR_SCALES.length;
        const stops = HERO_EMOTION_COLOR_SCALES[familyIndex];
        const stopIndex = (day + monthIndex + colorOffset * 2) % stops.length;

        return stops[stopIndex];
      });

      return {
        day,
        colors,
      };
    },
  );

  return {
    daysInMonth,
    monthDate: new Date(year, monthIndex, 1),
    monthKey: `${year}-${monthIndex}`,
    cells,
  };
}

const heroCalendar = getPreviousMonthCalendar();

function getHeroCalendarTileLayout(
  colors: HeroCalendarDay['colors'],
): HeroCalendarTileLayout {
  return ['one', 'two', 'three', 'four'][
    colors.length - 1
  ] as HeroCalendarTileLayout;
}

const researchSignals = [
  {
    label: 'Friction',
    excerpt: 'multiple entry screens are redundant and nauseating',
    risk: 'When a check-in feels like a form, reflection can become work before someone records anything.',
    response:
      'Start with a broad emotion family and let people save a minimal check-in in as few as three taps. Journaling and added detail remain optional.',
  },
  {
    label: 'Emotional range',
    excerpt:
      'Sometimes I’m feeling normal or good or bad, but also I can feel content or anxious, or nervous...',
    risk: 'A flat emotion list creates opposite failure modes: too few choices can flatten someone’s experience, while too many can create decision fatigue.',
    response:
      'Use seven familiar emotion families as starting points, then let people explore more specific feelings only when they want greater nuance.',
  },
  {
    label: 'Trust',
    excerpt:
      'I want to track my mental health without worrying about my data being collected.',
    risk: 'When people are uncertain how sensitive reflections are handled, they may hold back or avoid the product altogether.',
    response:
      'Treat privacy as a visible product boundary: sensitive mood and journal content stays on the device by default, while product telemetry excludes personal reflection content.',
  },
];

function MosaicHeroScene() {
  return (
    <HeroScene aria-labelledby="mosaic-hero-title">
      <SceneCopy>
        <SceneTitle id="mosaic-hero-title">
          {mosaicCaseStudyMeta.title}
        </SceneTitle>
        <SceneSubtitle>See the pattern in your pieces</SceneSubtitle>
        <SceneText>
          An emotion journal that turns quick emotional check-ins into a visual
          record you can return to over time.
        </SceneText>
      </SceneCopy>

      <PhoneStage aria-hidden="true">
        <CalendarHalo>
          {heroCalendar.cells.map((tile) =>
            tile ? (
              <CalendarHaloTile
                key={`${heroCalendar.monthKey}-halo-${tile.day}`}
                $color={tile.colors[0]}
              />
            ) : null,
          )}
        </CalendarHalo>
        <PhoneFrame>
          <PhoneScreen>
            <PhoneTop>
              <PhoneMonth>
                {heroCalendar.monthDate.toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </PhoneMonth>
              <PhoneBadge>{heroCalendar.daysInMonth} day streak</PhoneBadge>
            </PhoneTop>
            <CalendarGrid>
              {heroCalendar.cells.map((tile, index) => {
                if (!tile) {
                  return (
                    <CalendarBlank
                      key={`${heroCalendar.monthKey}-blank-${index}`}
                      aria-hidden="true"
                    />
                  );
                }

                return (
                  <CalendarTile
                    key={`${heroCalendar.monthKey}-day-${tile.day}`}
                    $layout={getHeroCalendarTileLayout(tile.colors)}
                    $delay={`${index * 0.09}s`}
                  >
                    {tile.colors.map((color) => (
                      <CalendarTileSegment key={color} $color={color} />
                    ))}
                  </CalendarTile>
                );
              })}
            </CalendarGrid>
          </PhoneScreen>
        </PhoneFrame>
      </PhoneStage>

      <HeroMeta aria-label="Mosaic case study details">
        <HeroMetaItem>
          <HeroMetaLabel>Year</HeroMetaLabel>
          <HeroMetaValue>{mosaicCaseStudyMeta.year}</HeroMetaValue>
        </HeroMetaItem>
        <HeroMetaItem>
          <HeroMetaLabel>Role</HeroMetaLabel>
          <HeroMetaValue>{mosaicCaseStudyMeta.role}</HeroMetaValue>
        </HeroMetaItem>
        <HeroMetaItem>
          <HeroMetaLabel>Type</HeroMetaLabel>
          <HeroMetaValue>{mosaicCaseStudyMeta.type}</HeroMetaValue>
        </HeroMetaItem>
        <HeroMetaItem>
          <HeroMetaLabel>Industry</HeroMetaLabel>
          <HeroMetaValue>{mosaicCaseStudyMeta.industry}</HeroMetaValue>
        </HeroMetaItem>
        <HeroMetaItem>
          <HeroMetaLabel>Stack</HeroMetaLabel>
          <HeroMetaValue>{mosaicCaseStudyMeta.tech}</HeroMetaValue>
        </HeroMetaItem>
      </HeroMeta>
    </HeroScene>
  );
}

export default function MosaicCaseStudy() {
  return (
    <CaseStudyLayout
      title={mosaicCaseStudyMeta.title}
      eyebrow={mosaicCaseStudyMeta.eyebrow}
      summary={mosaicCaseStudyMeta.summary}
      year={mosaicCaseStudyMeta.year}
      role={mosaicCaseStudyMeta.role}
      tech={mosaicCaseStudyMeta.tech}
      heroVisual={<MosaicHeroScene />}
      showIntro={false}
      links={mosaicCaseStudyMeta.links}
    >
      <CaseStudySection title="Overview">
        <p>
          Mosaic is an emotion journal built for quick, low-pressure reflection.
          People start with one of seven emotion families, add detail only when
          it helps, and can save a check-in in as few as three taps. Up to four
          check-ins become one daily mosaic tile, creating a visual record that
          makes shifts over time easier to revisit.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The problem" spacing="compact">
        <p>
          Mood tracking can become another task to manage. In competitive app
          review research, I repeatedly saw frustration with long check-in
          flows, unclear emotion language, privacy concerns, and tools that
          either oversimplified a day or demanded too much effort. Mosaic was
          designed to hold that balance: quick enough for everyday use,
          expressive enough for nuance, and calm enough to support honest
          reflection.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Competitive review signals" spacing="spacious">
        <ResearchMethod>
          To understand where existing mood trackers break down, I reviewed 150+
          public App Store reviews across 5+ mood-tracking and journaling apps.
          I grouped repeated feedback into three themes that shaped Mosaic’s
          interaction model.
        </ResearchMethod>
        <ResearchGrid>
          {researchSignals.map((quote) => (
            <ResearchQuote key={quote.label}>
              <ResearchLabel>{quote.label}</ResearchLabel>
              <ResearchExcerpt>
                <p>&ldquo;{quote.excerpt}&rdquo;</p>
              </ResearchExcerpt>
              <ResearchBlock>
                <ResearchRowLabel>Product risk</ResearchRowLabel>
                <ResearchRowText>{quote.risk}</ResearchRowText>
              </ResearchBlock>
              <ResearchBlock>
                <ResearchRowLabel>Design response</ResearchRowLabel>
                <ResearchRowText>{quote.response}</ResearchRowText>
              </ResearchBlock>
            </ResearchQuote>
          ))}
        </ResearchGrid>
        <ResearchInsightNote>
          Reviews also showed that logging alone was not enough. People wanted a
          clearer way to look back at emotional patterns without being pushed
          into a dense dashboard. That informed Mosaic’s weekly and monthly
          insight views.
        </ResearchInsightNote>
      </CaseStudySection>

      <CaseStudySection title="Key interaction decisions" spacing="spacious">
        <InteractionLead>
          The goal was not to fit every possible tracking option into one
          check-in. It was to make the first choice easy while ensuring that
          each entry could become more useful over time.
        </InteractionLead>
        <InteractionDecisionList>
          <InteractionDecision>
            <InteractionDecisionEyebrow>
              Start simple
            </InteractionDecisionEyebrow>
            <InteractionDecisionTitle>
              Start simple, add detail when it helps
            </InteractionDecisionTitle>
            <InteractionDecisionText>
              People do not always need the same level of emotional specificity.
              Mosaic begins with seven emotion families, then lets someone
              explore more specific feelings only when they want to. The default
              stays quick, without treating every day as simple.
            </InteractionDecisionText>
            <InteractionFlowVisual aria-label="Check-in flow screenshot placeholders">
              <InteractionScreenImageFrame>
                <InteractionScreenImage
                  src={ci1}
                  alt="Mosaic emotion-family selection screen"
                />
              </InteractionScreenImageFrame>
              <InteractionScreenImageFrame>
                <InteractionScreenImage
                  src={ci3}
                  alt="Mosaic calm emotion selection"
                />
              </InteractionScreenImageFrame>
              <InteractionScreenImageFrame>
                <InteractionScreenImage
                  src={ci4}
                  alt="Mosaic check-in screen"
                />
              </InteractionScreenImageFrame>
            </InteractionFlowVisual>
            <InteractionFlowCaption>
              Every check-in starts with a broad choice. More specific feelings,
              notes, and context tags remain available without becoming required
              steps.
            </InteractionFlowCaption>
          </InteractionDecision>

          <InteractionDecision>
            <InteractionDecisionEyebrow>
              Represent change
            </InteractionDecisionEyebrow>
            <InteractionDecisionTitle>
              Let a day hold more than one feeling
            </InteractionDecisionTitle>
            <InteractionDecisionText>
              A single label cannot always represent a full day. Mosaic allows
              up to four check-ins, then combines them into one daily tile. That
              makes emotional shifts visible without turning a day into a
              scattered list of separate logs.
            </InteractionDecisionText>
            <div>
              <TileProgression aria-label="Daily tile progression">
                <TileProgressionTile $layout="one">
                  <span
                    style={{ backgroundColor: CORE_EMOTION_COLORS.happy }}
                  />
                </TileProgressionTile>
                <TileProgressionTile $layout="two">
                  <span
                    style={{ backgroundColor: CORE_EMOTION_COLORS.happy }}
                  />
                  <span style={{ backgroundColor: CORE_EMOTION_COLORS.calm }} />
                </TileProgressionTile>
                <TileProgressionTile $layout="three">
                  <span
                    style={{ backgroundColor: CORE_EMOTION_COLORS.happy }}
                  />
                  <span style={{ backgroundColor: CORE_EMOTION_COLORS.sad }} />
                  <span style={{ backgroundColor: CORE_EMOTION_COLORS.calm }} />
                </TileProgressionTile>
                <TileProgressionTile $layout="four">
                  <span
                    style={{ backgroundColor: CORE_EMOTION_COLORS.happy }}
                  />
                  <span style={{ backgroundColor: CORE_EMOTION_COLORS.calm }} />
                  <span style={{ backgroundColor: CORE_EMOTION_COLORS.sad }} />
                  <span
                    style={{
                      backgroundColor: CORE_EMOTION_COLORS.surprised,
                    }}
                  />
                </TileProgressionTile>
              </TileProgression>
              <TileProgressionCaption>
                Each new check-in adds another segment, so one tile can hold the
                shape of a changing day.
              </TileProgressionCaption>
            </div>
          </InteractionDecision>

          <InteractionDecision>
            <InteractionDecisionEyebrow>
              Reflect gently
            </InteractionDecisionEyebrow>
            <InteractionDecisionTitle>
              Turn reflection into a pattern, not a score
            </InteractionDecisionTitle>
            <InteractionDecisionText>
              Check-ins become more useful when they can be revisited in
              context. Monthly and yearly mosaic views help people step back
              from individual moments and notice what has been showing up over
              time, without turning reflection into a score.
            </InteractionDecisionText>
            <ReflectionViewsPair>
              <InteractionScreenImageFrame>
                <InteractionScreenImage src={m} alt="Mosaic monthly view" />
              </InteractionScreenImageFrame>
              <InteractionScreenImageFrame>
                <InteractionScreenImage src={y} alt="Mosaic yearly view" />
              </InteractionScreenImageFrame>
            </ReflectionViewsPair>
            <InteractionFlowCaption>
              The monthly view keeps individual days legible. The yearly view
              makes the longer rhythm of emotional reflection easier to see at a
              glance.
            </InteractionFlowCaption>
          </InteractionDecision>
        </InteractionDecisionList>
      </CaseStudySection>

      <CaseStudySection title="Designing the visual system" spacing="spacious">
        <VisualSystemLead>
          Mosaic uses a dark, quiet foundation so emotional reflection can feel
          personal rather than clinical. The interface stays restrained while
          color, type, and small moments of motion give each check-in its own
          presence.
        </VisualSystemLead>

        <VisualFoundationsPanel>
          <VisualFoundationColumn>
            <FoundationGroup>
              <FoundationEyebrow>System palette</FoundationEyebrow>
              <FoundationTitle>Quiet surfaces, clear hierarchy</FoundationTitle>
              <FoundationText>
                Mosaic keeps its interface colors restrained so the colors
                attached to emotional entries can remain the most expressive
                part of the experience.
              </FoundationText>
              <ColorTokenGrid aria-label="Mosaic system palette">
                <ColorToken>
                  <ColorTokenSwatch $color="#000000" />
                  <span>
                    <ColorTokenName>Canvas</ColorTokenName>
                    <ColorTokenValue>#000000</ColorTokenValue>
                  </span>
                </ColorToken>
                <ColorToken>
                  <ColorTokenSwatch $color="#1C1C1E" />
                  <span>
                    <ColorTokenName>Surface</ColorTokenName>
                    <ColorTokenValue>#1C1C1E</ColorTokenValue>
                  </span>
                </ColorToken>
                <ColorToken>
                  <ColorTokenSwatch $color="#C09040" />
                  <span>
                    <ColorTokenName>Gold</ColorTokenName>
                    <ColorTokenValue>#C09040</ColorTokenValue>
                  </span>
                </ColorToken>
                <ColorToken>
                  <ColorTokenSwatch $color="#FFFFFF" />
                  <span>
                    <ColorTokenName>Primary text</ColorTokenName>
                    <ColorTokenValue>#FFFFFF</ColorTokenValue>
                  </span>
                </ColorToken>
                <ColorToken>
                  <ColorTokenSwatch $color="#A1A1A6" />
                  <span>
                    <ColorTokenName>Muted text</ColorTokenName>
                    <ColorTokenValue>#A1A1A6</ColorTokenValue>
                  </span>
                </ColorToken>
                <ColorToken>
                  <ColorTokenSwatch $color="#3A3A3C" />
                  <span>
                    <ColorTokenName>Divider</ColorTokenName>
                    <ColorTokenValue>#3A3A3C</ColorTokenValue>
                  </span>
                </ColorToken>
              </ColorTokenGrid>
            </FoundationGroup>
            <FoundationGroup>
              <FoundationEyebrow>Emotion families</FoundationEyebrow>
              <FoundationText>
                Color variation belongs to emotional entries, while the
                surrounding interface stays intentionally quiet.
              </FoundationText>
              <EmotionColorGrid aria-label="Mosaic emotion family colors">
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#F2A900" />
                  <span>
                    <EmotionColorName>Happy</EmotionColorName>
                    <EmotionColorValue>#F2A900</EmotionColorValue>
                  </span>
                </EmotionColorItem>
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#00B894" />
                  <span>
                    <EmotionColorName>Calm</EmotionColorName>
                    <EmotionColorValue>#00B894</EmotionColorValue>
                  </span>
                </EmotionColorItem>
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#3D71D9" />
                  <span>
                    <EmotionColorName>Sad</EmotionColorName>
                    <EmotionColorValue>#3D71D9</EmotionColorValue>
                  </span>
                </EmotionColorItem>
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#FF2D55" />
                  <span>
                    <EmotionColorName>Angry</EmotionColorName>
                    <EmotionColorValue>#FF2D55</EmotionColorValue>
                  </span>
                </EmotionColorItem>
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#FF8A00" />
                  <span>
                    <EmotionColorName>Fearful</EmotionColorName>
                    <EmotionColorValue>#FF8A00</EmotionColorValue>
                  </span>
                </EmotionColorItem>
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#C026D3" />
                  <span>
                    <EmotionColorName>Surprised</EmotionColorName>
                    <EmotionColorValue>#C026D3</EmotionColorValue>
                  </span>
                </EmotionColorItem>
                <EmotionColorItem>
                  <EmotionColorSwatch $color="#7C3AED" />
                  <span>
                    <EmotionColorName>Disgusted</EmotionColorName>
                    <EmotionColorValue>#7C3AED</EmotionColorValue>
                  </span>
                </EmotionColorItem>
              </EmotionColorGrid>
            </FoundationGroup>
          </VisualFoundationColumn>
          <VisualFoundationColumn>
            <FoundationGroup>
              <FoundationEyebrow>Type roles</FoundationEyebrow>
              <FoundationTitle>Editorial warmth, clear utility</FoundationTitle>
              <FoundationText>
                Typography separates reflection from supporting information
                without making the interface feel ornamental.
              </FoundationText>
              <TypeRoleList>
                <TypeRole $role="heading">
                  <span>HEADING</span>
                  <strong>How are you feeling?</strong>
                  <p>
                    Editorial display type for page titles and reflective
                    moments.
                  </p>
                </TypeRole>
                <TypeRole $role="body">
                  <span>BODY</span>
                  <strong>
                    A calm, readable voice for everyday reflection.
                  </strong>
                  <p>
                    Neutral system text for notes, choices, and supporting copy.
                  </p>
                </TypeRole>
                <TypeRole $role="label">
                  <span>LABEL</span>
                  <strong>JUNE 30 · 9:15 AM</strong>
                  <p>
                    Monospace labels for dates, metadata, and small system
                    details.
                  </p>
                </TypeRole>
              </TypeRoleList>
            </FoundationGroup>
          </VisualFoundationColumn>
        </VisualFoundationsPanel>

        <VisualSubsection>
          <VisualSubheading>
            Quiet interface, expressive emotion
          </VisualSubheading>
          <VisualFeatureLayout>
            <div>
              <p>
                Mosaic keeps the interface deliberately quiet. The black canvas,
                softened surfaces, and restrained gold accent create hierarchy
                without competing with the colors attached to each emotion.
              </p>
              <p>
                The Today screen is the clearest expression of that balance.
                Emotion colors carry the personal signal, while the surrounding
                interface makes space for the moment instead of treating it like
                a dashboard.
              </p>
            </div>
            <InteractionScreenImageFrame>
              <InteractionScreenImage src={t} alt="Mosaic today screen" />
            </InteractionScreenImageFrame>
          </VisualFeatureLayout>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>Insights without a dashboard</VisualSubheading>
          <p>
            Insights are designed as a paced reflection rather than one dense
            dashboard. Emotional summaries, recurring feelings, and timing
            patterns are grouped into distinct moments, so people can take in
            what stands out without having to decode everything at once.
          </p>
          <VisualScreensPair>
            <InteractionScreenImageFrame>
              <InteractionScreenImage src={e1} alt="Mosaic insights screen 1" />
            </InteractionScreenImageFrame>
            <InteractionScreenImageFrame>
              <InteractionScreenImage src={e2} alt="Mosaic insights screen 2" />
            </InteractionScreenImageFrame>
          </VisualScreensPair>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>Designed to adapt</VisualSubheading>
          <AccessibilityLayout>
            <div>
              <p>
                Accessibility is part of the same product system, not a separate
                version of Mosaic. High-contrast text makes subtle text and
                borders easier to see. Reduced motion removes screen transitions
                and heavier animations. Haptic feedback can also be turned off
                entirely.
              </p>
              <p>
                Those settings let the interface adapt to different needs while
                preserving the same core experience.
              </p>
            </div>
            <InteractionScreenImageFrame>
              <InteractionScreenImage
                src={a11y}
                alt="Mosaic accessibility settings"
              />
            </InteractionScreenImageFrame>
          </AccessibilityLayout>
        </VisualSubsection>
      </CaseStudySection>

      <CaseStudySection title="Architecture" spacing="spacious">
        <ArchitectureContent>
          <ArchitectureTechLine>
            <ArchitectureTechLabel>Built with</ArchitectureTechLabel>
            <ArchitectureTechValue>
              React Native · Expo · TypeScript · SQLite + Drizzle · Zustand ·
              MMKV · Unistyles
            </ArchitectureTechValue>
          </ArchitectureTechLine>

          <ArchitectureLead>
            The technical work focused on making a simple check-in useful beyond
            the moment it is saved. A single entry can shape the day’s mosaic
            and contribute to longer-term patterns, while Mosaic keeps the
            emotional language consistent across the app.
          </ArchitectureLead>

          <ArchitecturePanel>
            <ArchitecturePanelHeader>
              <ArchitecturePanelTitle>
                One check-in, many ways to reflect
              </ArchitecturePanelTitle>
            </ArchitecturePanelHeader>
            <ArchitecturePanelGrid>
              <ArchitecturePanelColumn>
                <ArchitectureEyebrow>Shared emotion system</ArchitectureEyebrow>
                <ArchitectureColumnTitle>
                  Define a feeling once
                </ArchitectureColumnTitle>
                <ArchitectureColumnText>
                  Each feeling belongs to an emotion family and has display
                  details that can be reused throughout Mosaic.
                </ArchitectureColumnText>
                <ArchitectureDataList aria-label="Shared emotion system example">
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Family</ArchitectureDataLabel>
                    <ArchitectureDataValue>Happy</ArchitectureDataValue>
                  </ArchitectureDataItem>
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Feeling</ArchitectureDataLabel>
                    <ArchitectureDataValue>Joyful</ArchitectureDataValue>
                  </ArchitectureDataItem>
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Shown as</ArchitectureDataLabel>
                    <ArchitectureDataValue>label + color</ArchitectureDataValue>
                  </ArchitectureDataItem>
                </ArchitectureDataList>
              </ArchitecturePanelColumn>

              <ArchitecturePanelColumn>
                <ArchitectureEyebrow>Saved check-in</ArchitectureEyebrow>
                <ArchitectureColumnTitle>
                  Keep the moment simple
                </ArchitectureColumnTitle>
                <ArchitectureColumnText>
                  Each check-in remembers which feeling was selected and when it
                  happened. Notes and context tags stay optional.
                </ArchitectureColumnText>
                <ArchitectureDataList aria-label="Saved check-in example">
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Feeling</ArchitectureDataLabel>
                    <ArchitectureDataValue>Joyful</ArchitectureDataValue>
                  </ArchitectureDataItem>
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Date</ArchitectureDataLabel>
                    <ArchitectureDataValue>June 30th</ArchitectureDataValue>
                  </ArchitectureDataItem>
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Recorded</ArchitectureDataLabel>
                    <ArchitectureDataValue>9:15 AM</ArchitectureDataValue>
                  </ArchitectureDataItem>
                  <ArchitectureDataItem>
                    <ArchitectureDataLabel>Optional</ArchitectureDataLabel>
                    <ArchitectureDataValue>note + tags</ArchitectureDataValue>
                  </ArchitectureDataItem>
                </ArchitectureDataList>
              </ArchitecturePanelColumn>

              <ArchitecturePanelColumn>
                <ArchitectureEyebrow>Why it matters</ArchitectureEyebrow>
                <ArchitectureColumnTitle>
                  Reuse the same foundation
                </ArchitectureColumnTitle>
                <ArchitectureColumnText>
                  That small structure gives Mosaic room to support reflection
                  at different points in time.
                </ArchitectureColumnText>
                <ArchitectureReasonList>
                  <ArchitectureReasonItem>
                    Up to four check-ins can form one daily mosaic tile.
                  </ArchitectureReasonItem>
                  <ArchitectureReasonItem>
                    Entries can be grouped into weekly and monthly patterns.
                  </ArchitectureReasonItem>
                  <ArchitectureReasonItem>
                    Labels and color palettes can evolve without changing past
                    check-ins.
                  </ArchitectureReasonItem>
                </ArchitectureReasonList>
              </ArchitecturePanelColumn>
            </ArchitecturePanelGrid>
          </ArchitecturePanel>

          <ArchitecturePostCopy>
            Instead of copying a label or color into every check-in, Mosaic
            looks up those display details when it needs them. That leaves room
            to refine wording, add translations, or adjust palettes over time
            without rewriting someone’s history.
          </ArchitecturePostCopy>

          <CaseStudyCallout label="Key takeaway">
            One small check-in can stay useful across the mosaic, insights, and
            future product improvements without changing someone’s history.
          </CaseStudyCallout>
        </ArchitectureContent>
      </CaseStudySection>

      <CaseStudySection
        title="Early release, ongoing learning"
        spacing="spacious"
      >
        <p>
          Mosaic is live and still early. The next phase is focused on learning
          where more depth would genuinely help, while keeping the core check-in
          private, lightweight, and easy to return to.
        </p>
        <NextDirectionsList>
          <InteractionDecision>
            <InteractionDecisionEyebrow>Capacity</InteractionDecisionEyebrow>
            <InteractionDecisionTitle>
              Validate room for a changing day
            </InteractionDecisionTitle>
            <InteractionDecisionText>
              The current four-entry limit keeps a day easy to read at a glance.
              I&apos;ll use privacy-conscious interaction signals to understand
              whether people reach that limit or want to capture more moments. A
              higher limit is worth testing only if the daily mosaic can still
              make those moments easy to read.
            </InteractionDecisionText>
          </InteractionDecision>

          <InteractionDecision>
            <InteractionDecisionEyebrow>
              Private insights
            </InteractionDecisionEyebrow>
            <InteractionDecisionTitle>
              Explore AI-assisted pattern reflection
            </InteractionDecisionTitle>
            <InteractionDecisionText>
              Explore optional AI-assisted summaries that help people notice
              recurring emotions, shifts over time, and meaningful timing
              patterns in their own history. The goal is to turn existing
              check-ins into clearer, more useful observations, with on-device
              processing where supported.
            </InteractionDecisionText>
          </InteractionDecision>

          <InteractionDecision>
            <InteractionDecisionEyebrow>
              Color access
            </InteractionDecisionEyebrow>
            <InteractionDecisionTitle>
              Make color patterns more accessible
            </InteractionDecisionTitle>
            <InteractionDecisionText>
              Explore alternative emotion palettes and supporting visual cues so
              Mosaic&apos;s patterns remain easy to distinguish across different
              forms of color vision. The goal is to preserve color as a
              meaningful part of reflection while making the system easier for
              more people to read.
            </InteractionDecisionText>
          </InteractionDecision>
        </NextDirectionsList>
        <CaseStudyCallout label="Key takeaway">
          Mosaic&apos;s next phase is not about more tracking. It is about
          learning which additions make private reflection clearer without
          making the daily ritual heavier.
        </CaseStudyCallout>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
