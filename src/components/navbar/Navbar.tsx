import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import MobileNavigation from '../mobileNavigation/MobileNavigation';
import { NavLinkProps, ThemeProps } from '../../types';
import { getThemeTransition } from '../../utils/themeTransition';
import ThemeToggle from '../themeToggle/ThemeToggle';
import media from '../../utils/mediaQueries';
import GradientLogo from '../logoGradient/GradientLogo';

const Nav = styled(motion.nav)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.tablet`
    padding: 1rem 2rem;
    justify-content: space-between;
  `}

  ${media.desktop`
    padding: 1rem 1.5rem;
    margin-top: .5rem;
  `}
`;

const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 1.3rem;

  ${media.tablet`
    justify-content: flex-start;
    text-align: left;
  `}
`;

const NavList = styled.ul`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    display: flex;
  `}
`;

const NavItem = styled(motion.li)`
  position: relative;
  margin: 0 0.5rem;
  list-style: none;
`;

const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme }) => theme.colors['default-text']}90;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;

  &:hover,
  &:focus {
    outline: none;
    outline-offset: 2px;
  }
`;

const Underline = styled(motion.li)`
  position: absolute;
  bottom: -2.5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 3px;
  border-radius: 25px;
  list-style: none;
`;

const navbarItems = ['experience', 'projects', 'contact'];

const Navbar = ({ themeName, toggleTheme }: ThemeProps) => {
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <Nav key={themeName} {...getThemeTransition(themeName)}>
      <MobileNavigation />
      <Logo>
        <GradientLogo width={65} height="100%" />
      </Logo>
      <NavList
        onMouseLeave={() => {
          setPosition((prev) => ({ ...prev, opacity: 0 }));
        }}
      >
        {navbarItems.map((item, index) => {
          return (
            <NavItem
              key={item}
              ref={(el: HTMLLIElement | null) => (navRefs.current[index] = el)}
              onMouseEnter={() => {
                const currentRef = navRefs.current[index];
                if (!currentRef) return;
                const { width } = currentRef.getBoundingClientRect();
                setPosition({
                  left: currentRef.offsetLeft,
                  width,
                  opacity: 1,
                });
              }}
            >
              <NavLink href={`#${item}`}>{item}</NavLink>
            </NavItem>
          );
        })}
        <Underline animate={position} />
      </NavList>
      <ThemeToggle themeName={themeName} toggleTheme={toggleTheme} />
    </Nav>
  );
};

export default Navbar;
