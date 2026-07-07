import React, {
  type CSSProperties,
  type ComponentProps,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { createPortal } from 'react-dom';
import { useTheme } from 'styled-components';
import CaseStudyCallout from '../components/CaseStudyCallout';
import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudySection from '../components/CaseStudySection';
import {
  CASE_STUDY_GOLD,
  getCaseStudyGoldTextColor,
} from '../components/caseStudyColorTokens';
import quizCsImage from '../../assets/case-study/quiz/quiz-cs.webp';
import quizInfoImage from '../../assets/case-study/quiz/quiz-info.webp';
import quizResultsImage from '../../assets/case-study/quiz/quiz-results.webp';
import quizStartImage from '../../assets/case-study/quiz/quiz-start.webp';
import { yubicoCaseStudyMeta } from './yubicoCaseStudyData';
import styles from './YubicoCaseStudy.module.css';

type YubicoThemeStyle = CSSProperties & {
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

type ScreenshotFigureProps = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  expandable: true;
  expandLabel: string;
  dialogTitle: string;
  sharedLayoutTarget?: 'frame' | 'image';
  size?: 'wide' | 'medium';
};

type YubicoSectionProps = ComponentProps<typeof CaseStudySection> & {
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

function ScreenshotFigure({
  id,
  src,
  alt,
  caption,
  size = 'wide',
  expandable,
  expandLabel,
  dialogTitle,
  sharedLayoutTarget = 'frame',
}: ScreenshotFigureProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const yubicoThemeStyle = useYubicoThemeStyle();
  const shouldReduceMotion = useReducedMotion();
  const layoutId = `yubico-screenshot-${id}`;
  const layoutTransition = shouldReduceMotion
    ? { layout: { duration: 0.01 } }
    : {
        layout: {
          type: 'spring',
          stiffness: 380,
          damping: 34,
          mass: 0.7,
        },
      };
  const backdropTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.18,
    ease: 'easeOut',
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const screenshotFrame =
    sharedLayoutTarget === 'image' ? (
      <div className={styles.screenshotFrame} data-shared-layout-target="image">
        <motion.img
          className={styles.screenshotImage}
          layoutId={layoutId}
          src={src}
          alt={alt}
          transition={layoutTransition}
        />
      </div>
    ) : (
      <motion.div
        className={styles.screenshotFrame}
        layoutId={layoutId}
        transition={layoutTransition}
      >
        <img className={styles.screenshotImage} src={src} alt={alt} />
      </motion.div>
    );

  const overlayFrame =
    sharedLayoutTarget === 'image' ? (
      <div className={styles.overlayFrame} data-shared-layout-target="image">
        <motion.img
          className={styles.overlayImage}
          layoutId={layoutId}
          src={src}
          alt={alt}
          transition={layoutTransition}
        />
      </div>
    ) : (
      <motion.div
        className={styles.overlayFrame}
        layoutId={layoutId}
        transition={layoutTransition}
      >
        <img className={styles.overlayImage} src={src} alt={alt} />
      </motion.div>
    );

  const openOverlay = () => {
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  const keepFocusOnCloseButton = (event: React.KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    event.preventDefault();
    closeButtonRef.current?.focus();
  };

  const closeFromBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeOverlay();
    }
  };

  const returnFocusToTrigger = () => {
    if (!isOpen) {
      triggerRef.current?.focus();
    }
  };

  return (
    <figure className={styles.screenshotFigure} data-size={size}>
      <button
        aria-label={expandLabel}
        className={styles.screenshotButton}
        data-expandable={expandable ? 'true' : undefined}
        onClick={openOverlay}
        ref={triggerRef}
        type="button"
      >
        {screenshotFrame}
        <span aria-hidden="true" className={styles.expandTooltip}>
          Click to enlarge
        </span>
      </button>
      <figcaption className={styles.screenshotCaption}>{caption}</figcaption>
      {typeof document === 'undefined'
        ? null
        : createPortal(
            <AnimatePresence onExitComplete={returnFocusToTrigger}>
              {isOpen ? (
                <motion.div
                  animate={{ opacity: 1 }}
                  aria-labelledby={titleId}
                  aria-modal="true"
                  className={styles.screenshotOverlay}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  layoutRoot
                  onKeyDown={keepFocusOnCloseButton}
                  onMouseDown={closeFromBackdrop}
                  role="dialog"
                  style={yubicoThemeStyle}
                  transition={backdropTransition}
                >
                  <h2 className={styles.visuallyHidden} id={titleId}>
                    {dialogTitle}
                  </h2>
                  <button
                    className={styles.overlayClose}
                    onClick={closeOverlay}
                    ref={closeButtonRef}
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                    <span className={styles.overlayCloseText}>Close</span>
                  </button>
                  {overlayFrame}
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )}
    </figure>
  );
}

export default function YubicoCaseStudy() {
  const yubicoThemeStyle = useYubicoThemeStyle();

  return (
    <LayoutGroup id="yubico-case-study-screenshots">
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
            knowledge. Visitors choose a starting point based on their
            familiarity and purchase context, answer a tailored set of
            questions, and receive a product recommendation or a clear next
            step.
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
            buyers, and give larger business purchases a clearer route to
            contact Customer Success.
          </p>
        </YubicoSection>

        <YubicoSection
          title="My role"
          spacing="compact"
          themeStyle={yubicoThemeStyle}
        >
          <p>
            The broader quiz structure and visual direction were already
            underway when I joined. I worked closely with UX and design to
            clarify incomplete rules, work through unclear questions and states,
            and turn the flow into a responsive, accessible React experience. I
            owned the frontend implementation, conditional flow logic,
            responsive behavior, and accessibility, then later added Cypress
            coverage for key quiz paths.
          </p>
        </YubicoSection>

        <YubicoSection
          title="One product finder, four paths"
          spacing="spacious"
          themeStyle={yubicoThemeStyle}
        >
          <p className={styles.pathLead}>
            The labels stay familiar to the quiz, but each one acts as a
            starting point for how much guidance someone needs.
          </p>
          <div className={styles.pathGrid}>
            {pathCards.map((path) => (
              <article className={styles.pathCard} key={path.title}>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathText}>{path.text}</p>
              </article>
            ))}
          </div>
          <ScreenshotFigure
            id="quiz-start"
            src={quizStartImage}
            alt="Yubico Product Finder entry screen with four paths: Novice, Intermediate, Skilled, and Business."
            caption="Four starting points let the quiz match the amount of detail to someone’s familiarity and purchase needs."
            dialogTitle="Entry-path selection screenshot"
            expandable
            expandLabel="Open full-size entry-path selection screenshot"
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
              terminology, clarify what a question is asking, and provide
              relevant Yubico context when it helps someone answer with more
              confidence.
            </p>
          </div>
          <ScreenshotFigure
            id="quiz-info"
            src={quizInfoImage}
            alt="Yubico Product Finder question screen with answer options and a side panel explaining relevant security-key terminology."
            caption="Supporting information gives people the context they need without turning every path into a longer technical questionnaire."
            dialogTitle="Technical question screenshot"
            expandable
            expandLabel="Open full-size technical question screenshot"
          />
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
              business buyers with larger purchase needs, the experience can
              move from product guidance to Customer Success at the appropriate
              point.
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
            <ScreenshotFigure
              id="quiz-results"
              src={quizResultsImage}
              alt="Yubico Product Finder recommendation screen showing a suggested security key based on quiz responses."
              caption="Individual paths end with a clearer recommendation and a direct route to the relevant product."
              dialogTitle="Product recommendation screenshot"
              expandable
              expandLabel="Open full-size product recommendation screenshot"
              size="medium"
            />
            <ScreenshotFigure
              id="quiz-cs"
              src={quizCsImage}
              alt="Yubico Product Finder business result directing larger security-key purchases to Customer Success."
              caption="Larger purchase needs shift from a standard product recommendation to a Customer Success conversation."
              dialogTitle="Customer Success handoff screenshot"
              expandable
              expandLabel="Open full-size Customer Success handoff screenshot"
              sharedLayoutTarget="image"
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
            The most useful simplification was not removing detail everywhere.
            It was letting beginners reach a starting recommendation quickly
            while keeping the questions more specific for people who already
            knew what they needed. The project reinforced that a product finder
            is not just a multi-step form. The order of questions, amount of
            explanation, and quality of each branch all shape whether someone
            feels guided or overwhelmed.
          </p>
        </YubicoSection>
      </CaseStudyLayout>
    </LayoutGroup>
  );
}
