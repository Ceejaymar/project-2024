import React, { useEffect } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import ProjectCardCompact from '../../components/projectCardCompact/ProjectCardCompact';
import media from '../../utils/mediaQueries';

const projects = [
  {
    title: 'Blog Card',
    slug: 'blog-card',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/fc-blog-card.webp',
    description: '',
    tech: 'HTML, CSS, Vite',
    repo: 'https://github.com/Ceejaymar/frontend-challenges/tree/main/apps/blog-card',
    live: 'https://frontend-challenges-blog-card.vercel.app/',
  },
  {
    title: 'Pricing Section',
    slug: 'pricing-section',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/fc-pricing-section.webp',
    description: '',
    tech: 'React, TypeScript, TailwindCSS, Vite',
    repo: 'https://github.com/Ceejaymar/frontend-challenges/tree/main/apps/pricing-section',
    live: 'https://frontend-challenges-pricing-section.vercel.app/',
  },
];

const ProjectContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-height: 100vh;
  width: 100%;
  gap: 2rem;
  padding: 1rem 2rem 4rem;
`;

const Back = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const Subheadline = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

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
      <Back to={{ pathname: '/', hash: '#projects' }}>back to home</Back>
      <Title>Projects</Title>
      <Subheadline>
        Here are some of my one off projects, components, and more.
      </Subheadline>

      <ProjectsWrapper>
        {projects.map((project) => {
          return <ProjectCardCompact key={project.slug} project={project} />;
        })}
      </ProjectsWrapper>
    </ProjectContainer>
  );
}
