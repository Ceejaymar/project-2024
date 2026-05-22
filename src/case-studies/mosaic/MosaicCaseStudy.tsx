import React from 'react';
import styled from 'styled-components';
import CaseStudyCallout from '../components/CaseStudyCallout';
import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudySection from '../components/CaseStudySection';
import { mosaicCaseStudyMeta } from './mosaicCaseStudyData';

const heroImage =
  'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/mosaic.webp';

const ColorStory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1.5rem;
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
  '#f7a84f',
  '#f3c36b',
  '#6f8fd8',
  '#8c68c8',
  '#4f7aa5',
  '#f0d58b',
  '#7fbf9b',
  '#df7f72',
  '#6e78be',
  '#f6b05e',
  '#446c93',
  '#9b79d0',
  '#efc96f',
  '#5d9f86',
  '#8c68c8',
  '#6f8fd8',
  '#f7a84f',
  '#4f7aa5',
  '#df7f72',
  '#f0d58b',
  '#7fbf9b',
  '#446c93',
  '#efc96f',
  '#9b79d0',
  '#f6b05e',
  '#6e78be',
  '#5d9f86',
  '#f3c36b',
];

export default function MosaicCaseStudy() {
  return (
    <CaseStudyLayout
      title={mosaicCaseStudyMeta.title}
      eyebrow={mosaicCaseStudyMeta.eyebrow}
      summary={mosaicCaseStudyMeta.summary}
      year={mosaicCaseStudyMeta.year}
      role={mosaicCaseStudyMeta.role}
      tech={mosaicCaseStudyMeta.tech}
      heroImage={heroImage}
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
