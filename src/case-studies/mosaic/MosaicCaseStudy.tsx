import React from 'react';
import styled from 'styled-components';
import CaseStudyCallout from '../components/CaseStudyCallout';
import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudySection from '../components/CaseStudySection';
import { mosaicCaseStudyMeta } from './mosaicCaseStudyData';

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
  font-size: clamp(3.6rem, 10vw, 7rem);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 0.86;
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

const HaloTile = styled.span<{ $color: string }>`
  aspect-ratio: 1;
  border-radius: 0.35rem;
  background-color: ${({ $color }) => $color};
`;

const PhoneFrame = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 22rem);
  padding: 0.75rem;
  border: 1px solid oklch(98% 0.006 250 / 0.5);
  border-radius: 2rem;
  background: linear-gradient(180deg, oklch(99% 0.008 80), oklch(94% 0.012 250)),
    ${({ theme }) => theme.colors.background};
  box-shadow:
    0 28px 70px -38px ${({ theme }) => theme.colors.boxShadow},
    inset 0 0 0 1px oklch(98% 0.006 250 / 0.45);
`;

const PhoneScreen = styled.div`
  overflow: hidden;
  padding: 1rem;
  border-radius: 1.45rem;
  background: linear-gradient(180deg, oklch(98% 0.008 92), oklch(94% 0.012 260)),
    ${({ theme }) => theme.colors.background};
`;

const PhoneTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const PhoneMonth = styled.p`
  color: oklch(31% 0.04 260);
  font-size: 0.94rem;
  font-weight: 800;
`;

const PhoneBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 0.65rem;
  border-radius: 999px;
  color: oklch(37% 0.11 150);
  background-color: oklch(91% 0.06 150);
  font-size: 0.72rem;
  font-weight: 800;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.35rem;
`;

const CalendarTile = styled.span<{ $color: string; $delay: string }>`
  aspect-ratio: 1;
  border-radius: 0.5rem;
  background-color: ${({ $color }) => $color};
  box-shadow: inset 0 -1px 0 oklch(18% 0.01 250 / 0.12);
  animation: tile-breathe 7s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  animation-delay: ${({ $delay }) => $delay};

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
  color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.primary};
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
  gap: 1rem;
  margin-top: clamp(2rem, 5vw, 3.5rem);
`;

const VisualSubheading = styled.h3`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.08;
`;

const VisualPlaceholder = styled.div<{ $height?: string }>`
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  overflow: hidden;
  min-height: ${({ $height }) => $height ?? '14rem'};
  padding: 1rem;
  border: 1px solid
    color-mix(in oklch, ${({ theme }) => theme.colors.border}, transparent 8%);
  border-radius: 18px;
  background: radial-gradient(
      circle at 16% 18%,
      color-mix(
        in oklch,
        ${({ theme }) => theme.colors.primary},
        transparent 78%
      ),
      transparent 34%
    ),
    linear-gradient(
      135deg,
      color-mix(
        in oklch,
        ${({ theme }) => theme.colors.background},
        oklch(82% 0.08 80) 8%
      ),
      ${({ theme }) => theme.colors.background}
    );

  &::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    content: '';
    background-image: linear-gradient(
        color-mix(
            in oklch,
            ${({ theme }) => theme.colors.border},
            transparent 44%
          )
          1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        color-mix(
            in oklch,
            ${({ theme }) => theme.colors.border},
            transparent 44%
          )
          1px,
        transparent 1px
      );
    background-size: 24px 24px;
    mask-image: linear-gradient(135deg, oklch(0% 0 0), transparent 72%);
    opacity: 0.34;
  }
`;

const VisualPlaceholderLabel = styled.p`
  display: grid;
  gap: 0.45rem;
  max-width: 24rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    line-height: 1;
    text-transform: uppercase;
  }
`;

const EvolutionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const EvolutionCard = styled.article`
  display: grid;
  gap: 0.9rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const EvolutionTitle = styled.h4`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 700;
`;

const EvolutionText = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.92rem;
  line-height: 1.6;
`;

const DesignSystemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

const DesignToken = styled.div`
  display: grid;
  gap: 0.7rem;
  min-height: 7rem;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const DesignTokenSwatch = styled.span<{ $swatch: string }>`
  display: block;
  min-height: 2.8rem;
  border-radius: 10px;
  background: ${({ $swatch }) => $swatch};
  box-shadow: inset 0 0 0 1px oklch(98% 0.006 250 / 0.3);
`;

const DesignTokenLabel = styled.p`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.25;
`;

const DesignResponseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1120px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const DesignResponseCard = styled.article`
  display: grid;
  align-content: start;
  gap: 0.65rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const DesignResponseLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
