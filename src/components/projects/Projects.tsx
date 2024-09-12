import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../projectCard/ProjectCard';
import media from '../../utils/mediaQueries';

const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};

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
    title: 'weather app',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/weather.png?alt=media&token=c202741a-ff4c-4540-870e-3da62d3c87b9',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.',
    tech: 'React, Styled-components, Storybook, Axios',
    repo: 'https://github.com/Ceejaymar/weather',
    live: 'https://starlit-queijadas-1645a0.netlify.app/',
  },
  {
    title: 'the ends',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/TheEnds.jpg?alt=media&token=158a2289-3f03-4682-b51d-d56ea7d468e9',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.',
    tech: 'React, SCSS, Firebase, Postgres, Express, SQL, Travis CI',
    repo: 'https://github.com/Ceejaymar/TheEnds-ecommerce-frontend',
    live: 'https://theends.web.app/',
  },
  // {
  //   title: 'project 3',
  //   image: '',
  //   description:
  //     'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.',
  //   tech: 'javascript, css, hmtl',
  //   repo: 'https://github.com/carlos-alberto-dev/project-3',
  //   live: 'https://project-3.com',
  // },
];

const Projects = () => (
  <Section id="projects">
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
