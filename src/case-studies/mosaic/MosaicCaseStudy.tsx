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

const ColorStory = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ColorCard = styled.div<{ $color: string }>`
  min-height: 7rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      color-mix(in oklch, ${({ $color }) => $color}, transparent 76%),
      transparent 78%
    ),
    ${({ theme }) => theme.colors.background};
`;

const ColorSwatch = styled.span<{ $color: string }>`
  display: block;
  width: 2rem;
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;

const ColorLabel = styled.p`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.95rem;
  font-weight: 600;
`;

const ColorNote = styled.p`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.82rem;
  line-height: 1.5;
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

const ThemeHeading = styled.h3`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1.05rem;
  font-weight: 700;
`;

const ThemeClusterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin-top: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.border};

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ThemeCluster = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ThemeClusterTitle = styled.h4`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.95rem;
  font-weight: 700;
`;

const ThemeList = styled.ul`
  display: grid;
  gap: 0.55rem;
  padding: 0;
  list-style: none;
`;

const ThemeItem = styled.li`
  position: relative;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.95rem;
  line-height: 1.55;

  &::before {
    position: absolute;
    top: 0.68em;
    left: 0;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    content: '';
    background-color: ${({ theme }) => theme.colors.primary};
  }
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
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

const DecisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.border};

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Decision = styled.div`
  padding: 1.15rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const DecisionLabel = styled.p`
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const DecisionText = styled.p`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.95rem;
  line-height: 1.65;
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

const emotionColors = {
  highEnergy: 'oklch(75% 0.15 63)',
  lowEnergy: 'oklch(67% 0.12 250)',
  grounded: 'oklch(72% 0.12 154)',
  complex: 'oklch(63% 0.13 304)',
};

const researchSignals = [
  {
    label: 'Friction',
    excerpt: 'multiple entry screens are redundant and nauseating',
    risk: 'Reflection can start to feel like admin work before the user saves anything.',
    response: 'Keep the check-in flow fast, focused, and low-pressure.',
  },
  {
    label: 'Emotional clarity',
    excerpt: 'I cannot ID my feelings. I just draw blanks.',
    risk: 'A mood tracker can fail before the entry is saved if people do not have an easy way to recognize or name what they feel.',
    response:
      'Use a guided color-and-emotion language that helps people start with a feeling and build a visual record over time.',
  },
  {
    label: 'Trust',
    excerpt:
      'I want to track my mental health without worrying about my data being collected.',
    risk: 'A reflection tool loses its usefulness if people do not feel safe being honest.',
    response:
      'Treat privacy as a core product principle, not a settings-page afterthought.',
  },
];

