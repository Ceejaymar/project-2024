import React, { useEffect } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

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
`;

const Subheadline = styled.p`
  text-align: center;
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
  padding: 0.5rem 2rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors['default-text']};
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

const CardLink = styled(motion.a)`
  display: flex;
  gap: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors['default-text']};
  transition: all 0.3s ease;
`;

const MotionArrowUpRight = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 2px;
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
          return (
            <Card key={project.slug}>
              <ImgWrapper>
                <Image src={project.image} alt={project.title} />
              </ImgWrapper>
              <ContentWrapper>
                <H2>{project.title}</H2>
                <Technologies>{project.tech}</Technologies>
                <LinkWrapper>
                  <CardLink
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileHover="visible"
                  >
                    View Code
                    <MotionArrowUpRight
                      variants={{
                        hidden: { x: -10, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      }}
                      transition={{ ease: 'easeIn', duration: 0.1 }}
                    >
                      <ArrowUpRight size={16} weight="bold" />
                    </MotionArrowUpRight>
                  </CardLink>
                  <CardLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileHover="visible"
                  >
                    View Live site
                    <MotionArrowUpRight
                      variants={{
                        hidden: { x: -10, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      }}
                      transition={{ ease: 'easeIn', duration: 0.1 }}
                    >
                      <ArrowUpRight size={16} weight="bold" />
                    </MotionArrowUpRight>
                  </CardLink>
                </LinkWrapper>
              </ContentWrapper>
            </Card>
          );
        })}
      </ProjectsWrapper>
    </ProjectContainer>
  );
}
