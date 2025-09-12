import React, { useEffect } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { ArrowLeft } from '@phosphor-icons/react';

import ProjectCardCompact from '../../components/projectCardCompact/ProjectCardCompact';
import { fullProjects as projects } from '../../portfolio-data';
import media from '../../utils/mediaQueries';

const ProjectContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  min-height: 100vh;
  width: 100%;
  gap: 2rem;
  padding: 2rem 2rem 4rem;
`;

const Back = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors['secondary-text']};
  text-decoration: none;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const Subheadline = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors['secondary-text']};
  max-width: 40rem;
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.laptop`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

export default function ProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <ProjectContainer>
      <Back to={{ pathname: '/', hash: '#projects' }}>
        <ArrowLeft size={16} weight="bold" />
        back to home
      </Back>
      <Title>Projects</Title>
      <Subheadline>
        A full collection of personal projects, frontend challenges, and
        experiments that showcase my passion for building UIs and continuous
        learning.
      </Subheadline>

      <ProjectsWrapper>
        {projects.map((project) => {
          return <ProjectCardCompact key={project.slug} project={project} />;
        })}
      </ProjectsWrapper>
    </ProjectContainer>
  );
}
