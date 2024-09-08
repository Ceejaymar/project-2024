import React, { useRef } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import ThemeToggle from '../themeToggle/ThemeToggle';
import media from '../../utils/mediaQueries';
import { NavLinkProps, ThemeProps } from '../../types';
// import { ArrowSquareOut } from '@phosphor-icons/react';
import { getThemeTransition } from '../../utils/themeTransition';
import LogoGradient from '../logoGradient';

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
    padding: 1rem 0;
    margin-top: .5rem;
  `}
`;

const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  /* font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors['default-text']}; */
  height: 1.3rem;
  /* width: 10px; */

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
  /* color: ${({ isFirst, isLast, theme }) =>
    isFirst
      ? theme.colors['default-text']
      : isLast
        ? theme.colors.quaternary
        : theme.colors['secondary-text']}; */
  color: ${({ theme }) => theme.colors['default-text']};
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

const Underline = styled(motion.li)`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors['default-text']};
  height: 3px;
  border-radius: 25px;
  list-style: none;
`;

const SideNavigation = styled(motion.div)<{ active: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.quaternary};
  z-index: 5;
  transform-origin: top;

  & ${NavLink} {
    font-size: 2rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors['default-text']};
  }
`;

const HamburgerButton = styled(motion.button)`
  position: absolute;
  left: 10px;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease-in-out;
  outline: none;
  border: none;
  z-index: 10;

  &:focus {
    outline: none;
  }

  ${media.tablet`
    display: none;
  `}
`;

const HamburgerLine = styled(motion.span)`
  position: absolute;
  height: 4px;
  width: 30px;
  background: ${({ theme }) => theme.colors['default-text']};
  border-radius: 10px;

  &:last-of-type {
    width: 15px;
  }
`;

const navbarItems = ['home', 'about', 'projects', 'contact', 'resume'];

const Navbar = ({ themeName, toggleTheme }: ThemeProps) => {
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <Nav key={themeName} {...getThemeTransition(themeName)}>
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
        <AnimatePresence>
          {active && (
            <SideNavigation
              active={active}
              onClick={() => setActive(false)}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: {
                  scaleY: 0,
                },
                animate: {
                  scaleY: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.12, 0, 0.39, 0],
                  },
                },
                exit: {
                  scaleY: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <motion.div
                initial="initial"
                animate="open"
                exit="initial"
                variants={{
                  initial: {
                    transition: {
                      staggerChildren: 0.09,
                      staggerDirection: -1,
                      ease: [0.37, 0, 0.63, 0],
                    },
                  },
                  open: {
                    transition: {
                      delayChildren: 0.1,
                      staggerChildren: 0.09,
                      staggerDirection: 1,
                      ease: [0.55, 0, 0.45, 0],
                    },
                  },
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                {navbarItems.map((item) => (
                  <div style={{ overflow: 'hidden' }}>
                    <NavItem
                      variants={{
                        initial: {
                          y: '30vh',
                          transition: {
                            duration: 0.5,
                            ease: [0.37, 0, 0.63, 1],
                          },
                        },
                        open: {
                          y: 0,
                          transition: {
                            duration: 0.7,
                            ease: [0.55, 0, 0.45, 1],
                          },
                        },
                      }}
                    >
                      <NavLink
                        key={item}
                        href={`#${item}`}
                        onClick={() => setActive(false)}
                      >
                        {item}
                      </NavLink>
                    </NavItem>
                  </div>
                ))}
              </motion.div>
            </SideNavigation>
          )}
        </AnimatePresence>
      </MotionConfig>
      <Logo>
        <LogoGradient width={65} height="100%" />
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
              <NavLink href={`#${item}`}>{item}</NavLink>
            </NavItem>
          );
        })}
        <Underline animate={position} />
        {/* <NavItem> */}
        {/* <ArrowSquareOut color="inherit" weight="regular" size="14" /> */}

        {/* </NavItem> */}
      </NavList>
      <ThemeToggle themeName={themeName} toggleTheme={toggleTheme} />
    </Nav>
  );
};

export default Navbar;
