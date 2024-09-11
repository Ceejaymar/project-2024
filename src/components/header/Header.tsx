import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowSquareOut, ArrowDown } from '@phosphor-icons/react';
import lightHeadshot from '../../assets/render-headshot-reduced.webp';
import shibuyaHeadshot from '../../assets/tokyo-headshot-reduced.webp';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';
import { getThemeTransition } from '../../utils/themeTransition';

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
    padding: 4rem 0;
  `}
`;

const HeadingContainer = styled.div`
  flex-basis: 65%;

  ${media.laptop`
    flex-basis: 60%;
  `}

  ${media.desktop`
    padding-top: 1.5rem;
  `}
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: left;
  margin-top: 1.5rem;
  letter-spacing: -2px;
  font-weight: 600;
  & span:nth-of-type(1) {
    /* color: ${({ theme }) => theme.colors.primary}; */
  }
  & span:nth-of-type(2) {
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
    letter-spacing: -4px;
    font-size: 3.4rem;
  `}

  ${media.desktop`
    font-size: 4rem;
  `}
`;

const Description = styled.span`
  display: block;
  padding-top: 20px;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors['secondary-text']};

  ${media.mobile`
    font-size: 1.2rem;
  `}

  ${media.tablet`
    max-width: 40ch;
    flex-direction: row;
    padding-top: 0.8rem;
  `}

  ${media.laptop`
    max-width: 50ch;
    font-size: 1.2rem;
  `}

  ${media.desktop`
    padding-top: 1.5rem;
    max-width: 60ch;
  `}
`;

const ImageContainer = styled.div`
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
  box-shadow: 0px 5px 25px ${({ theme }) => theme.colors['secondary-text']};

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  font-size: 1.1rem;
`;

const Button = styled.button`
  align-items: center;
  display: flex;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  padding-right: 15px;
  cursor: pointer;
`;

const ButtonSecondary = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors['default-text']}95;
  border: none;
  text-decoration: underline;
`;

const MotionArrowSquareOut = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const resume =
  'https://drive.google.com/file/d/1MgFbvhWgNVoTxVtUGkiwP9eR_BLElxkF/view?usp=drive_link';

const Header = ({ themeName }: HeaderProps) => {
  return (
    <HeaderSection key={themeName} {...getThemeTransition(themeName)}>
      <HeadingContainer>
        <Heading>
          Hey there, I'm <span>Carlos</span>.
          <br />
          <span>Front-End Web Developer</span>
          <br />
        </Heading>
        <Description>
          Blending creativity and code to build meaningful digital solutions. I
          thrive in collaborative teams, using modern tech to create reliable
          applications that enhance user experiences and solve real-world
          problems.
        </Description>
        <ButtonContainer>
          <Button>
            Explore my projects <ArrowDown size={18} weight="bold" />
          </Button>
          <ButtonSecondary
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileHover="visible"
          >
            Download resume
            <MotionArrowSquareOut
              variants={{
                hidden: { x: -10, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ ease: 'easeIn', duration: 0.2 }}
            >
              <ArrowSquareOut size={18} weight="bold" />
            </MotionArrowSquareOut>
          </ButtonSecondary>
        </ButtonContainer>
      </HeadingContainer>
      <ImageContainer>
        <Image
          key={themeName}
          src={themeName === 'light' ? lightHeadshot : shibuyaHeadshot}
          alt="Carlos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </ImageContainer>
    </HeaderSection>
  );
};

export default Header;
