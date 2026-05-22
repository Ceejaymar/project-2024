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
  gap: clamp(1.5rem, 4vw, 3rem);
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

  &::before {
    position: absolute;
    inset: -12% -8% auto auto;
    z-index: -1;
    width: min(34rem, 72vw);
    aspect-ratio: 1;
    content: '';
    background-image: linear-gradient(
        oklch(100% 0 0 / 0.3) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, oklch(100% 0 0 / 0.3) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: linear-gradient(135deg, oklch(0% 0 0), transparent 72%);
    opacity: 0.85;
  }

  @media (min-width: 860px) {
    grid-template-columns: minmax(0, 0.82fr) minmax(22rem, 1fr);
    align-items: center;
  }
`;

const SceneCopy = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 34rem;
`;

const SceneKicker = styled.p`
  color: oklch(46% 0.12 32);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const SceneTitle = styled.h2`
  max-width: 10ch;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(2.2rem, 7vw, 5.5rem);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 0.9;
`;

const SceneText = styled.p`
  max-width: 38rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.75;
`;

const MoodLegend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  padding: 0;
  list-style: none;
`;

const MoodPill = styled.li<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.15rem;
  padding: 0 0.75rem;
  border: 1px solid
    color-mix(in oklch, ${({ $color }) => $color}, transparent 54%);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors['default-text']};
  background-color: color-mix(
    in oklch,
    ${({ $color }) => $color},
    transparent 82%
  );
  font-size: 0.78rem;
  font-weight: 700;

  &::before {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    content: '';
    background-color: ${({ $color }) => $color};
  }
`;

const PhoneStage = styled.div`
  position: relative;
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
  width: min(100%, 22rem);
  padding: 0.75rem;
  border: 1px solid oklch(100% 0 0 / 0.5);
  border-radius: 2rem;
  background: linear-gradient(180deg, oklch(99% 0.008 80), oklch(94% 0.012 250)),
    ${({ theme }) => theme.colors.background};
  box-shadow:
    0 28px 70px -38px ${({ theme }) => theme.colors.boxShadow},
    inset 0 0 0 1px oklch(100% 0 0 / 0.45);
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
  box-shadow: inset 0 -1px 0 oklch(0% 0 0 / 0.12);
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

const CheckInPanel = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid oklch(84% 0.02 250);
  border-radius: 1rem;
  background-color: oklch(99% 0.006 95 / 0.88);
`;

const CheckInLabel = styled.p`
  color: oklch(38% 0.04 260);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const CheckInOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const CheckInChip = styled.span<{ $color: string; $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 0.65rem;
  border-radius: 999px;
  color: ${({ $active }) =>
    $active ? 'oklch(19% 0.035 260)' : 'oklch(42% 0.03 260)'};
  background-color: ${({ $active, $color }) =>
    $active ? $color : 'oklch(94% 0.01 250)'};
  font-size: 0.75rem;
  font-weight: 800;
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
      ${({ $color }) => $color}24,
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

const MosaicBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(14, minmax(0, 1fr));
  gap: 0.35rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Tile = styled.span<{ $color: string }>`
  aspect-ratio: 1;
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
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

const moodLegend = [
  { label: 'Energized', color: 'oklch(75% 0.15 63)' },
  { label: 'Calm', color: 'oklch(67% 0.12 250)' },
  { label: 'Grounded', color: 'oklch(72% 0.12 154)' },
  { label: 'Mixed', color: 'oklch(63% 0.13 304)' },
];

function MosaicHeroScene() {
  return (
    <HeroScene aria-labelledby="mosaic-hero-title">
      <SceneCopy>
        <SceneKicker>Year in color</SceneKicker>
        <SceneTitle id="mosaic-hero-title">Reflection you can see</SceneTitle>
        <SceneText>
          Mosaic turns the tiny act of naming a feeling into a visual memory.
          One entry is a tile. A month becomes a rhythm. A year becomes a
          personal map.
        </SceneText>
        <MoodLegend aria-label="Mosaic mood color language">
          {moodLegend.map((mood) => (
            <MoodPill key={mood.label} $color={mood.color}>
              {mood.label}
            </MoodPill>
          ))}
        </MoodLegend>
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
              <PhoneMonth>May 2026</PhoneMonth>
              <PhoneBadge>24 check-ins</PhoneBadge>
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
            <CheckInPanel>
              <CheckInLabel>Today feels</CheckInLabel>
              <CheckInOptions>
                <CheckInChip $color="oklch(75% 0.15 63)">Bright</CheckInChip>
                <CheckInChip $color="oklch(67% 0.12 250)">Quiet</CheckInChip>
                <CheckInChip $color="oklch(72% 0.12 154)" $active>
                  Steady
                </CheckInChip>
              </CheckInOptions>
            </CheckInPanel>
          </PhoneScreen>
        </PhoneFrame>
      </PhoneStage>
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
        <ColorStory aria-label="Emotion color language">
          <ColorCard $color="#f7a84f">
            <ColorSwatch $color="#f7a84f" />
            <ColorLabel>High energy</ColorLabel>
            <ColorNote>
              Warm tones for moments that feel bright or activated.
            </ColorNote>
          </ColorCard>
          <ColorCard $color="#6f8fd8">
            <ColorSwatch $color="#6f8fd8" />
            <ColorLabel>Low energy</ColorLabel>
            <ColorNote>
              Cool tones for calm, heavy, or reflective states.
            </ColorNote>
          </ColorCard>
          <ColorCard $color="#7fbf9b">
            <ColorSwatch $color="#7fbf9b" />
            <ColorLabel>Grounded</ColorLabel>
            <ColorNote>Greens for steady days that feel regulated.</ColorNote>
          </ColorCard>
          <ColorCard $color="#8c68c8">
            <ColorSwatch $color="#8c68c8" />
            <ColorLabel>Complex</ColorLabel>
            <ColorNote>
              Violets for mixed states that need more nuance.
            </ColorNote>
          </ColorCard>
        </ColorStory>
      </CaseStudySection>

      <CaseStudySection title="The visual system">
        <p>
          The calendar is the emotional memory layer. A single tile is a small
          check-in, but a month of tiles becomes a pattern. The interface is
          designed to make that pattern visible without turning the experience
          into a data dashboard.
        </p>
        <MosaicBoard aria-label="Example Mosaic calendar color pattern">
          {tiles.map((color, index) => (
            <Tile key={`${color}-${index}`} $color={color} />
          ))}
        </MosaicBoard>
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
        <Flow>
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
