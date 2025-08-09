import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from '@phosphor-icons/react';

import lightHeadshot from '../../assets/render-headshot-reduced.webp';
import shibuyaHeadshot from '../../assets/tokyo-headshot-reduced.webp';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';
import { getThemeTransition } from '../../utils/themeTransition';

const technologies = [
  { name: 'React', url: 'https://react.dev/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Styled-components', url: 'https://styled-components.com/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'Storybook', url: 'https://storybook.js.org/' },
  // { name: 'React Native', url: 'https://reactnative.dev/' },
];

const HeaderSection = styled(motion.header)`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  padding-top: 1.3rem;
  padding-bottom: 50px;
  max-width: 1280px;
  width: 100%;
  text-align: center;

  ${media.tablet`
    flex-direction: row;
    padding: 0 2rem;
    padding-top: 3rem;
    justify-content: space-between;
  `}

  ${media.desktop`
    padding: 4rem 1.5rem;
  `}
`;

const HeadingContainer = styled(motion.div)`
  flex-basis: 65%;

  ${media.laptop`
    flex-basis: 60%;
    padding-bottom: 1.5rem;
  `}

  ${media.desktop`
    padding-top: 1.5rem;
  `}
`;

const Heading = styled(motion.h1)`
  font-size: 2rem;
  text-align: center;
  margin-top: 1.5rem;
  letter-spacing: -1px;
  font-weight: 600;

  & span:nth-of-type(2) {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.quaternary};
  }

  ${media.mobileWide`
    text-align: center;
  `}

  ${media.tablet`
    font-size: 2.6rem;
    margin-top: 0;
    text-align: left;
  `}

  ${media.laptop`
    letter-spacing: -2.px;
    font-size: 3.5rem;

    & span:nth-of-type(2) {
      letter-spacing: -4px;
      font-size: 4rem;
      line-height: 1;
    }
  `}

  ${media.desktop`
    & span:nth-of-type(2) {
      font-size: 5.5rem;
    }
  `}
`;

const Description = styled(motion.span)`
  display: block;
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors['secondary-text']};

  ${media.tablet`
    font-size: 1rem;
    max-width: 40ch;
    flex-direction: row;
    padding-top: 0.8rem;
  `}

  ${media.laptop`
    max-width: 50ch;
    font-size: 1.1rem;
    line-height: 1.6;
  `}

  ${media.desktop`
    padding-top: 1.5rem;
    max-width: 60ch;
  `}
`;

const ImageContainer = styled(motion.div)`
  ${media.laptop`
    flex-basis: 35%;
    justify-content: end;
  `}
`;

const Image = styled(motion.img)`
  width: 175px;
  height: 175px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 50%;
  box-shadow: 10px 10px 25px -5px ${({ theme }) => theme.colors.boxShadow}65;

  ${media.tablet`
    width: 250px;
    height: auto;
    border-radius: 5%;
  `}

  ${media.laptop`
    width: 300px;
  `}

  ${media.desktop`
    width: 400px;
    max-height: 497.98px;
  `}
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;
  font-size: 1.1rem;

  ${media.tablet`
    flex-direction: row;
  `}
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

const ButtonSecondary = styled(motion.a)`
  position: relative;
  display: none;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors['default-text']}95;
  border: none;
  text-decoration: none;

  ${media.tablet`
    display: flex;
  `}
`;

const Bullet = styled(motion.div)`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  border-radius: 50%;
  margin-right: 10px;
`;

const Technologies = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: start;
  gap: 10px;
  font-size: 0.9rem;
  margin-top: 3rem;
`;

const TechCopy = styled(motion.p)`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['secondary-text']};
  margin-bottom: 0.5rem;
`;

const TechListItem = styled(motion.li)`
  margin-right: 1.5rem;
  list-style: none;
`;

const TechLink = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const MotionArrowUpRight = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const MotionArrowSquareOut = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const Underline = styled(motion.li)`
  position: absolute;
  left: 0;
  bottom: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 3px;
  border-radius: 25px;
  list-style: none;
`;

const fadeInUpAnimation = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Header = ({ themeName }: HeaderProps) => {
  return (
    <HeaderSection key={themeName} {...getThemeTransition(themeName)}>
      <HeadingContainer
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        <Heading variants={fadeInUpAnimation}>
          Hey there, I'm <span>Carlos</span>.
          <br />
          <span>Frontend Engineer</span>
          <br />
        </Heading>
        <Description variants={fadeInUpAnimation}>
          Blending creativity and code to build meaningful digital solutions. I
          thrive in collaborative teams, using modern tech to create reliable
          applications that enhance user experiences and solve real-world
          problems.
        </Description>
        <ButtonContainer variants={fadeInUpAnimation}>
          <Button whileHover="bounce" href="#projects">
            Explore my projects{' '}
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
              <ArrowDown size={18} weight="bold" />
            </MotionArrowUpRight>
          </Button>

          <ButtonSecondary
            href="/carlos-martinez-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileHover="visible"
          >
            <Underline
              variants={{
                hidden: { width: '0%' },
                visible: { width: '85%' },
              }}
              transition={{
                duration: 0.3,
                ease: 'easeIn',
              }}
            />
            Get my resume
            <MotionArrowSquareOut
              variants={{
                hidden: { x: -10, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.2,
                delay: 0.2,
              }}
            >
              <ArrowUpRight size={18} weight="bold" />
            </MotionArrowSquareOut>
          </ButtonSecondary>
        </ButtonContainer>
        <Technologies variants={fadeInUpAnimation}>
          <TechCopy>Technologies I work with</TechCopy>
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {technologies.map((tech, index) => (
              <TechListItem key={index}>
                <TechLink
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Bullet />
                  <span>{tech.name}</span>
                </TechLink>
              </TechListItem>
            ))}
          </ul>
        </Technologies>
      </HeadingContainer>
      <ImageContainer
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        <Image
          key={themeName}
          src={themeName === 'light' ? lightHeadshot : shibuyaHeadshot}
          alt="Carlos"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </ImageContainer>
    </HeaderSection>
  );
};

export default Header;