const recurringIssueGroups = [
  {
    title: 'Flow friction',
    items: [
      'Long or forced check-in flows',
      'Too many screens before saving an entry',
      'Insights that were either too shallow or too complicated',
    ],
  },
  {
    title: 'Emotional clarity',
    items: [
      'Difficulty identifying what feeling fits',
      'Limited or unclear emotion labels',
      'Missing neutral, mixed, or in-between emotional states',
    ],
  },
  {
    title: 'Trust and data ownership',
    items: [
      'Privacy concerns around mental health and journal data',
      'Data export, backup, and sync concerns',
      'Accessibility/readability issues',
    ],
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
            'Mood tracking often feels clinical, so people abandon it before patterns can emerge.',
        },
        {
          label: 'Product move',
          value:
            'Turn each check-in into a color tile that slowly builds a personal emotional calendar.',
        },
        {
          label: 'Technical bet',
          value:
            'Keep reflections local-first, fast, and private while generating insights on-device.',
        },
        {
          label: 'Proof',
          value:
            'A single-tap ritual, a color language, and a calendar view that rewards looking back.',
        },
      ]}
    >
      <CaseStudySection title="Overview">
        <p>
          Most mood-tracking apps feel clinical: long questionnaires, numerical
          scales, dashboards built for data analysts. Mosaic takes the opposite
          approach. The goal was to make emotional reflection feel like
          something you&apos;d want to do, not something you have to.
        </p>
        <p>
          A quick check-in, a color, a moment noted. Over time, your calendar
          fills in: patches of amber and violet and deep blue accumulating into
          something you can step back and actually see. That visual canvas, your
          emotional year rendered in color, is the core of what Mosaic is about.
        </p>
        <ColorStory role="group" aria-label="Emotion color language">
          <ColorCard $color={emotionColors.highEnergy}>
            <ColorSwatch $color={emotionColors.highEnergy} />
            <ColorLabel>High energy</ColorLabel>
            <ColorNote>
              Warm tones for moments that feel bright or activated.
            </ColorNote>
          </ColorCard>
          <ColorCard $color={emotionColors.lowEnergy}>
            <ColorSwatch $color={emotionColors.lowEnergy} />
            <ColorLabel>Low energy</ColorLabel>
            <ColorNote>
              Cool tones for calm, heavy, or reflective states.
            </ColorNote>
          </ColorCard>
          <ColorCard $color={emotionColors.grounded}>
            <ColorSwatch $color={emotionColors.grounded} />
            <ColorLabel>Grounded</ColorLabel>
            <ColorNote>Greens for steady days that feel regulated.</ColorNote>
          </ColorCard>
          <ColorCard $color={emotionColors.complex}>
            <ColorSwatch $color={emotionColors.complex} />
            <ColorLabel>Complex</ColorLabel>
            <ColorNote>
              Violets for mixed states that need more nuance.
            </ColorNote>
          </ColorCard>
        </ColorStory>
      </CaseStudySection>

      <CaseStudySection title="The problem">
        <p>
          Mood tracking sits in a delicate space: people want help understanding
          themselves, but many tools make reflection feel like another task to
          manage. In competitive app review research, I found repeated
          frustration around long check-in flows, unclear emotion language,
          privacy concerns, and tools that either oversimplified emotional life
          or made the experience feel too heavy.
        </p>
        <p>
          Mosaic was designed around that tension: lightweight enough to become
          a daily ritual, expressive enough to help people name what they feel,
          and private enough to feel safe.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Research signals that shaped the product">
        <ResearchMethod>
          I treated this as competitive app review research: reviewing public
          feedback from existing mood tracking and journaling apps, then
          grouping repeated complaints into product risks. The excerpts below
          are verbatim public review excerpts; the design responses show how
          those signals shaped Mosaic.
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

        <ThemeHeading>Other recurring issues I found</ThemeHeading>
        <ThemeClusterGrid>
          {recurringIssueGroups.map((group) => (
            <ThemeCluster key={group.title}>
              <ThemeClusterTitle>{group.title}</ThemeClusterTitle>
              <ThemeList role="list">
                {group.items.map((issue) => (
                  <ThemeItem key={issue}>{issue}</ThemeItem>
                ))}
              </ThemeList>
            </ThemeCluster>
          ))}
        </ThemeClusterGrid>
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
            pattern over time. The idea was simple: one check-in becomes one
            tile, and enough tiles become a personal emotional landscape.
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
                Make the first action feel light
              </DesignResponseTitle>
              <DesignResponseText>
                The check-in screen became the primary ritual so users could
                record a feeling quickly without moving through a heavy flow.
              </DesignResponseText>
            </DesignResponseCard>
            <DesignResponseCard>
              <DesignResponseLabel>Emotional clarity</DesignResponseLabel>
              <DesignResponseTitle>
                Use color as a starting point
              </DesignResponseTitle>
              <DesignResponseText>
                Color gives users another way into reflection when naming a
                feeling is difficult.
              </DesignResponseText>
            </DesignResponseCard>
            <DesignResponseCard>
              <DesignResponseLabel>Trust</DesignResponseLabel>
              <DesignResponseTitle>
                Keep the interface quiet
              </DesignResponseTitle>
              <DesignResponseText>
                The design avoids aggressive prompts and clinical dashboards so
                the experience feels private, calm, and self-directed.
              </DesignResponseText>
            </DesignResponseCard>
          </DesignResponseGrid>
        </VisualSubsection>

        <VisualSubsection>
          <VisualSubheading>The final system</VisualSubheading>
          <p>
            The final visual system gives Mosaic both immediacy and memory. The
            check-in captures the moment. The monthly and yearly views turn
            those moments into a pattern the user can return to later.
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
        <p>
          Built with React Native and Expo for cross-platform reach, TypeScript
          throughout, and Unistyles for a typed, scalable styling layer that
          avoids the runtime cost of some alternatives.
        </p>
        <p>
          Check-in data is stored locally first, keeping the app fast and
          private by default. The insights engine runs entirely on the client,
          analyzing rolling windows of entries to surface day-of-week
          tendencies, streak patterns, and correlations between emotion types.
          No server round-trip required for the patterns that matter most.
        </p>
        <DecisionGrid>
          <Decision>
            <DecisionLabel>Decision</DecisionLabel>
            <DecisionText>
              Store check-ins locally first so personal reflections stay private
              by default.
            </DecisionText>
          </Decision>
          <Decision>
            <DecisionLabel>Tradeoff</DecisionLabel>
            <DecisionText>
              Keep early insights lightweight and on-device instead of depending
              on server-side analysis.
            </DecisionText>
          </Decision>
          <Decision>
            <DecisionLabel>Result</DecisionLabel>
            <DecisionText>
              The product can feel immediate and safe, even before accounts,
              syncing, or heavier analytics exist.
            </DecisionText>
          </Decision>
        </DecisionGrid>
      </CaseStudySection>

      <CaseStudyCallout label="Technical principle">
        Local-first storage keeps personal mood and journal data private by
        default.
      </CaseStudyCallout>

      <CaseStudySection title="Challenges & Solutions">
        <p>
          The hardest design problem was the check-in moment itself. Too many
          emotion options and friction goes up; too few and the granularity
          isn&apos;t useful. The solution was a curated emotion set with clear,
          intuitive color associations, warm tones for high-energy states, cool
          tones for calm or low ones, so the choice feels immediate rather than
          cognitive.
        </p>
        <p>
          The calendar visualization posed its own challenge: how do you render
          months of data without overwhelming the person looking at it? The
          mosaic metaphor was the answer. Small colored tiles form a picture
          only visible at distance, nudging the user to zoom out and reflect on
          the shape of a week or month rather than fixate on any single day.
        </p>
        <Flow role="list">
          <FlowStep>
            <StepNumber>01</StepNumber>
            <StepTitle>Reduce the ask</StepTitle>
            <StepBody>
              The check-in moment starts small: choose a feeling, color the day,
              move on.
            </StepBody>
          </FlowStep>
          <FlowStep>
            <StepNumber>02</StepNumber>
            <StepTitle>Build the pattern</StepTitle>
            <StepBody>
              Each entry adds a tile, making repeated states easier to notice
              over time.
            </StepBody>
          </FlowStep>
          <FlowStep>
            <StepNumber>03</StepNumber>
            <StepTitle>Reflect without pressure</StepTitle>
            <StepBody>
              Insights are framed as gentle observations, not judgments or
              performance scores.
            </StepBody>
          </FlowStep>
        </Flow>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
