import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { Envelope, LinkedinLogo } from '@phosphor-icons/react';

import media from '../../utils/mediaQueries';

const Section = styled.section`
  max-width: 1024px;
  width: 100%;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  ${media.desktop`
    padding: 7rem 2rem;
  `}
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
  text-align: center;
`;

const Subtitle = styled.h3`
  /* max-width: 55%; */
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors['secondary-text']};

  ${media.tablet`
    max-width: 80%;
  `}
  ${media.laptop`
    max-width: 60%;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3.5rem;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const Button = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const MotionLinkedinLogo = styled(motion(LinkedinLogo))``;

const MotionEnvelope = styled(motion(Envelope))``;

const EmailButton = styled(motion(Button))`
  background-color: ${({ theme }) => theme.colors.quaternary}15;
  border: 1px solid ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.quaternary};

  & > svg {
    margin-top: 2px;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Subtitle>
        Feel free to reach out if you have any questions, want to discuss hiring
        opportunities, or just want to connect. Let's create together!
      </Subtitle>
      <ButtonContainer>
        <Button
          href="https://www.linkedin.com/in/carmart"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="bounce"
          onClick={() => {
            ReactGA.event({
              category: 'button-click',
              action: `linkedin button clicked`,
            });
          }}
        >
          Connect on Linkedin{' '}
          <MotionLinkedinLogo
            size="20"
            variants={{
              bounce: { y: [0, -5, 0, -2, 0] },
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </Button>
        <EmailButton
          href="mailto:ceejaymar@gmail.com"
          whileHover="bounce"
          onClick={() => {
            ReactGA.event({
              category: 'button-click',
              action: `email button clicked`,
            });
          }}
        >
          Contact me{' '}
          <MotionEnvelope
            size="20"
            variants={{
              bounce: { y: [0, -5, 0, -2, 0] },
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />{' '}
        </EmailButton>
      </ButtonContainer>
    </Section>
  );
};

export default Contact;
