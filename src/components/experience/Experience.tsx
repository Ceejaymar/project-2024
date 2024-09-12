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

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
  text-align: center;
`;

// const SectionText = styled.p`
//   font-size: 1rem;
//   max-width: 600px;
//   line-height: 1.5;
//   color: ${({ theme }) => theme.colors['secondary-text']};
//   text-align: center;
//   margin-top: 2rem;

//   ${media.laptop`
//     /* text-align: left; */
//   `}
// `;

const ExperienceSection = styled.div`
  display: flex;
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

  `}

  ${media.desktop`
    flex-wrap: nowrap;
    justify-content: space-between;
  `}
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  flex-basis: calc(50% - 1rem);

  ${media.laptop`
    max-width: 200px;
  `}

  ${media.desktop`
  `}
`;

const Company = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['secondary-text']};
  text-align: center;

  ${media.laptop`
    text-align: left;
  `}
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors['default-text']};
  margin-top: auto;
`;

const experienceList = [
  {
    company: 'Microsoft',
    date: 'Nov 2017 — Mar 2018',
    title: 'SWE Apprentice',
  },
  {
    company: 'Pursuit',
    date: 'Sep 2018 — May 2020',
    title: 'Full-stack Web IA',
  },
  {
    company: 'One Drop',
    date: 'Jun 2020 — Mar 2022',
    title: 'Software Engineer, Web',
  },
  {
    company: 'Yubico',
    date: 'Aug 2022 — present',
    title: 'Software Engineer II',
  },
];

const About = ({ themeName }: HeaderProps) => (
  <Section id="experience" key={themeName} {...getThemeTransition(themeName)}>
    <SectionTitle>Experience</SectionTitle>
    {/* <SectionText>
      I am a passionate developer with experience in building dynamic and
      responsive web applications.
    </SectionText> */}
    <ExperienceSection>
      {experienceList.map((experience) => {
        const { company, date, title } = experience;

        return (
          <ExperienceItem key={company}>
            <Company>{company}</Company>
            <Title>{title}</Title>
            <Date>{date}</Date>
          </ExperienceItem>
        );
      })}
    </ExperienceSection>
  </Section>
);

export default About;
