import React from 'react';
import { useTheme } from 'styled-components';
import CaseStudyCallout from '../components/CaseStudyCallout';
import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudySection from '../components/CaseStudySection';
import {
  CASE_STUDY_GOLD,
  getCaseStudyGoldTextColor,
} from '../components/caseStudyColorTokens';
import { yubicoCaseStudyMeta } from './yubicoCaseStudyData';
import styles from './YubicoCaseStudy.module.css';

type YubicoThemeStyle = React.CSSProperties & {
  '--yubico-bg': string;
  '--yubico-text': string;
  '--yubico-muted': string;
  '--yubico-border': string;
  '--yubico-shadow': string;
  '--yubico-accent': string;
  '--yubico-accent-text': string;
  '--yubico-primary': string;
};

const pathCards = [
  {
    title: 'Novice',
    text: 'A shorter route for people getting started with security keys.',
  },
  {
    title: 'Intermediate',
    text: 'A more focused path for people with some familiarity who need help narrowing their options.',
  },
  {
    title: 'Skilled',
    text: 'More specific questions for people who already understand their setup and requirements.',
  },
  {
    title: 'Business',
    text: 'When the selected quantity passes the business threshold, the quiz can shift from product selection to Customer Success.',
  },
] as const;

const nextStepRoutes = [
  {
    label: 'Answer pattern',
    text: 'Responses narrow the flow around experience level, setup, and purchase context.',
  },
  {
    label: 'Product recommendation',
    text: 'Individual buyers can reach a relevant security-key recommendation.',
  },
  {
    label: 'Business handoff',
    text: 'Larger team purchases can move from product guidance to Customer Success.',
  },
] as const;

const technicalPoints = [
  'Path-specific question sets for different experience levels and purchase contexts.',
  'Conditional frontend logic that moves people through the appropriate questions and next steps.',
  'Reusable question, answer, progress, and explanatory-content patterns.',
  'Responsive and accessible frontend implementation.',
  'React application integrated into the marketing site through the company’s existing custom WordPress plugin pattern.',
  'Cypress coverage added later to protect key quiz paths.',
] as const;

type MediaPlaceholderProps = {
  format: string;
  purpose: string;
  size?: 'wide' | 'medium';
};

type YubicoSectionProps = React.ComponentProps<typeof CaseStudySection> & {
  themeStyle: YubicoThemeStyle;
};

function useYubicoThemeStyle(): YubicoThemeStyle {
  const theme = useTheme();

  return {
    '--yubico-bg': theme.colors.background,
    '--yubico-text': theme.colors['default-text'],
    '--yubico-muted': theme.colors['secondary-text'],
    '--yubico-border': theme.colors.border,
    '--yubico-shadow': theme.colors.boxShadow,
    '--yubico-accent': CASE_STUDY_GOLD,
    '--yubico-accent-text': getCaseStudyGoldTextColor(
      theme.colors['default-text'],
    ),
    '--yubico-primary': theme.colors.primary,
  };
}

function YubicoSection({
  themeStyle,
  children,
  ...sectionProps
}: YubicoSectionProps) {
  return (
    <div className={styles.caseStudyScope} style={themeStyle}>
      <CaseStudySection {...sectionProps}>{children}</CaseStudySection>
    </div>
  );
}

function MediaPlaceholder({
  format,
  purpose,
  size = 'wide',
}: MediaPlaceholderProps) {
  return (
    <figure className={styles.placeholderFigure} data-size={size}>
      <div className={styles.placeholderFrame}>
        <div className={styles.placeholderContent}>
          <p className={styles.placeholderLabel}>Media placeholder</p>
          <p className={styles.placeholderFormat}>{format}</p>
          <p className={styles.placeholderPurpose}>{purpose}</p>
        </div>
      </div>
      <figcaption className={styles.placeholderCaption}>
        Temporary media slot. Replace this figure with verified project imagery
        when the final asset is available.
      </figcaption>
    </figure>
  );
}

