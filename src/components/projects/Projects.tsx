import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
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

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  width: 100%;
`;

const ProjectItem = styled.li`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

const Projects = () => (
  <Section id="projects">
    <SectionTitle>My Projects</SectionTitle>
    <ProjectList>
      <ProjectItem>Project 1: A cool web app</ProjectItem>
      <ProjectItem>Project 2: Another awesome project</ProjectItem>
      <ProjectItem>Project 3: Yet another great project</ProjectItem>
    </ProjectList>
  </Section>
);

export default Projects;
