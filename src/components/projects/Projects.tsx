import React from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ProjectCard from '../projectCard/ProjectCard';
import { getThemeTransition } from '../../utils/themeTransition';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';
import { projects } from '../../portfolio-data';

const Section = styled(motion.section)`
  width: 100%;
  max-width: 1280px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.laptop`
    padding: 4rem 2rem 7rem;
  `}
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
  text-align: center;
`;

const Subheadline = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  max-width: 40rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const ProjectsLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.quaternary};
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  max-width: 1024px;
  width: 100%;

  ${media.laptop`
    flex-wrap: nowrap;
    flex-direction: column;
  `}
`;

const Projects = ({ themeName }: HeaderProps) => (
  <Section id="projects" key={themeName} {...getThemeTransition(themeName)}>
    <SectionTitle>Projects</SectionTitle>
    <Subheadline>
      This section features a few standout projects. To see more of my side
      projects, one-off components, and frontend challenges,{' '}
      <ProjectsLink to="/projects">
        check out my full Projects page.
      </ProjectsLink>
    </Subheadline>
    <ProjectList>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
          repo={project.repo}
          live={project.live}
        />
      ))}
    </ProjectList>
  </Section>
);

export default Projects;
