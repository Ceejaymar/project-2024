import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getThemeTransition } from '../../utils/themeTransition';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';

const Section = styled(motion.section)`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;

  ${media.laptop`
    padding: 4rem 2rem;
  `}

  ${media.desktop`
    padding: 7rem 0 5rem;
  `}
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
  text-align: center;
`;

const ExperienceSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1024px;
  margin: 2.5rem 0;
  column-gap: 0.8rem;
  row-gap: 2rem;

  ${media.tablet`
    flex-direction: row;
  `}

  ${media.laptop`
    justify-content: space-between;
    column-gap: 0;
    flex-wrap: nowrap;
    max-width: 1280px;
  `}

  ${media.desktop`
    column-gap: 1.5rem;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 1200px;
  `}
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  ${media.laptop`
    text-align: left;
  `}
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  flex-basis: calc(50% - 1rem);
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary}15;
  font-size: 1rem;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 10px 10px 25px -5px ${({ theme }) => theme.colors.boxShadow}20;

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.secondary}15;
    border-color: ${({ theme }) => theme.colors.secondary};

    ${Title} {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.tertiary}15;
    border-color: ${({ theme }) => theme.colors.tertiary};

    ${Title} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.quaternary}15;
    border-color: ${({ theme }) => theme.colors.quaternary};

    ${Title} {
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }

  ${media.tablet`
    max-width: 14rem;
    padding: 1.5rem .8rem;
  `};

  ${media.laptop`
    /* width:  calc(100% - 5rem); */
    max-width: 14rem;
    padding: 1.5rem .8rem;
  `};

  ${media.desktop`
      padding: 1.5rem 1.5rem;
      max-width: 17.5rem;
  `};
`;

const Company = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const Date = styled.p`
  font-size: 0.8rem;
  /* color: ${({ theme }) => theme.colors.text}; */
  color: ${({ theme }) => theme.colors['default-text']};

  /* margin-top: auto; */
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors['default-text']};
  margin-top: 2rem;
  text-align: center;
`;

const experienceList = [
  {
    company: 'Microsoft',
    date: 'Nov 2017 — Mar 2018',
    title: 'SWE Apprentice',
    description:
      'Partnered with the AzureCXP team to build a testing framework for an internal survey tool designed for enterprise cloud clients. Also worked alongside a Data Engineer to write SQL queries for a Spark cluster database.',
  },
  {
    company: 'Pursuit',
    date: 'Sep 2018 — May 2020',
    title: 'Full-stack Web IA',
    description:
      'Reviewed JavaScript code and led pair programming for 32+ students, while creating workshops on key development topics. Offered personalized feedback and mock interview prep to improve technical skills in Data Structures & Algorithms.',
  },
  {
    company: 'One Drop',
    date: 'Jun 2020 — Mar 2022',
    title: 'Software Engineer, Web',
    description:
      'Led development of an employer enrollment app and a HIPAA-compliant platform for healthcare professionals. Mentored new engineers, setting coding standards and testing priorities.',
  },
  {
    company: 'Yubico',
    date: 'Aug 2022 — present',
    title: 'Software Engineer II',
    description:
      'Developed an interactive quiz and custom WordPress blocks to improve user engagement and content delivery. Implemented internationalization for broader accessibility, collaborated with UX teams on Figma designs, and reduced bugs through end-to-end testing.',
  },
];

const fadeInUpParent = (theme) => ({
  hidden: {
    opacity: 0,
    y: 24,

    backgroundColor: theme.initial.backgroundColor,
    color: theme.initial.color,
  },
  show: {
    opacity: 1,
    y: 0,

    backgroundColor: theme.animate.backgroundColor,
    color: theme.animate.color,

    transition: {
      duration: theme.transition.duration,
      ease: theme.transition.ease,
      staggerChildren: 0.4,
    },
  },
});

const fadeInUpChildren = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const About = ({ themeName }: HeaderProps) => {
  const themeProps = getThemeTransition(themeName);

  return (
    <Section
      id="experience"
      key={themeName}
      {...getThemeTransition(themeName)}
      initial="hidden"
      animate="show"
      variants={fadeInUpParent(themeProps)}
    >
      <SectionTitle variants={fadeInUpChildren}>Experience</SectionTitle>
      <ExperienceSection variants={fadeInUpChildren}>
        {experienceList.map((experience) => {
          const { company, date, title, description } = experience;

          return (
            <ExperienceItem key={company}>
              <Company>{company}</Company>
              <Title>{title}</Title>
              <Date>{date}</Date>
              <Description>{description}</Description>
            </ExperienceItem>
          );
        })}
      </ExperienceSection>
    </Section>
  );
};

export default About;
