import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, MotionConfig } from 'framer-motion';
import { Sun } from '@phosphor-icons/react';
import media from '../../utils/mediaQueries';
// import { ArrowSquareOut, Sun, CloudMoon } from '@phosphor-icons/react';

const Nav = styled.nav`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    padding: 1rem 2rem;
    justify-content: space-between;
  `}

  ${media.desktop`
    /* padding: 1rem 1rem; */
  `}
`;

const Logo = styled.div`
  flex: 1;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors['default-text']};

  ${media.tablet`
    text-align: left;
  `}
`;

const NavList = styled.ul`
  display: none;
  /* display: flex; */
  position: relative;
  list-style: none;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    display: flex;
  `}/* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } */
`;

const NavItem = styled.li`
  /* display: flex; */
  position: relative;
  margin: 0 0.5rem;

  /* color: ${({ theme }) => theme.colors['default-text']}; */
  /* z-index: 10; */
  /* mix-blend-mode: difference; */
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

const SunIcon = styled(Sun)`
  position: absolute;
  right: 10px;

  ${media.tablet`
    position: relative;
    right: 0;
    margin-left: 1rem;
  `}
`;

const HamburgerContainer = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.quaternary};
  transform: ${({ active }) =>
    active ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 5;
`;

const HamburgerButton = styled(motion.button)`
  position: relative;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease-in-out;
  outline: none;
  border: none;
  /* border: 1px solid transparent; */
  z-index: 10;

  &:focus {
    outline: none; /* Ensure no outline on focus */
  }

  ${media.tablet`
    display: none;
  `}
`;

const HamburgerLine = styled(motion.span)`
  position: absolute;
  height: 4px;
  width: 30px;
  background: black;
  border-radius: 10px;

  &:last-of-type {
    width: 15px;
  }
`;

interface NavLinkProps {
  isFirst?: boolean;
  isLast?: boolean;
}

type NavbarProps = {
  toggleTheme: () => void;
};

const navbarItems = ['home', 'about', 'projects', 'contact'];

const Navbar = ({ toggleTheme }: NavbarProps) => {
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <Nav>
      <MotionConfig transition={{ duration: 0.4, ease: 'easeInOut' }}>
        <HamburgerButton
          initial={false}
          onClick={() => setActive((prev) => !prev)}
          animate={active ? 'open' : 'closed'}
        >
          <HamburgerLine
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['35%', '50%', '50%'],
              },
              closed: {
                rotate: ['45deg', '0deg', '0deg'],
                top: ['50%', '50%', '35%'],
              },
            }}
            style={{ top: '35%', left: '50%', x: '-50%', y: '-50%' }}
          />
          <HamburgerLine
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
              },
              closed: {
                rotate: ['-45deg', '0deg', '0deg'],
              },
            }}
            style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          />
          <HamburgerLine
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                left: '50%',
                bottom: ['35%', '50%', '50%'],
              },
              closed: {
                rotate: ['45deg', '0deg', '0deg'],
                bottom: ['50%', '50%', '35%'],
              },
            }}
            style={{
              bottom: '35%',
              left: 'calc(50% + 7px)',
              x: '-50%',
              y: '50%',
            }}
          />
        </HamburgerButton>
        <HamburgerContainer active={active}>
          {navbarItems.map((item) => (
            <NavLink
              key={item}
              href={`#${item}`}
              onClick={() => setActive(false)}
            >
              {item}
            </NavLink>
          ))}
        </HamburgerContainer>
      </MotionConfig>
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
        <NavItem>
          <NavLink isLast href="#resume">
            resume
          </NavLink>
          {/* <ArrowSquareOut color="inherit" weight="regular" size="14" /> */}
        </NavItem>
      </NavList>
      {/* <div> */}
      <SunIcon onClick={toggleTheme} color="black" weight="fill" size="28" />
      {/* <CloudMoon color="black" weight="fill" size="24" /> */}
      {/* </div> */}
    </Nav>
  );
};

export default Navbar;
