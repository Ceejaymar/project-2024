import React from 'react';
import CaseStudyCallout from '../components/CaseStudyCallout';
import CaseStudyFigure from '../components/CaseStudyFigure';
import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudySection from '../components/CaseStudySection';

const heroImage =
  'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/mosaic.webp';

export default function MosaicCaseStudy() {
  return (
    <CaseStudyLayout
      title="Mosaic"
      eyebrow="Product case study"
      summary="A privacy-first mood tracking app that turns emotional reflection into a visual, color-based ritual."
      year={2026}
      role="Founder & Product Engineer"
      tech="React Native, Expo, TypeScript, Unistyles, SQLite, Drizzle"
      heroImage={heroImage}
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
      </CaseStudySection>

      <CaseStudyFigure
        src={heroImage}
        alt="Mosaic app interface preview"
        caption="Mosaic uses color as the primary memory cue, turning small emotional check-ins into a visual record over time."
      />

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
      </CaseStudySection>

      <CaseStudyCallout>
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
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
