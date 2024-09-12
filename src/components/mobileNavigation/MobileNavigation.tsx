import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import GradientLogo from '../logoGradient/GradientLogo';
import { NavLinkProps } from '../../types';
import media from '../../utils/mediaQueries';

const NavItem = styled(motion.li)`
  position: relative;
  margin: 2rem 0;
  list-style: none;
  text-transform: uppercase;
`;

const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme }) => theme.colors['default-text']}90;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;

  &:hover,
  &:focus {
    outline: none;
    outline-offset: 2px;
  }
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

const navbarItems = ['experience', 'projects', 'contact'];

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
const MobileNavigation = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
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
            <GradientLogo width={65} height={'60'} />
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
                <div key={item} style={{ overflow: 'hidden' }}>
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
  );
};

export default MobileNavigation;
