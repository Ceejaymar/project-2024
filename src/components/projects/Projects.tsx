import React from 'react';
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
