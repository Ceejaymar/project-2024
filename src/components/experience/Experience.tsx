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

  ${media.tablet`
    padding: 4rem 2rem;
  `}

  ${media.desktop`
    padding: 7rem 2rem 5rem;
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
  width: 100%;
  max-width: 1024px;
  margin: 2.5rem 0;
  gap: 2rem;

  ${media.tablet`
    align-items: center;
  `}

  ${media.laptop`
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    flex-wrap: nowrap;
    max-width: 1280px;
  `}
`;

const ExperienceComponent = styled.div`
  flex: 1;
  margin-left: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 25px;
  padding: 1rem 1rem 1.5rem;
  margin: 0 auto;
  font-size: 0.9rem;
  box-shadow: 10px 10px 25px -5px ${({ theme }) => theme.colors.boxShadow}20;

  ${media.tablet`
    max-width: 32rem;
    padding: 2rem;
  `}

  ${media.laptop`
    max-width: 28rem;
    padding: 1.5rem;
    margin: 0;
  `}
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
  font-size: 0.7rem;

  ${media.tablet`
   font-size: 1rem
  `}

  ${media.laptop`
   font-size: 0.9rem
  `}
`;

const Button = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
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

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.laptop`
    max-width: 50%;
  `}
`;

const AboutCopy = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors['secondary-text']};

  ${media.tablet`
    font-size: 1.1rem;
  `}

  ${media.laptop`
    font-size: 1.2rem;
  `}
`;

const TextCSS = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.quaternary};

  @supports ((-webkit-background-clip: text) or (background-clip: text)) {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.tertiary},
      ${({ theme }) => theme.colors.quaternary},
      ${({ theme }) => theme.colors.senary} 120%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`;

const TextTitle = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.quaternary};

  @supports ((-webkit-background-clip: text) or (background-clip: text)) {
    background: linear-gradient(
      190deg,
      ${({ theme }) => theme.colors.primary} 20%,
      ${({ theme }) => theme.colors.secondary}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`;

const TextTool = styled.span`
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(
    190deg,
    ${({ theme }) => theme.colors.senary} 10%,
    ${({ theme }) => theme.colors.quaternary} 80%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextUserCentered = styled.span`
  font-weight: 600;
  padding-bottom: 12px;
  background-image: ${({ theme }) =>
    `url("data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 12' preserveAspectRatio='none'>
        <!-- top line: baseline y=7, slight arch up to y~5 -->
        <path d='M0 7 Q50 5 100 7'
              fill='none' stroke='${theme.colors.secondary}' stroke-width='2'
              stroke-linecap='round' stroke-linejoin='round'/>
        <!-- bottom line: baseline y=10, slight arch up to y~8.5 -->
        <path d='M0 10 Q50 8.5 100 10'
              fill='none' stroke='${theme.colors.secondary}' stroke-width='2'
              stroke-linecap='round' stroke-linejoin='round'/>
      </svg>
    `)}")`};
  background-repeat: no-repeat;
  background-position: left calc(100% - 6px);
  background-size: 100% 12px;
`;

const TextA11y = styled.span`
  font-weight: 600;
  padding-bottom: 6px;
  background-image: ${({ theme }) =>
    `url("data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 8'><path d='M0 4 C2 4, 4 2.5, 6 4 S10 5.5, 12 4 S16 2.5, 18 4 S22 5.5, 24 4 S28 2.5, 30 4 S34 5.5, 36 4 S40 2.5, 42 4 S46 5.5, 48 4' fill='none' stroke='${theme.colors.primary}' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    )}")`};
  background-repeat: repeat-x;
  background-position: left 100%;
  background-size: 45px 8px;
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
      <SectionTitle variants={fadeInUpChildren}>About me</SectionTitle>
      <ExperienceSection variants={fadeInUpChildren}>
        <AboutSection>
          <AboutCopy>
            I&apos;m a <TextTitle>Creative Engineer</TextTitle> who loves
            building elegant applications with intuitive user experiences. My
            work is focused on bridging the gap between{' '}
            <span>design and development</span>, crafting solutions that are as
            beautiful to look at as they are delightful to use.
          </AboutCopy>
          <AboutCopy>
            I approach every project with a{' '}
            <TextUserCentered>user-centered</TextUserCentered> mindset and a
            strong commitment to <TextA11y>accessibility</TextA11y>. I love
            taking complex challenges and breaking them down to build elegant,
            inclusive solutions.
          </AboutCopy>
          <AboutCopy>
            I mostly find myself building with <TextTool>React</TextTool>,{' '}
            <TextTool>TypeScript</TextTool>, and different{' '}
            <TextCSS>flavors of CSS</TextCSS>, shaping interfaces that feel
            smooth, intuitive, and purposeful. Ultimately, I aim to deliver
            interactions that genuinely improve the rhythm of a user&apos;s
            daily life.
          </AboutCopy>
          <AboutCopy>
            I want to continue being in spaces where I can{' '}
            <span>nurture my creativity</span> and create products that will
            propagate throughout our communities.
          </AboutCopy>
          <AboutCopy>✨Let&apos;s build cool stuff together✨</AboutCopy>
        </AboutSection>
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
