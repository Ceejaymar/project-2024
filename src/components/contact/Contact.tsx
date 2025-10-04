import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Envelope, LinkedinLogo } from '@phosphor-icons/react';

import media from '../../utils/mediaQueries';

const Section = styled.section`
  max-width: 1280px;
  padding: 5rem 1rem;

  ${media.tablet`
    padding: 5rem 2rem;
  `}

  ${media.desktop`
    padding: 7rem 2rem;
  `}
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1280px;
  padding: 2rem;
  gap: 3rem;
  border-radius: 15px;
  z-index: 1;
  isolation: isolate;
  overflow: hidden;

  ${media.tablet`
    padding: 3rem 3rem; 
  `}

  ${media.laptop`
  flex-direction: row;
    padding: 5rem 3rem; 
  `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: conic-gradient(
      ${({ theme }) => theme.colors.senary} 0deg 80deg,
      ${({ theme }) => theme.colors.secondary} 80deg 135deg,
      ${({ theme }) => theme.colors.tertiary} 135deg 225deg,
      ${({ theme }) => theme.colors.primary} 225deg 315deg,
      ${({ theme }) => theme.colors.secondary} 315deg 360deg
    );
    filter: blur(60px);
    z-index: -1;
  }
`;

const ContactCopy = styled.div`
  flex: 2;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1;
  text-shadow: ${({ theme }) => theme.colors.boxShadow}30 1.95px 1.95px 2.6px;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: ${({ theme }) => theme.colors.boxShadow}30 1.95px 1.95px 2.6px;

  ${media.tablet`
    max-width: 80%;
  `}
  ${media.laptop`
    max-width: 60%;
  `}
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  ${media.tablet`
    flex-direction: row;
  `}

  ${media.laptop`
    flex-direction: column;
  `}
`;

const Button = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: ${({ theme }) => theme.colors.boxShadow}30 1.95px 1.95px 2.6px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  padding-right: 15px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.colors.boxShadow}30 1.95px 1.95px 2.6px;

  ${media.tablet`
    width: 100%;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.white}15;
  }
`;

const MotionLinkedinLogo = styled(motion.create(LinkedinLogo))``;

const MotionEnvelope = styled(motion.create(Envelope))``;

const EmailButton = styled(motion.create(Button))`
  & > svg {
    margin-top: 2px;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <ContactContainer>
        <ContactCopy>
          <Title>Let's create together</Title>
          <Subtitle>
            Feel free to reach out if you have any questions, want to discuss
            hiring opportunities, or just want to connect.
          </Subtitle>
        </ContactCopy>
        <ButtonContainer>
          <Button
            href="https://www.linkedin.com/in/carmart"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="bounce"
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
          <EmailButton href="mailto:ceejaymar@gmail.com" whileHover="bounce">
            Send an email{' '}
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
      </ContactContainer>
    </Section>
  );
};

export default Contact;
