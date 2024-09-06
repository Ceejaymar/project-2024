import styled from 'styled-components';
import lightHeadshot from '../../assets/render-headshot.jpg';
import darkHeadshot from '../../assets/tokyo-headshot-scaled.jpg';
import media from '../../utils/mediaQueries';
import { HeaderProps } from '../../types';

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  padding-bottom: 50px;
  max-width: 1280px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  text-align: center;

  ${media.tablet`
    flex-direction: row;
    padding: 0 2rem;
    padding-top: 1.5rem;
    justify-content: space-between;
  `}

  ${media.laptop`
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
  margin-top: 20px;
  letter-spacing: -2px;
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
    letter-spacing: -3px;
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
    /* display: flex; */
    flex-basis: 35%;
    /* padding-right: 20px; */
    justify-content: end;
  `}
`;

const Image = styled.img`
  width: 175px;
  height: 175px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 50%;

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

const Header = ({ theme }: HeaderProps) => {
  return (
    <HeaderSection>
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
      </HeadingContainer>
      <ImageContainer>
        <Image
          src={theme === 'light' ? lightHeadshot : darkHeadshot}
          alt="Carlos"
        />
      </ImageContainer>
    </HeaderSection>
  );
};

export default Header;
