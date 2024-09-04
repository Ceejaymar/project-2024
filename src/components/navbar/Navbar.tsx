import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowSquareOut, Sun, CloudMoon } from '@phosphor-icons/react';

interface NavItemProps {
  setPosition: (position: any) => void;
}

interface NavLinkProps {
  isFirst?: boolean;
  isLast?: boolean;
}

const Nav = styled.nav`
  width: 100%;
  max-width: 1366px;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['default-text']};
`;

const NavList = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li<NavItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  /* color: ${({ theme }) => theme.colors['default-text']}; */
  /* z-index: 10; */
  /* mix-blend-mode: difference; */

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a<NavLinkProps>`
  color: ${({ isFirst, isLast, theme }) =>
    isFirst
      ? theme.colors['default-text']
      : isLast
        ? theme.colors.quaternary
        : theme.colors['secondary-text']};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;

  &:hover,
  &:focus {
    outline: none;
    outline-offset: 2px;
  }
`;

const Cursor = styled(motion.li)`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors['default-text']};
  height: 3px;
  border-radius: 25px;
  /* z-index: 0; */
`;

type NavbarProps = {
  toggleTheme: () => void;
  theme: number;
  themeNames: string[];
};

const navbarItems = ['home', 'about', 'projects', 'contact'];

const Navbar = ({ toggleTheme }: NavbarProps) => {
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <Nav>
      <Logo>Los.</Logo>
      <NavList
        onMouseLeave={() => {
          setPosition((prev) => ({ ...prev, opacity: 0 }));
        }}
      >
        {navbarItems.map((item, index) => {
          return (
            <NavItem
              key={item}
              ref={(el) => (navRefs.current[index] = el)}
              onMouseEnter={() => {
                const currentRef = navRefs.current[index];
                if (!currentRef) return;
                const { width } = currentRef.getBoundingClientRect();
                console.log(width);
                setPosition({
                  left: currentRef.offsetLeft,
                  width: width,
                  opacity: 1,
                });
              }}
            >
              <NavLink isFirst href={`#${item}`}>
                {item}
              </NavLink>
            </NavItem>
          );
        })}
        <Cursor animate={position} />
        {/* <NavItem>
          <NavLink isLast href="#resume">
            resume
          </NavLink>
          <ArrowSquareOut color="inherit" weight="regular" size="14" />
        </NavItem> */}

        <div>
          <Sun onClick={toggleTheme} color="black" weight="fill" size="24" />
          <CloudMoon color="black" weight="fill" size="24" />
        </div>
      </NavList>
    </Nav>
  );
};

export default Navbar;
