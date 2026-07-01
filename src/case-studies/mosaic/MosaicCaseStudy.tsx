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

const VisualFeatureLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: start;

  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(17rem, 0.7fr);
  }
`;

const ScreenshotPlaceholder = styled.div<{ $size: 'portrait' | 'wide' }>`
  display: grid;
  place-items: center;
  gap: 0.45rem;
  width: 100%;
  max-width: ${({ $size }) => ($size === 'portrait' ? '22rem' : 'none')};
  aspect-ratio: ${({ $size }) =>
    $size === 'portrait' ? '9 / 19.5' : '16 / 10'};
  justify-self: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background-color: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.background} 92%
  );
  text-align: center;
`;

const ScreenshotPlaceholderLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
`;

const ScreenshotPlaceholderTitle = styled.p`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
`;

const ScreenshotPlaceholderFile = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.35;
`;

const VisualFoundationsPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
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

const FoundationEyebrow = styled.p`
  color: ${({ theme }) => theme.colors.primary};
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 0.8rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ColorToken = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.55rem;
  min-width: 0;

  span {
    display: block;
  }
`;

const ColorTokenSwatch = styled.span<{ $color: string }>`
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.45rem;
  background-color: ${({ $color }) => $color};
`;

const ColorTokenName = styled.span`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.25;
`;

const ColorTokenValue = styled.span`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.25;
`;

const EmotionColorStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 0.85rem;
`;

const EmotionColorItem = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.2;

  &::before {
    width: 0.58rem;
    height: 0.58rem;
    border-radius: 999px;
    background-color: ${({ $color }) => $color};
    content: '';
  }
`;

const TypeRoleList = styled.div`
  display: grid;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TypeRole = styled.div<{ $role: 'heading' | 'body' | 'label' }>`
  display: grid;
  gap: 0.35rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.11em;
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

const InteractionLead = styled.p`
  max-width: 68ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
`;

const InteractionDecisionList = styled.div`
  display: grid;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  > * {
    padding-top: clamp(1.5rem, 4vw, 2.5rem);
  }

  > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const InteractionDecision = styled.article`
  display: grid;
  gap: 0.65rem;
  max-width: 72ch;
`;

const InteractionDecisionEyebrow = styled.p`
  color: ${({ theme }) => theme.colors.primary};
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
  margin-top: 0.85rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const InteractionScreenPlaceholder = styled.div`
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.45rem;
  min-height: 14rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  aspect-ratio: 9 / 15;
  background-color: color-mix(
    in oklch,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.background} 94%
  );
  text-align: center;
`;

const InteractionScreenStep = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1;
  text-transform: uppercase;
`;

const InteractionScreenTitle = styled.p`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.35;
`;

const InteractionScreenFile = styled.p`
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.35;
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
  margin-top: 0.85rem;

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
  margin-top: 0.65rem;

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
  }

  span:last-child {
    ${({ $layout }) => ($layout === 'three' ? 'grid-column: 1 / -1;' : '')}
  }
`;

const TileProgressionCaption = styled.p`
  max-width: 52ch;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.55;
`;

