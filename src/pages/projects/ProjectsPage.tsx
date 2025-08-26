import React, { useEffect } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { ArrowLeft } from '@phosphor-icons/react';

import ProjectCardCompact from '../../components/projectCardCompact/ProjectCardCompact';
import media from '../../utils/mediaQueries';

const projects = [
  {
    title: 'Blog Card',
    slug: 'blog-card',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/fc-blog-card.webp',
    description: '',
    year: 2025,
    tech: 'HTML, CSS',
    repo: 'https://github.com/Ceejaymar/frontend-challenges/tree/main/apps/blog-card',
    live: 'https://frontend-challenges-blog-card.vercel.app/',
  },
  {
    title: 'Pricing Section',
    slug: 'pricing-section',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/fc-pricing-section.webp',
    description: '',
    year: 2025,
    tech: 'React, TypeScript, TailwindCSS',
    repo: 'https://github.com/Ceejaymar/frontend-challenges/tree/main/apps/pricing-section',
    live: 'https://frontend-challenges-pricing-section.vercel.app/',
  },
  {
    title: 'Batéy Fashion',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/batey.png?alt=media&token=9276baaa-a8a8-468f-b935-a9e632017f5b',
    description:
      "I wanted to experience the feeling of creating a fashion brand, imagining it born from the culture and spirit of my home country. What would it look like? What emotions would it stir? This is the unfolding story of that exploration. While working on this project, I've also been using tools that are new to me, which has been an exciting part of the journey. This project is a WORK IN PROGRESS, and I'm excited to share what I've discovered so far.",
    year: 2025,
    tech: 'NextJS, TypeScript, CSS Modules, Better-SQLite3, Zod',
    repo: 'https://github.com/Ceejaymar/batey-fs',
    live: 'https://batey.vercel.app/',
  },
  {
    title: 'Accessibility Drawer',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/Screenshot%202025-07-02%20at%2011.23.52%E2%80%AFPM.png?alt=media&token=fc0fca95-bfca-4f82-91d6-2d235df11b32',
    description:
      'The A11y Drawer is a versatile, user-friendly component designed to empower website and application users with the ability to dynamically adjust multiple accessibility settings. This project aims to create a robust and highly customizable solution that enhances inclusivity by providing immediate control over common accessibility preferences directly within the user interface.',
    year: 2025,
    tech: 'React, TypeScript, TailwindCSS',
    repo: 'https://github.com/Ceejaymar/a11y-drawer',
    live: 'https://a11y-drawer.netlify.app/',
  },
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/portfolio-website.webp',
    description: '',
    year: 2024,
    tech: 'React, TypeScript, Styled-Components',
    repo: 'https://github.com/Ceejaymar/project-2024',
    live: 'https://los.codes',
  },
  {
    title: 'Weather app',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/weather.png?alt=media&token=c202741a-ff4c-4540-870e-3da62d3c87b9',
    description:
      "A simple React weather app that uses the OpenWeather API to fetch and display current weather data based on the user's location or a searched city. The app features a clean interface, showing temperature, weather conditions, and other key details.",
    year: 2022,
    tech: 'React, Styled-components, Storybook, Axios',
    repo: 'https://github.com/Ceejaymar/weather',
    live: 'https://starlit-queijadas-1645a0.netlify.app/',
  },
  {
    title: 'The Ends ecommerce',
    slug: 'the-ends',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/TheEnds.jpg?alt=media&token=158a2289-3f03-4682-b51d-d56ea7d468e9',
    description: '',
    year: 2019,
    tech: 'React, SASS, Node, Postgres, Express, SQL, Firebase, Travis CI',
    repo: 'https://github.com/Ceejaymar/TheEnds-ecommerce-frontend',
    live: 'https://theends.web.app/',
  },
  {
    title: 'Portfolio Website - Old',
    slug: 'portfolio-website-old',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/portfolio-website-old.webp',
    description: '',
    year: 2019,
    tech: 'React, Mui',
    repo: 'https://github.com/Ceejaymar/portfolio-2019',
    live: 'https://carlosmartinez.dev/',
  },
  {
    title: 'Dreamshare clone',
    slug: 'dreamshare',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/Dreamshare.webp',
    description: '',
    year: 2018,
    tech: 'React, SASS',
    repo: 'https://github.com/Ceejaymar/Dreamshare-morty',
    live: 'https://dreamshare-cm.surge.sh/',
  },
  {
    title: 'Knobcreek clone',
    slug: 'knobcreek',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/KnobcreekLow.jpg?alt=media&token=838c900d-8f8c-446d-bb20-a539905e0cbf',
    description: '',
    year: 2018,
    tech: 'React, SASS',
    repo: 'https://github.com/Ceejaymar/knobcreek-barrel',
    live: 'https://knobcreek-cm.surge.sh/',
  },
];

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
