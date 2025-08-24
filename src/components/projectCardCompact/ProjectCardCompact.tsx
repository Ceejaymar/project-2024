import React from 'react';
import styled from 'styled-components';

import ExternalLink from '../externalLink/ExternalLink';

const Card = styled.div`
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
  justify-content: space-between;
  margin-top: 2rem;
`;

export default function ProjectCardCompact({ project }) {
  return (
    <Card key={project.slug}>
      <ImgWrapper>
        <Image src={project.image} alt={project.title} />
      </ImgWrapper>
      <ContentWrapper>
        <H2>{project.title}</H2>
        <Year>{project.year}</Year>
        <Technologies>{project.tech}</Technologies>
        <LinkWrapper>
          <ExternalLink href={project.repo}>View Code</ExternalLink>
          <ExternalLink href={project.live}>View Live site</ExternalLink>
        </LinkWrapper>
      </ContentWrapper>
    </Card>
  );
}
