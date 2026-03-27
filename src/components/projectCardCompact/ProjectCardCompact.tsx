import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router';
import {
  GithubLogo,
  Globe,
  AppleLogo,
  AndroidLogo,
  BookOpen,
} from '@phosphor-icons/react';

import ExternalLink from '../externalLink/ExternalLink';
import { ProjectLink } from '../../types';

const Card = styled.div`
  display: flex;
  flex-direction: column;
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

  border-radius: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 10px 10px 15px -5px ${({ theme }) => theme.colors.boxShadow}20;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -8px ${({ theme }) => theme.colors.boxShadow}35;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 16rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const Year = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['secondary-text']};
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const Technologies = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
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

interface ProjectCardCompactProps {
  project: {
    title: string;
    image: string;
    tech: string;
    year?: number;
    slug?: string;
    links: ProjectLink[];
    caseStudySlug?: string;
  };
}

export default function ProjectCardCompact({
  project,
}: ProjectCardCompactProps) {
  return (
    <Card>
      <ImgWrapper>
        <Image src={project.image} alt={project.title} />
      </ImgWrapper>
      <ContentWrapper>
        <H2>{project.title}</H2>
        <Year>{project.year}</Year>
        <Technologies>{project.tech}</Technologies>
        <LinkWrapper>
          {project.links.map((link) => (
            <ExternalLink key={link.type} href={link.url}>
              {getLinkIcon(link.type)}
              {link.label}
            </ExternalLink>
          ))}
          {project.caseStudySlug && (
            <CaseStudyLink to={`/projects/${project.caseStudySlug}`}>
              <BookOpen size={16} weight="bold" />
              Read Case Study
            </CaseStudyLink>
          )}
        </LinkWrapper>
      </ContentWrapper>
    </Card>
  );
}