`;

const DesignResponseTitle = styled.h4`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;

const DesignResponseText = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FinalScreensGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
  color: ${({ theme }) => theme.colors.primary};
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
    & + & {
      border-top: 0;
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

const ArchitectureEyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
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
    background-color: ${({ theme }) => theme.colors.primary};
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

const Flow = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 0;
  list-style: none;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FlowStep = styled.li`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
`;

const StepNumber = styled.span`
  display: inline-flex;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
`;

const StepTitle = styled.h3`
  margin-bottom: 0.35rem;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 600;
`;

const StepBody = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const tiles = [
  'oklch(75% 0.15 63)',
  'oklch(82% 0.12 82)',
  'oklch(67% 0.12 250)',
  'oklch(63% 0.13 304)',
  'oklch(58% 0.1 224)',
  'oklch(86% 0.11 94)',
  'oklch(72% 0.12 154)',
  'oklch(68% 0.13 29)',
  'oklch(60% 0.12 275)',
  'oklch(76% 0.15 67)',
  'oklch(50% 0.1 232)',
  'oklch(66% 0.13 306)',
  'oklch(80% 0.13 86)',
  'oklch(64% 0.12 153)',
  'oklch(63% 0.13 304)',
  'oklch(67% 0.12 250)',
  'oklch(75% 0.15 63)',
  'oklch(58% 0.1 224)',
  'oklch(68% 0.13 29)',
  'oklch(86% 0.11 94)',
  'oklch(72% 0.12 154)',
  'oklch(50% 0.1 232)',
  'oklch(80% 0.13 86)',
  'oklch(66% 0.13 306)',
  'oklch(76% 0.15 67)',
  'oklch(60% 0.12 275)',
  'oklch(64% 0.12 153)',
  'oklch(82% 0.12 82)',
];

const heroTiles = [...tiles, ...tiles];

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
          Mosaic is a privacy-first mood tracker that turns small emotional
          check-ins into a color-based calendar, helping people notice patterns
          over time without making reflection feel clinical.
        </SceneText>
      </SceneCopy>

      <PhoneStage aria-hidden="true">
        <CalendarHalo>
          {heroTiles.map((color, index) => (
            <HaloTile key={`${color}-halo-${index}`} $color={color} />
          ))}
        </CalendarHalo>
        <PhoneFrame>
          <PhoneScreen>
            <PhoneTop>
              <PhoneMonth>
                {new Date().toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </PhoneMonth>
              <PhoneBadge>35 day streak</PhoneBadge>
            </PhoneTop>
            <CalendarGrid>
              {heroTiles.slice(0, 35).map((color, index) => (
                <CalendarTile
                  key={`${color}-calendar-${index}`}
                  $color={color}
                  $delay={`${index * 0.09}s`}
                />
              ))}
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
      glanceItems={[
        {
          label: 'Problem',
          value:
            'Mood trackers can turn reflection into a chore, flatten complex feelings, and make it harder to see meaningful patterns over time.',
        },
        {
          label: 'Design thesis',
          value:
            'Make reflection feel like a private, visually expressive ritual, not a clinical form or data-entry task.',
        },
        {
          label: 'Core experience',
          value:
            'Start broad or add detail, then let up to four check-ins a day build a color mosaic and gentle insights over time.',
        },
        {
          label: 'Product system',
          value:
            'One shared emotion model powers fast check-ins, composite daily tiles, and pattern-based insights across the app.',
        },
      ]}
    >
      <CaseStudySection title="Overview">
        <p>
          Mosaic is a mood tracker built to make emotional reflection feel
          quick, personal, and low-pressure. Rather than asking people to work
          through long questionnaires or reduce a complex day to a single score,
          it lets them start broad, add detail only when it helps, and build a
          visual record they can return to over time.
        </p>
        <p>
          Each check-in begins with one of seven emotion families, with the
          option to explore more specific feelings when needed. In as few as
          three taps, a user can save a check-in. Up to four entries can be
          recorded in a day, and Mosaic combines them into one daily tile: full
          color for a single entry, then divided as additional check-ins are
          added. Weekly and monthly insights make recurring emotions and timing
          patterns easier to notice.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The problem">
        <p>
          Mood tracking sits in a delicate space: people want help understanding
          themselves, but many tools make reflection feel like another task to
          manage. In competitive app review research, I found repeated
          frustration around long check-in flows, unclear emotion language,
          privacy concerns, and products that either flattened emotional life
          into rigid options or made reflection feel like more work.
        </p>
        <p>
          Mosaic was designed around that tension: lightweight enough to fit
          into a day, expressive enough to make room for nuance, and calm enough
          to support honest reflection.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Competitive review signals">
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

      <CaseStudySection title="Designing the visual system">
        <VisualSystemLead>
          Mosaic&apos;s visual system needed to make emotional tracking feel
          personal and expressive without becoming busy, clinical, or overly
          gamified. The goal was to create a product that felt sleek, warm, and
          reflective, closer to a private ritual than a mental health form.
        </VisualSystemLead>

        <VisualSubsection>
          <VisualSubheading>
            The original hook: a year in color
          </VisualSubheading>
          <p>
            The earliest concept centered on the mosaic itself: a monthly and
            yearly view that could turn small emotional entries into a visible
            pattern over time. The idea was simple: each day could become a
            tile, with its color composition reflecting the check-ins recorded
            over time.
          </p>
          <VisualPlaceholder>
            <VisualPlaceholderLabel>
              <span>Image placeholder</span>
              Original hand-drawn mosaic wireframe / early calendar concept
            </VisualPlaceholderLabel>
          </VisualPlaceholder>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>
            The product shift: check-in first, calendar second
          </VisualSubheading>
          <p>
            As the product direction sharpened, the most important realization
            was that the calendar only becomes meaningful if the check-in is
            easy enough to repeat. The mosaic view was the original hook, but
            the check-in became the foundation. The final experience separates
            the product into two rhythms: a lightweight daily check-in and a
            longer-term reflection view.
          </p>
          <EvolutionGrid>
            <EvolutionCard>
              <EvolutionTitle>Original emphasis</EvolutionTitle>
              <EvolutionText>
                Monthly and yearly mosaic views as the main feature attraction.
              </EvolutionText>
              <VisualPlaceholder $height="11rem">
                <VisualPlaceholderLabel>
                  <span>Image placeholder</span>
                  Early monthly/yearly mosaic concept
                </VisualPlaceholderLabel>
              </VisualPlaceholder>
            </EvolutionCard>
            <EvolutionCard>
              <EvolutionTitle>Final emphasis</EvolutionTitle>
              <EvolutionText>
                A focused daily check-in that builds the mosaic over time.
              </EvolutionText>
              <VisualPlaceholder $height="11rem">
                <VisualPlaceholderLabel>
                  <span>Image placeholder</span>
                  Final check-in screen placeholder
                </VisualPlaceholderLabel>
              </VisualPlaceholder>
            </EvolutionCard>
          </EvolutionGrid>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>Warm, not clinical</VisualSubheading>
          <p>
            The visual language needed to avoid the sterile feeling common in
            health tools. I used a dark, sleek interface with a gold accent to
            give Mosaic a sense of warmth, care, and polish. Gold became the
            product&apos;s emotional anchor: elegant without feeling cold,
            expressive without feeling childish, and premium without turning the
            app into a dashboard.
          </p>
          <DesignSystemGrid aria-label="Mosaic visual design tokens">
            <DesignToken>
              <DesignTokenSwatch $swatch="oklch(75% 0.15 63)" />
              <DesignTokenLabel>Gold accent</DesignTokenLabel>
            </DesignToken>
            <DesignToken>
              <DesignTokenSwatch $swatch="linear-gradient(135deg, oklch(24% 0.035 260), oklch(13% 0.025 260))" />
              <DesignTokenLabel>Dark surface</DesignTokenLabel>
            </DesignToken>
            <DesignToken>
              <DesignTokenSwatch $swatch="radial-gradient(circle at 30% 25%, oklch(75% 0.15 63 / 0.44), transparent 46%), linear-gradient(135deg, oklch(27% 0.04 260), oklch(17% 0.025 250))" />
              <DesignTokenLabel>Soft gradients</DesignTokenLabel>
            </DesignToken>
            <DesignToken>
              <DesignTokenSwatch $swatch="linear-gradient(90deg, oklch(75% 0.15 63) 0 25%, oklch(67% 0.12 250) 25% 50%, oklch(72% 0.12 154) 50% 75%, oklch(63% 0.13 304) 75%)" />
              <DesignTokenLabel>Emotion tiles</DesignTokenLabel>
            </DesignToken>
            <DesignToken>
              <DesignTokenSwatch $swatch="linear-gradient(135deg, oklch(98% 0.008 92), oklch(91% 0.018 260))" />
              <DesignTokenLabel>Rounded cards</DesignTokenLabel>
            </DesignToken>
            <DesignToken>
              <DesignTokenSwatch $swatch="linear-gradient(180deg, oklch(32% 0.035 260) 0 18%, transparent 18% 36%, oklch(72% 0.04 260 / 0.45) 36% 44%, transparent 44% 60%, oklch(72% 0.04 260 / 0.28) 60% 67%, transparent 67%)" />
              <DesignTokenLabel>Editorial type</DesignTokenLabel>
            </DesignToken>
          </DesignSystemGrid>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>Design responses to the research</VisualSubheading>
          <DesignResponseGrid>
            <DesignResponseCard>
              <DesignResponseLabel>Friction</DesignResponseLabel>
              <DesignResponseTitle>
                Make the first action light
              </DesignResponseTitle>
              <DesignResponseText>
                Start with one familiar emotion family and save a minimal
                check-in in as few as three taps. Journaling and added detail
                remain optional.
              </DesignResponseText>
            </DesignResponseCard>
            <DesignResponseCard>
              <DesignResponseLabel>Emotional range</DesignResponseLabel>
              <DesignResponseTitle>
                Support broad-to-specific reflection
              </DesignResponseTitle>
              <DesignResponseText>
                Seven emotion families reduce the blank-page problem, while more
                specific choices within each family make room for nuance without
                overwhelming every check-in.
              </DesignResponseText>
            </DesignResponseCard>
            <DesignResponseCard>
              <DesignResponseLabel>Trust</DesignResponseLabel>
              <DesignResponseTitle>
                Make privacy feel concrete
              </DesignResponseTitle>
              <DesignResponseText>
                Keep sensitive reflections out of product analytics and avoid
                patterns that pressure people to share or perform their
                feelings.
              </DesignResponseText>
            </DesignResponseCard>
            <DesignResponseCard>
              <DesignResponseLabel>Meaning over data</DesignResponseLabel>
              <DesignResponseTitle>
                Make patterns easy to revisit
              </DesignResponseTitle>
              <DesignResponseText>
                Weekly and monthly views surface recurring emotion patterns,
                most selected emotions, and percentage breakdowns by time of day
                and day of week.
              </DesignResponseText>
            </DesignResponseCard>
          </DesignResponseGrid>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>The final system</VisualSubheading>
          <p>
            The final system connects capture to reflection. A fast check-in
            records the moment. Each day resolves into one composite mosaic
            tile, full color for one entry and split into up to four sections as
            the day changes. Weekly and monthly insights turn those entries into
            gentle, specific patterns people can revisit without turning
            reflection into a score.
          </p>
          <FinalScreensGrid>
            <VisualPlaceholder $height="16rem">
              <VisualPlaceholderLabel>
                <span>Image placeholder</span>
                Today / check-in screen
              </VisualPlaceholderLabel>
            </VisualPlaceholder>
            <VisualPlaceholder $height="16rem">
              <VisualPlaceholderLabel>
                <span>Image placeholder</span>
                Monthly mosaic view
              </VisualPlaceholderLabel>
            </VisualPlaceholder>
            <VisualPlaceholder $height="16rem">
              <VisualPlaceholderLabel>
                <span>Image placeholder</span>
                Yearly mosaic view
              </VisualPlaceholderLabel>
            </VisualPlaceholder>
          </FinalScreensGrid>
        </VisualSubsection>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
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
                A small record with room to grow
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

      <CaseStudySection title="Challenges & Solutions">
        <p>
          The hardest interaction problem was supporting different levels of
          emotional specificity without making check-ins feel like a test. Some
          people want to record a broad feeling quickly. Others need more
          language to identify what is going on. Mosaic starts with seven
          emotion families, then lets people explore more specific feelings only
          when they want to. This keeps the default interaction light while
          leaving room for nuance.
        </p>
        <p>
          The calendar visualization posed a different problem: how do you show
          a month of emotional data without reducing a day to one label or
          overwhelming the person looking at it? Mosaic treats each day as one
          composite tile. A single check-in fills the tile; additional check-ins
          divide it into up to four sections. At month and year scale, those
          tiles make shifts and repeated patterns visible without asking the
          user to study a dense chart.
        </p>
        <Flow role="list">
          <FlowStep>
            <StepNumber>01</StepNumber>
            <StepTitle>Start at the right level</StepTitle>
            <StepBody>
              Choose a broad emotion family or explore a more specific feeling.
            </StepBody>
          </FlowStep>
          <FlowStep>
            <StepNumber>02</StepNumber>
            <StepTitle>Let a day hold more than one moment</StepTitle>
            <StepBody>
              Up to four check-ins can share a single mosaic tile, showing
              shifts across the day.
            </StepBody>
          </FlowStep>
          <FlowStep>
            <StepNumber>03</StepNumber>
            <StepTitle>Turn entries into gentle patterns</StepTitle>
            <StepBody>
              Weekly and monthly insights surface recurring emotions and timing
              patterns without scoring the user.
            </StepBody>
          </FlowStep>
        </Flow>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
