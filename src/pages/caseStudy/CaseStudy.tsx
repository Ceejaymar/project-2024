import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  GithubLogo,
  Globe,
  AppleLogo,
  AndroidLogo,
  ArrowUpRight,
} from '@phosphor-icons/react';

import { fullProjects } from '../../portfolio-data';
import media from '../../utils/mediaQueries';
import { ProjectLink } from '../../types';

// ─── Icon helper ────────────────────────────────────────────────────────────

const getLinkIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <GithubLogo size={18} weight="bold" />;
    case 'apple':
      return <AppleLogo size={18} weight="bold" />;
    case 'android':
      return <AndroidLogo size={18} weight="bold" />;
    case 'web':
    case 'marketing':
    default:
      return <Globe size={18} weight="bold" />;
  }
};

// ─── Animation variants ──────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Styled components ───────────────────────────────────────────────────────

const Page = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 1.25rem 6rem;

  ${media.tablet`
    padding: 2rem 2rem 6rem;
  `}
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors['secondary-text']};
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
  }
`;

const Hero = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Meta = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const Title = styled(motion.h1)`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors['default-text']};
  max-width: 18ch;

  ${media.tablet`
    font-size: 3.5rem;
  `}

  ${media.laptop`
    font-size: 4.5rem;
    letter-spacing: -2px;
  `}
`;

const CoverImage = styled(motion.img)`
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  object-position: top;
  border-radius: 16px;
  margin: 1.5rem 0 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const TwoCol = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  width: 100%;
  margin-bottom: 3rem;

  ${media.laptop`
    grid-template-columns: 1fr 380px;
    gap: 4rem;
  `}
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors['secondary-text']};
  max-width: 65ch;
`;

const LinksPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LinksPanelTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['secondary-text']};
  margin-bottom: 0.25rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  & svg {
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}60;
    background-color: ${({ theme }) => theme.colors.primary}08;
    transform: translateY(-2px);
  }

  & > span {
    flex: 1;
  }

  & .arrow {
    margin-left: auto;
    opacity: 0.4;
  }
`;

const Divider = styled(motion.hr)`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0.5rem 0 2.5rem;
`;

// ─── Tech stack section ──────────────────────────────────────────────────────

const TechSection = styled(motion.div)`
  width: 100%;
  margin-bottom: 4rem;
`;

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['secondary-text']};
  margin-bottom: 1rem;
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors['default-text']};
  border: 1px solid ${({ theme }) => theme.colors.border};
  letter-spacing: 0.01em;
`;

// ─── Content sections ────────────────────────────────────────────────────────

const ContentGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const ContentCard = styled(motion.section)`
  padding: 2rem 1.5rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 3px solid ${({ theme }) => theme.colors.primary}40;

  ${media.tablet`
    padding: 2.5rem 2.5rem;
  `}
`;

const CardNumber = styled.span`
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['default-text']};
  margin-bottom: 1.25rem;
  letter-spacing: -0.3px;
`;

const Placeholder = styled.p`
  font-size: 1rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors['secondary-text']};
  max-width: 70ch;
  font-style: italic;
  opacity: 0.6;
`;

// ─── Not found ───────────────────────────────────────────────────────────────

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex: 1;
  padding: 6rem 0;
  color: ${({ theme }) => theme.colors['secondary-text']};
  text-align: center;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['default-text']};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const project = fullProjects.find((p) => p.caseStudySlug === slug);

  if (!project) {
    return (
      <Page initial="hidden" animate="show" variants={container}>
        <BackLink to="/projects">
          <ArrowLeft size={16} weight="bold" />
          back to projects
        </BackLink>
        <NotFound>
          <h2>Project not found</h2>
          <Link to="/projects">← Back to all projects</Link>
        </NotFound>
      </Page>
    );
  }

  const techList = project.tech.split(',').map((t) => t.trim());

  return (
    <Page initial="hidden" animate="show" variants={container}>
      <motion.div style={{ width: '100%' }} variants={item}>
        <BackLink to="/projects">
          <ArrowLeft size={16} weight="bold" />
          back to projects
        </BackLink>
      </motion.div>

      {/* Hero */}
      <Hero variants={container}>
        <motion.div variants={item}>
          <Meta>{project.year} · Case Study</Meta>
        </motion.div>
        <Title variants={item}>{project.title}</Title>
      </Hero>

      {project.image && (
        <CoverImage
          src={project.image}
          alt={`${project.title} cover`}
          variants={imageVariant}
        />
      )}

      {/* Description + Links */}
      <TwoCol variants={item}>
        <Description>
          {project.description || 'Case study content coming soon.'}
        </Description>

        <LinksPanel>
          <LinksPanelTitle>Links</LinksPanelTitle>
          {project.links.map((link: ProjectLink) => (
            <LinkButton
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getLinkIcon(link.type)}
              <span>{link.label}</span>
              <ArrowUpRight size={14} className="arrow" />
            </LinkButton>
          ))}
        </LinksPanel>
      </TwoCol>

      <Divider variants={item} />

      {/* Tech stack */}
      <TechSection variants={item}>
        <SectionLabel>Built with</SectionLabel>
        <PillRow>
          {techList.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </PillRow>
      </TechSection>

      <Divider variants={item} />

      {/* Case study content */}
      <ContentGrid variants={container}>
        <ContentCard variants={item}>
          <CardNumber>01</CardNumber>
          <CardTitle>Overview</CardTitle>
          <Placeholder>
            An overview of the project — the problem it solves, the goals, and
            the outcome. Fill this section in with the story behind why this
            project was built.
          </Placeholder>
        </ContentCard>

        <ContentCard variants={item}>
          <CardNumber>02</CardNumber>
          <CardTitle>Architecture</CardTitle>
          <Placeholder>
            A breakdown of how the application is structured — key decisions
            around data flow, state management, component architecture, and any
            infrastructure choices.
          </Placeholder>
        </ContentCard>

        <ContentCard variants={item}>
          <CardNumber>03</CardNumber>
          <CardTitle>Challenges & Solutions</CardTitle>
          <Placeholder>
            The hardest problems encountered during development and how they
            were solved. Include any performance considerations, tricky edge
            cases, or technical constraints worked around.
          </Placeholder>
        </ContentCard>
      </ContentGrid>
    </Page>
  );
}