const NextDirectionsList = styled.div`
  display: grid;
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
          An emotion journal that turns quick emotional check-ins into a visual
          record you can return to over time.
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

      <CaseStudySection title="Key interaction decisions">
        <InteractionLead>
          The goal was not to fit every possible tracking option into one
          check-in. It was to make the first choice easy while ensuring that
          each entry could become more useful over time.
        </InteractionLead>
        <InteractionDecisionList>
          <InteractionDecision>
            <InteractionDecisionEyebrow>
              START SIMPLE
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
              <InteractionScreenPlaceholder>
                <InteractionScreenStep>STEP 1</InteractionScreenStep>
                <InteractionScreenTitle>
                  Choose an emotion family
                </InteractionScreenTitle>
                <InteractionScreenFile>
                  01-emotion-families.png
                </InteractionScreenFile>
              </InteractionScreenPlaceholder>
              <InteractionScreenPlaceholder>
                <InteractionScreenStep>STEP 2</InteractionScreenStep>
                <InteractionScreenTitle>
                  Explore a specific feeling
                </InteractionScreenTitle>
                <InteractionScreenFile>
                  02-emotion-expanded.png
                </InteractionScreenFile>
              </InteractionScreenPlaceholder>
              <InteractionScreenPlaceholder>
                <InteractionScreenStep>STEP 3</InteractionScreenStep>
                <InteractionScreenTitle>
                  Add context only when useful
                </InteractionScreenTitle>
                <InteractionScreenFile>
                  03-checkin-details.png
                </InteractionScreenFile>
              </InteractionScreenPlaceholder>
            </InteractionFlowVisual>
            <InteractionFlowCaption>
              Every check-in starts with a broad choice. More specific feelings,
              notes, and context tags remain available without becoming required
              steps.
            </InteractionFlowCaption>
          </InteractionDecision>

          <InteractionDecision>
            <InteractionDecisionEyebrow>
              REPRESENT CHANGE
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
                  <span style={{ background: 'oklch(75% 0.15 63)' }} />
                </TileProgressionTile>
                <TileProgressionTile $layout="two">
                  <span style={{ background: 'oklch(75% 0.15 63)' }} />
                  <span style={{ background: 'oklch(72% 0.12 154)' }} />
                </TileProgressionTile>
                <TileProgressionTile $layout="three">
                  <span style={{ background: 'oklch(75% 0.15 63)' }} />
                  <span style={{ background: 'oklch(67% 0.12 250)' }} />
                  <span style={{ background: 'oklch(72% 0.12 154)' }} />
                </TileProgressionTile>
                <TileProgressionTile $layout="four">
                  <span style={{ background: 'oklch(75% 0.15 63)' }} />
                  <span style={{ background: 'oklch(72% 0.12 154)' }} />
                  <span style={{ background: 'oklch(67% 0.12 250)' }} />
                  <span style={{ background: 'oklch(63% 0.13 304)' }} />
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
              REFLECT GENTLY
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
              <ScreenshotPlaceholder $size="portrait">
                <ScreenshotPlaceholderLabel>
                  SCREENSHOT PLACEHOLDER
                </ScreenshotPlaceholderLabel>
                <ScreenshotPlaceholderTitle>
                  Monthly mosaic view
                </ScreenshotPlaceholderTitle>
                <ScreenshotPlaceholderFile>
                  05-monthly-mosaic.png
                </ScreenshotPlaceholderFile>
              </ScreenshotPlaceholder>
              <ScreenshotPlaceholder $size="portrait">
                <ScreenshotPlaceholderLabel>
                  SCREENSHOT PLACEHOLDER
                </ScreenshotPlaceholderLabel>
                <ScreenshotPlaceholderTitle>
                  Yearly mosaic view
                </ScreenshotPlaceholderTitle>
                <ScreenshotPlaceholderFile>
                  06-yearly-mosaic.png
                </ScreenshotPlaceholderFile>
              </ScreenshotPlaceholder>
            </ReflectionViewsPair>
            <InteractionFlowCaption>
              The monthly view keeps individual days legible. The yearly view
              makes the longer rhythm of emotional reflection easier to see at a
              glance.
            </InteractionFlowCaption>
          </InteractionDecision>
        </InteractionDecisionList>
      </CaseStudySection>

      <CaseStudySection title="Designing the visual system">
        <VisualSystemLead>
          Mosaic uses a dark, quiet foundation so emotional reflection can feel
          personal rather than clinical. The interface stays restrained while
          color, type, and small moments of motion give each check-in its own
          presence.
        </VisualSystemLead>

        <VisualFoundationsPanel>
          <VisualFoundationColumn>
            <FoundationEyebrow>SYSTEM PALETTE</FoundationEyebrow>
            <FoundationTitle>Quiet surfaces, clear hierarchy</FoundationTitle>
            <FoundationText>
              Mosaic keeps its interface colors restrained so the colors
              attached to emotional entries can remain the most expressive part
              of the experience.
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
            <FoundationEyebrow>EMOTION FAMILIES</FoundationEyebrow>
            <FoundationText>
              Color variation belongs to the emotional entries, not the
              surrounding chrome.
            </FoundationText>
            <EmotionColorStrip aria-label="Mosaic emotion family colors">
              <EmotionColorItem $color="#F2A900">Happy</EmotionColorItem>
              <EmotionColorItem $color="#00B894">Calm</EmotionColorItem>
              <EmotionColorItem $color="#3D71D9">Sad</EmotionColorItem>
              <EmotionColorItem $color="#FF2D55">Angry</EmotionColorItem>
              <EmotionColorItem $color="#FF8A00">Fearful</EmotionColorItem>
              <EmotionColorItem $color="#C026D3">Surprised</EmotionColorItem>
              <EmotionColorItem $color="#7C3AED">Disgusted</EmotionColorItem>
            </EmotionColorStrip>
          </VisualFoundationColumn>
          <VisualFoundationColumn>
            <FoundationEyebrow>TYPE ROLES</FoundationEyebrow>
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
                  Editorial display type for page titles and reflective moments.
                </p>
              </TypeRole>
              <TypeRole $role="body">
                <span>BODY</span>
                <strong>A calm, readable voice for everyday reflection.</strong>
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
          </VisualFoundationColumn>
        </VisualFoundationsPanel>

        <VisualSubsection>
          <VisualSubheading>Quiet chrome, expressive emotion</VisualSubheading>
          <VisualFeatureLayout>
            <div>
              <p>
                Mosaic keeps its system chrome deliberately quiet. The black
                canvas, softened surfaces, and restrained gold accent create
                hierarchy without competing with the colors attached to each
                emotion.
              </p>
              <p>
                The Today screen is the clearest expression of that balance.
                Emotion colors carry the personal signal, while the surrounding
                interface makes space for the moment instead of treating it like
                a dashboard.
              </p>
            </div>
            <ScreenshotPlaceholder $size="portrait">
              <ScreenshotPlaceholderLabel>
                SCREENSHOT PLACEHOLDER
              </ScreenshotPlaceholderLabel>
              <ScreenshotPlaceholderTitle>
                Today with a composite mosaic
              </ScreenshotPlaceholderTitle>
              <ScreenshotPlaceholderFile>
                04-today-composite.png
              </ScreenshotPlaceholderFile>
            </ScreenshotPlaceholder>
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
            <ScreenshotPlaceholder $size="portrait">
              <ScreenshotPlaceholderLabel>
                SCREENSHOT PLACEHOLDER
              </ScreenshotPlaceholderLabel>
              <ScreenshotPlaceholderTitle>
                Emotion summary and recurring feelings
              </ScreenshotPlaceholderTitle>
              <ScreenshotPlaceholderFile>
                07-insights-summary.png
              </ScreenshotPlaceholderFile>
            </ScreenshotPlaceholder>
            <ScreenshotPlaceholder $size="portrait">
              <ScreenshotPlaceholderLabel>
                SCREENSHOT PLACEHOLDER
              </ScreenshotPlaceholderLabel>
              <ScreenshotPlaceholderTitle>
                Time and day patterns
              </ScreenshotPlaceholderTitle>
              <ScreenshotPlaceholderFile>
                08-insights-timing-patterns.png
              </ScreenshotPlaceholderFile>
            </ScreenshotPlaceholder>
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
            <ScreenshotPlaceholder $size="portrait">
              <ScreenshotPlaceholderLabel>
                SCREENSHOT PLACEHOLDER
              </ScreenshotPlaceholderLabel>
              <ScreenshotPlaceholderTitle>
                Accessibility settings
              </ScreenshotPlaceholderTitle>
              <ScreenshotPlaceholderFile>
                09-accessibility-settings.png
              </ScreenshotPlaceholderFile>
            </ScreenshotPlaceholder>
          </AccessibilityLayout>
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

      <CaseStudySection title="Early release, ongoing learning">
        <p>
          Mosaic is live and still early. The next phase is focused on learning
          where more depth would genuinely help, while keeping the core check-in
          private, lightweight, and easy to return to.
        </p>
        <NextDirectionsList>
          <InteractionDecision>
            <InteractionDecisionEyebrow>CAPACITY</InteractionDecisionEyebrow>
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
              PRIVATE INSIGHTS
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
              COLOR ACCESS
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
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
