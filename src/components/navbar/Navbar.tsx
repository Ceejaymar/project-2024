import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import MobileNavigation from '../mobileNavigation/MobileNavigation';
import { ThemeProps } from '../../types';
import { getThemeTransition } from '../../utils/themeTransition';
import ThemeToggle from '../themeToggle/ThemeToggle';
import media from '../../utils/mediaQueries';
import GradientLogo from '../logoGradient/GradientLogo';

const Nav = styled(motion.nav)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.tablet`
    padding: 1rem 2rem;
  `}

  ${media.desktop`
    padding: 1rem 1.5rem;
    margin-top: .5rem;
  `}
`;

const BrandLink = styled(Link)`
  flex: 1;
`;

const Logo = styled.div`
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

const linkStyles = css`
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

const AnchorLink = styled.a`
  ${linkStyles}
`;

const RouterLink = styled(Link)`
  ${linkStyles}
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
  const { pathname } = useLocation();
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <Nav key={themeName} {...getThemeTransition(themeName)}>
      <MobileNavigation />
      <BrandLink to="/">
        <Logo>
          <GradientLogo width={65} height="100%" />
        </Logo>
      </BrandLink>
      <NavList
        onMouseLeave={() => {
          setPosition((prev) => ({ ...prev, opacity: 0 }));
        }}
      >
        {navbarItems.map((item, index) => {
          const to = pathname === '/' ? `#${item}` : `/#${item}`;
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
              {pathname === '/' ? (
                <AnchorLink href={to}>{item}</AnchorLink>
              ) : (
                <RouterLink to={to}>{item}</RouterLink>
              )}
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
