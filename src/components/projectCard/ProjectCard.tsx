import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { NavLink } from 'react-router';
import {
  GithubLogo,
  Globe,
  AppleLogo,
  AndroidLogo,
  BookOpen,
} from '@phosphor-icons/react';

import media from '../../utils/mediaQueries';
import ExternalLink from '../externalLink/ExternalLink';
import { ProjectLink } from '../../types';
import { getProjectLinkTarget, trackEvent } from '../../lib/analytics';

const HIDE_CASE_STUDY_LINKS: boolean = false;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  border-radius: 15px;
  margin-top: 2.5rem;
  box-shadow: 10px 10px 25px -5px ${({ theme }) => theme.colors.boxShadow}20;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 10px 14px 28px -12px ${({ theme }) => theme.colors.boxShadow}26;
  }

  border: double 1.5px transparent;
  border-radius: 15px;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.background},
      ${({ theme }) => theme.colors.background}
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.tertiary},
      ${({ theme }) => theme.colors.quaternary}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  ${media.tablet`
    height: auto;
    width: calc(50% - 0.5rem);
  `}

  ${media.laptop`
    height: auto;
    width: 100%;
    flex-direction: row;
    padding: 0 1.5rem;
  `}
`;

const ImageContainer = styled.div`
  ${media.laptop`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 40%;
    overflow: hidden;
    border-radius: 10px;
  `}
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  margin-bottom: -2.1rem;

  ${media.tablet`
    max-height: 195px;
    object-fit: cover;
    object-position: top;
  `}

  ${media.laptop`
    max-height: unset;
    width: 90%;
    height: 90%;
    margin-bottom: -3.1rem;
    border-radius: 10px;
    will-change: transform;
  `}
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem;

  ${media.tablet`
    padding: 2rem 2rem;
    justify-content: space-between;
  `}

  ${media.laptop`
    flex-basis: 60%;
  `}

  ${media.desktop`
    padding: 3rem 2rem;
  `}
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const ProjectTech = styled.p`
  font-size: 0.7rem;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-weight: 600;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
  flex: 1;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  align-items: center;
`;

const CaseStudyLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;

const getLinkIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <GithubLogo size={16} weight="bold" />;
    case 'case-study':
      return <BookOpen size={16} weight="bold" />;
    case 'apple':
      return <AppleLogo size={16} weight="bold" />;
    case 'android':
      return <AndroidLogo size={16} weight="bold" />;
    case 'web':
    case 'marketing':
    default:
      return <Globe size={16} weight="bold" />;
  }
};

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tech: string;
  links: ProjectLink[];
}

const springConfig = { stiffness: 120, damping: 22, mass: 0.5 };

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  links,
}: ProjectCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const imgX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const trackProjectLinkClick = (link: ProjectLink) => {
    const target = getProjectLinkTarget(link.type, link.label);

    trackEvent('project_clicked', {
      project: title,
      location: 'project_card',
      target,
    });

    if ('url' in link) {
      trackEvent('outbound_clicked', {
        label: link.label,
        project: title,
        destination: link.url,
        location: 'project_card',
      });
    }
  };

  return (
    <ProjectCardContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ImageContainer>
        <ProjectImage
          style={{ x: imgX, y: imgY, scale: 1.05 }}
          src={image}
          alt={`${title} screenshot`}
        />
      </ImageContainer>
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectTech>{tech}</ProjectTech>
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonContainer>
          {links.map((link) => {
            if ('to' in link) {
              if (link.type === 'case-study' && HIDE_CASE_STUDY_LINKS) {
                return null;
              }

              return (
                <CaseStudyLink
                  key={link.to}
                  to={link.to}
                  onClick={() => trackProjectLinkClick(link)}
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
                onClick={() => trackProjectLinkClick(link)}
              >
                {getLinkIcon(link.type)}
                {link.label}
              </ExternalLink>
            );
          })}
        </ButtonContainer>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