export default function YubicoCaseStudy() {
  const yubicoThemeStyle = useYubicoThemeStyle();

  return (
    <CaseStudyLayout
      title={yubicoCaseStudyMeta.title}
      slug={yubicoCaseStudyMeta.slug}
      eyebrow={yubicoCaseStudyMeta.eyebrow}
      summary={yubicoCaseStudyMeta.summary}
      role={yubicoCaseStudyMeta.role}
      tech={yubicoCaseStudyMeta.tech}
      links={yubicoCaseStudyMeta.links}
    >
      <YubicoSection title="Overview" themeStyle={yubicoThemeStyle}>
        <p>
          Yubico’s product finder helps people choose a security key without
          requiring everyone to begin with the same level of technical
          knowledge. Visitors choose a starting point based on their familiarity
          and purchase context, answer a tailored set of questions, and receive
          a product recommendation or a clear next step.
        </p>
      </YubicoSection>

      <YubicoSection
        title="Why rebuild it"
        spacing="compact"
        themeStyle={yubicoThemeStyle}
      >
        <p>
          The project replaced an older quiz that was harder to follow and did
          not create a clear enough path from someone’s needs to a product
          recommendation or business handoff. The goal was to help beginners
          reach an answer faster, ask more relevant questions for experienced
          buyers, and give larger business purchases a clearer route to contact
          Customer Success.
        </p>
      </YubicoSection>

      <YubicoSection
        title="My role"
        spacing="compact"
        themeStyle={yubicoThemeStyle}
      >
        <p>
          The broader quiz structure and visual direction were already underway
          when I joined. I worked closely with UX and design to clarify
          incomplete rules, work through unclear questions and states, and turn
          the flow into a responsive, accessible React experience. I owned the
          frontend implementation, conditional flow logic, responsive behavior,
          and accessibility, then later added Cypress coverage for key quiz
          paths.
        </p>
      </YubicoSection>

      <YubicoSection
        title="One product finder, four paths"
        spacing="spacious"
        themeStyle={yubicoThemeStyle}
      >
        <p className={styles.pathLead}>
          The labels stay familiar to the quiz, but each one acts as a starting
          point for how much guidance someone needs.
        </p>
        <div className={styles.pathGrid}>
          {pathCards.map((path) => (
            <article className={styles.pathCard} key={path.title}>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathText}>{path.text}</p>
            </article>
          ))}
        </div>
        <MediaPlaceholder
          format="GIF or screenshot"
          purpose="Show the entry-path selection screen with Novice, Intermediate, Skilled, and Business options."
        />
      </YubicoSection>

      <YubicoSection
        title="Helping people answer technical questions"
        spacing="spacious"
        themeStyle={yubicoThemeStyle}
      >
        <div className={styles.questionLayout}>
          <p>
            Each path uses a different set of questions, so beginners are not
            forced through the same level of detail as experienced buyers.
            Supporting information sits alongside the flow to explain
            terminology, clarify what a question is asking, and provide relevant
            Yubico context when it helps someone answer with more confidence.
          </p>
          <MediaPlaceholder
            format="Screenshot or GIF"
            purpose="Show a quiz question with the supporting information panel visible."
          />
        </div>
      </YubicoSection>

      <YubicoSection
        title="From answers to the right next step"
        spacing="spacious"
        themeStyle={yubicoThemeStyle}
      >
        <div className={styles.nextStepLayout}>
          <p>
            Answers guide people toward a relevant security-key recommendation
            instead of sending every visitor through one generic flow. For
            business buyers with larger purchase needs, the experience can move
            from product guidance to Customer Success at the appropriate point.
          </p>
          <ol className={styles.routeList}>
            {nextStepRoutes.map((route) => (
              <li className={styles.routeItem} key={route.label}>
                <span className={styles.routeContent}>
                  <span className={styles.routeLabel}>{route.label}</span>
                  <span className={styles.routeText}>{route.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.mediaPair}>
          <MediaPlaceholder
            format="Screenshot or GIF"
            purpose="Business purchase handoff."
            size="medium"
          />
          <MediaPlaceholder
            format="Screenshot"
            purpose="Product recommendation screen."
            size="medium"
          />
        </div>
      </YubicoSection>

      <YubicoSection
        title="Technical approach"
        spacing="spacious"
        themeStyle={yubicoThemeStyle}
      >
        <div className={styles.technicalPanel}>
          <ul className={styles.technicalList}>
            {technicalPoints.map((point) => (
              <li className={styles.technicalItem} key={point}>
                {point}
              </li>
            ))}
          </ul>
          <p className={styles.temporaryNote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporary
            implementation detail placeholder for source-code-specific rules
            that need to be verified before they are described publicly.
          </p>
        </div>
      </YubicoSection>

      <YubicoSection
        title="Outcome"
        spacing="spacious"
        themeStyle={yubicoThemeStyle}
      >
        <div className={styles.outcomeBlock}>
          <CaseStudyCallout label="Outcome">
            At a later point, internal tracking showed that 60% of people who
            completed the quiz continued to the e-commerce site.
          </CaseStudyCallout>
          <p>
            This only reflects quiz completers who reached the store. It does
            not attribute purchases, and it is not a metric for all site
            visitors.
          </p>
        </div>
      </YubicoSection>

      <YubicoSection
        title="What I learned"
        spacing="spacious"
        themeStyle={yubicoThemeStyle}
      >
        <p>
          The most useful simplification was not removing detail everywhere. It
          was letting beginners reach a starting recommendation quickly while
          keeping the questions more specific for people who already knew what
          they needed. The project reinforced that a product finder is not just
          a multi-step form. The order of questions, amount of explanation, and
          quality of each branch all shape whether someone feels guided or
          overwhelmed.
        </p>
      </YubicoSection>
    </CaseStudyLayout>
  );
}
