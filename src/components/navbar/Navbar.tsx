import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.quaternary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;

  &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
    outline-offset: 2px;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: border-color 0.25s;
  color: ${({ theme }) => theme.colors.text};
`;

type NavbarProps = {
  toggleTheme: () => void;
  theme: number;
  themeNames: string[];
};

const Navbar = ({ toggleTheme, theme, themeNames }: NavbarProps) => (
  <Nav>
    <Logo>Los.</Logo>
    <NavList>
      <NavItem>
        <NavLink href="#home">home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#about">about</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink href="#skills">skills</NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink href="#projects">projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact">contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#resume">resume</NavLink>
      </NavItem>
    </NavList>
    <Button onClick={toggleTheme}>
      Switch to {themeNames[(theme + 1) % themeNames.length]} Theme
    </Button>
  </Nav>
);

export default Navbar;
