import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Briefcase, FileArrowDown } from '@phosphor-icons/react';
import { getThemeTransition } from '../../utils/themeTransition';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';
import yImage from '../../assets/yImage.png';
import oImage from '../../assets/oImage.jpg';
import mImage from '../../assets/mImage.png';
import pImage from '../../assets/pImage.png';

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

const ExperienceComponent = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 2px solid #ccc;
  border-radius: 25px;
  padding: 2rem;
  font-size: 0.9rem;
`;

const WorkTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.7rem;
`;

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50px;
  overflow: hidden;
  flex: 0 0 50px;
`;

const Button = styled(motion.a)`
  display: none;
  width: fit-content;
  gap: 7px;
  background-color: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  padding-right: 15px;
  cursor: pointer;
  text-decoration: none;

  ${media.tablet`
    display: flex;
  `}
`;

const MotionArrowUpRight = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const experienceList = [
  {
    company: 'Yubico',
    date: '2022 — 2025',
    title: 'Frontend Software Engineer II',
    image: yImage,
    description:
      'Developed an interactive quiz and custom WordPress blocks to improve user engagement and content delivery. Implemented internationalization for broader accessibility, collaborated with UX teams on Figma designs, and reduced bugs through end-to-end testing.',
  },
  {
    company: 'One Drop',
    date: '2020 — 2022',
    title: 'Software Engineer, Web',
    image: oImage,
    description:
      'Led development of an employer enrollment app and a HIPAA-compliant platform for healthcare professionals. Mentored new engineers, setting coding standards and testing priorities.',
  },
  {
    company: 'Pursuit',
    date: '2018 — 2020',
    title: 'Fullstack Assistant Instructor ',
    image: pImage,
    description:
      'Reviewed JavaScript code and led pair programming for 32+ students, while creating workshops on key development topics. Offered personalized feedback and mock interview prep to improve technical skills in Data Structures & Algorithms.',
  },
  {
    company: 'Microsoft',
    date: '2017 — 2018',
    title: 'Software Engineer Intern',
    image: mImage,
    description:
      'Partnered with the AzureCXP team to build a testing framework for an internal survey tool designed for enterprise cloud clients. Also worked alongside a Data Engineer to write SQL queries for a Spark cluster database.',
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
      <ExperienceSection variants={fadeInUpChildren}>
        <ExperienceComponent>
          <WorkTitle>
            <Briefcase size={32} weight="regular" />
            <span>Professional work</span>
          </WorkTitle>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {experienceList.map((experience) => (
              <div
                key={experience.company}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ImgContainer>
                  <img
                    src={experience.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </ImgContainer>
                <div
                  style={{
                    width: '100%',
                  }}
                >
                  <span>{experience.company}</span>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>{experience.title}</span>
                    <span>{experience.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button whileHover="bounce" href="#projects">
            Download Resume{' '}
            <MotionArrowUpRight
              variants={{
                // hidden: { x: -10, opacity: 0 },
                bounce: { y: [0, -5, 0, -2, 0] },
              }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                repeat: Infinity,
              }}
            >
              <FileArrowDown size={24} weight="duotone" />
            </MotionArrowUpRight>
          </Button>
        </ExperienceComponent>
      </ExperienceSection>
    </Section>
  );
};

export default About;
