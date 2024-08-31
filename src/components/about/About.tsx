import styled from 'styled-components';

const Section = styled.section`
  /* padding: 4rem 2rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  max-width: 600px;
  text-align: center;
  line-height: 1.5;
`;

const About = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I am a passionate developer with experience in building dynamic and
      responsive web applications.
    </SectionText>
  </Section>
);

export default About;
