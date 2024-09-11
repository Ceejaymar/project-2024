import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors['default-text']};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  letter-spacing: -4px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmailLink = styled(motion.a)`
  position: relative;
  flex-direction: column;
  font-size: 2.5rem;
  letter-spacing: -3px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 1px;
  /* bottom: -2.5px; */
  background-color: ${({ theme }) => theme.colors.text};
  height: 3px;
  width: 100%;
  border-radius: 25px;
  /* list-style: none; */
`;

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>let's create together</SectionTitle>
      <EmailLink
        href="mailto:ceejaymar@gmail.com"
        initial="hidden"
        whileHover="visible"
      >
        ceejaymar@gmail.com
        <Underline
          variants={{
            hidden: { y: 3, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
        />
      </EmailLink>
    </Section>
  );
};

export default Contact;
