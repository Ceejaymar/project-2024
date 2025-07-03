import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../projectCard/ProjectCard';
import { getThemeTransition } from '../../utils/themeTransition';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';

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

const projects = [
  {
    title: 'Batéy Fashion (WIP)',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/batey.png?alt=media&token=9276baaa-a8a8-468f-b935-a9e632017f5b',
    description:
      "I wanted to experience the feeling of creating a fashion brand, imagining it born from the culture and spirit of my home country. What would it look like? What emotions would it stir? This is the unfolding story of that exploration. This project is a WORK IN PROGRESS, and I'm excited to share what I've discovered so far.",
    tech: 'React, TypeScript, Styled-components, Framer Motion, Storybook',
    repo: 'https://github.com/Ceejaymar/batey',
    live: 'https://batey.netlify.app/',
  },
  {
    title: 'Accessibility Drawer',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/Screenshot%202025-07-02%20at%2011.23.52%E2%80%AFPM.png?alt=media&token=fc0fca95-bfca-4f82-91d6-2d235df11b32',
    description:
      'The A11y Drawer is a versatile, user-friendly component designed to empower website and application users with the ability to dynamically adjust multiple accessibility settings. This project aims to create a robust and highly customizable solution that enhances inclusivity by providing immediate control over common accessibility preferences directly within the user interface.',
    tech: 'React, TypeScript, TailwindCSS',
    repo: 'https://github.com/Ceejaymar/a11y-drawer',
    live: 'https://a11y-drawer.netlify.app/',
  },
  {
    title: 'weather app',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/weather.png?alt=media&token=c202741a-ff4c-4540-870e-3da62d3c87b9',
    description:
      "A simple React weather app that uses the OpenWeather API to fetch and display current weather data based on the user's location or a searched city. The app features a clean interface, showing temperature, weather conditions, and other key details.",
    tech: 'React, Styled-components, Storybook, Axios',
    repo: 'https://github.com/Ceejaymar/weather',
    live: 'https://starlit-queijadas-1645a0.netlify.app/',
  },
];

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
