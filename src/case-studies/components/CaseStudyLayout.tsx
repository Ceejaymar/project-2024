import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Globe,
} from '@phosphor-icons/react';
import media from '../../utils/mediaQueries';
import { ProjectLink } from '../../types';
import { getProjectLinkAnalytics, trackEvent } from '../../lib/analytics';
import { getCaseStudyGoldTextColor } from './caseStudyColorTokens';

interface GlanceMetric {
  label: string;
  value: string;
}

interface CaseStudyLayoutProps {
  title: string;
  slug?: string;
  eyebrow?: string;
  summary: string;
  year?: number;
  role?: string;
  tech?: string;
  heroImage?: string;
  heroVisual?: React.ReactNode;
  showIntro?: boolean;
  links?: ProjectLink[];
  glanceItems?: GlanceMetric[];
  children: React.ReactNode;
}

const Page = styled.main`
  width: 100%;
  max-width: 1180px;
  min-height: 100vh;
  padding: 2rem 1.25rem 6rem;
  color: ${({ theme }) => theme.colors['default-text']};

  ${media.tablet`
    padding: 2rem 2rem 7rem;
  `}
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const Hero = styled.header`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  ${media.laptop`
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
    align-items: end;
    gap: 4rem;
  `}
`;

const Eyebrow = styled.p<{ $useCaseStudyGold?: boolean }>`
  margin-bottom: 0.85rem;
  color: ${({ $useCaseStudyGold, theme }) =>
    $useCaseStudyGold
      ? getCaseStudyGoldTextColor(theme.colors['default-text'])
      : theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const StandaloneEyebrow = styled(Eyebrow)`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  max-width: 12ch;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(2.8rem, 8vw, 6rem);
  font-weight: 500;
  line-height: 0.95;
`;

const Summary = styled.p`
  max-width: 42rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 1.08rem;
  line-height: 1.8;

  ${media.tablet`
    font-size: 1.18rem;
  `}
`;

const HeroAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MetaList = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-top: 0.25rem;

  ${media.tablet`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${media.laptop`
    grid-template-columns: 1fr;
  `}
`;

const MetaItem = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 0.85rem;
`;

const MetaLabel = styled.dt`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const MetaValue = styled.dd`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;
`;

const HeroMedia = styled.div`
  margin: 1rem 0 4rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 560px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  object-fit: cover;
  object-position: top;
`;

const GlanceGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin: 0 0 3rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.border};

  ${media.tablet`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.laptop`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `}
`;

const GlanceCard = styled.div`
  min-height: 8rem;
  padding: 1.1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const GlanceLabel = styled.dt`
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const GlanceValue = styled.dd`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.55;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Closing = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${media.tablet`
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  `}
`;

const ClosingCopy = styled.p`
  max-width: 52ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 1rem;
  line-height: 1.7;
`;

const MosaicClosing = styled(Closing)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: clamp(0.85rem, 3vw, 1.25rem);
`;

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CaseStudyLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const MosaicSecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const MosaicPrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) =>
    getCaseStudyGoldTextColor(theme.colors['default-text'])};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const getLinkIcon = (type: string) => {
  if (type === 'case-study') {
    return <BookOpen size={16} weight="bold" />;
  }

  return <Globe size={16} weight="bold" />;
};

export default function CaseStudyLayout({
  title,
  slug,
  eyebrow,
  summary,
  year,
  role,
  tech,
  heroImage,
  heroVisual,
  showIntro = true,
  links = [],
  glanceItems = [],
  children,
}: CaseStudyLayoutProps) {
  const metaItems = [
    year ? { label: 'Year', value: year } : null,
    role ? { label: 'Role', value: role } : null,
    tech ? { label: 'Stack', value: tech } : null,
  ].filter(Boolean) as Array<{ label: string; value: string | number }>;
  const useCaseStudyGoldEyebrow = eyebrow === 'Product case study';
  const isMosaicCaseStudy = title === 'Mosaic';
  const mosaicLiveLink = links.find((link) => 'url' in link);

  const trackCaseStudyLinkClick = (link: ProjectLink) => {
    const analyticsEvent = getProjectLinkAnalytics({
      link,
      projectName: title,
      projectSlug: slug,
      placement: 'case_study_footer',
      elementIdPrefix: 'case_study',
    });

    trackEvent(analyticsEvent.eventName, analyticsEvent.properties);
  };

  return (
    <Page>
      <BackLink to="/projects">
        <ArrowLeft size={16} weight="bold" />
        back to projects
      </BackLink>

      {showIntro ? (
        <Hero>
          <div>
            {eyebrow ? (
              <Eyebrow $useCaseStudyGold={useCaseStudyGoldEyebrow}>
                {eyebrow}
              </Eyebrow>
            ) : null}
            <Title>{title}</Title>
          </div>

          <HeroAside>
            <Summary>{summary}</Summary>

            {metaItems.length ? (
              <MetaList>
                {metaItems.map((item) => (
                  <MetaItem key={item.label}>
                    <MetaLabel>{item.label}</MetaLabel>
                    <MetaValue>{item.value}</MetaValue>
                  </MetaItem>
                ))}
              </MetaList>
            ) : null}
          </HeroAside>
        </Hero>
      ) : null}

      {!showIntro && eyebrow ? (
        <StandaloneEyebrow $useCaseStudyGold={useCaseStudyGoldEyebrow}>
          {eyebrow}
        </StandaloneEyebrow>
      ) : null}

      {heroVisual || heroImage ? (
        <HeroMedia>
          {heroVisual || <HeroImage src={heroImage} alt={`${title} cover`} />}
        </HeroMedia>
      ) : null}

      {glanceItems.length ? (
        <GlanceGrid>
          {glanceItems.map((item) => (
            <GlanceCard key={item.label}>
              <GlanceLabel>{item.label}</GlanceLabel>
              <GlanceValue>{item.value}</GlanceValue>
            </GlanceCard>
          ))}
        </GlanceGrid>
      ) : null}

      <Content>{children}</Content>

      {isMosaicCaseStudy && mosaicLiveLink && 'url' in mosaicLiveLink ? (
        <MosaicClosing>
          <MosaicSecondaryLink to="/projects">
            <ArrowLeft size={16} weight="bold" />
            Back to projects
          </MosaicSecondaryLink>
          <MosaicPrimaryLink
            href={mosaicLiveLink.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCaseStudyLinkClick({
                ...mosaicLiveLink,
                label: 'Get Mosaic',
              })
            }
          >
            Get Mosaic
            <ArrowUpRight size={14} weight="bold" />
          </MosaicPrimaryLink>
        </MosaicClosing>
      ) : (
        <Closing>
          <ClosingCopy>
            Want to keep exploring? View the live product or head back to the
            project archive.
          </ClosingCopy>
          <LinkList>
            {links.map((link) => {
              if ('to' in link) {
                return (
                  <CaseStudyLink
                    key={link.to}
                    to={link.to}
                    onClick={() => trackCaseStudyLinkClick(link)}
                  >
                    {getLinkIcon(link.type)}
                    {link.label}
                  </CaseStudyLink>
                );
              }

              return (
                <ExternalLink
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCaseStudyLinkClick(link)}
                >
                  {getLinkIcon(link.type)}
                  {link.label}
                  <ArrowUpRight size={14} weight="bold" />
                </ExternalLink>
              );
            })}
            <CaseStudyLink to="/projects">
              <ArrowLeft size={16} weight="bold" />
              All projects
            </CaseStudyLink>
          </LinkList>
        </Closing>
      )}
    </Page>
  );
}
