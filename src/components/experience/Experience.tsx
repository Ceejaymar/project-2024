import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Briefcase, FileArrowDown } from '@phosphor-icons/react';
import { getThemeTransition } from '../../utils/themeTransition';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';
import { experienceList } from '../../portfolio-data';

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

const ExperienceComponent = styled.div`
  margin-left: auto;
  width: 425px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 2px solid #ccc;
  border-radius: 25px;
  padding: 2rem;
  font-size: 0.9rem;
  box-shadow: 10px 10px 25px -5px ${({ theme }) => theme.colors.boxShadow}20;
`;

const WorkTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 0.7rem;
  font-weight: 600;
`;

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50px;
  overflow: hidden;
  flex: 0 0 50px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const ExperienceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const ExperienceText = styled.div`
  width: 100%;
`;

const CompanyName = styled.span`
  font-weight: 600;
`;

const TitleDateRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const Button = styled(motion.a)`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.6rem 2rem;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  margin: 0 auto;
`;

const MotionArrowUpRight = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const fadeInUpParent = (theme: any) => ({
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
        <ExperienceComponent>
          <WorkTitle>
            <Briefcase size={32} weight="regular" />
            <span>Professional work</span>
          </WorkTitle>

          <ExperienceList>
            {experienceList.map((experience) => (
              <ExperienceItem key={experience.company}>
                <ImgContainer>
                  <LogoImg src={experience.image} alt={experience.company} />
                </ImgContainer>

                <ExperienceText>
                  <CompanyName>{experience.company}</CompanyName>
                  <TitleDateRow>
                    <span>{experience.title}</span>
                    <span>{experience.date}</span>
                  </TitleDateRow>
                </ExperienceText>
              </ExperienceItem>
            ))}
          </ExperienceList>

          <Button
            whileHover="bounce"
            href="/carlos-martinez-resume.pdf"
            download
          >
            Download Resume{' '}
            <MotionArrowUpRight
              variants={{ bounce: { y: [0, -5, 0, -2, 0] } }}
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
