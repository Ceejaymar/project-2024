import styled from 'styled-components';

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  text-align: center;

  h1 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;

  & span {
    color: ${({ theme }) => theme.colors.quaternary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Header = () => (
  <HeaderSection>
    <Heading>
      Hi, I'm Carlos
      <br />
      <span>Front-End Web Developer</span>
    </Heading>
    <p>Crafting engaging and responsive web experiences</p>
  </HeaderSection>
);

export default Header;
