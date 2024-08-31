import styled from 'styled-components';

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  h1 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Header = () => (
  <HeaderSection>
    <h1>Carlos Martinez</h1>
  </HeaderSection>
);

export default Header;
