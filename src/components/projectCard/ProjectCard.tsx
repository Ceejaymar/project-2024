import React from 'react';
import styled from 'styled-components';

import media from '../../utils/mediaQueries';
import ExternalLink from '../externalLink/ExternalLink';

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
  `}
`;

const ProjectImage = styled.img`
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
  `}
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem;

  ${media.tablet`
    padding : 2rem 2rem;
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
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-between;

  ${media.laptop`
    justify-content: flex-start;
    gap: 3rem;
  `}
`;

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tech: string;
  repo: string;
  live: string;
}

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  repo,
  live,
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer>
      <ImageContainer>
        <ProjectImage src={image} alt={`${title} screenshot`} />
      </ImageContainer>
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectTech>{tech}</ProjectTech>
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonContainer>
          <ExternalLink href={repo}>View code</ExternalLink>
          <ExternalLink href={live}>View live site</ExternalLink>
        </ButtonContainer>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
