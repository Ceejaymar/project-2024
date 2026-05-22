import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from '@phosphor-icons/react';
import { ThemeProps } from '../../types';
import media from '../../utils/mediaQueries';

const IconWrapper = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  right: 20px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 50%;
  }

  ${media.tablet`
    position: relative;
    right: 0;
    margin-left: 1rem;
  `}
`;

const ThemeToggle = ({ themeName, toggleTheme }: ThemeProps) => {
  return (
    <IconWrapper
      type="button"
      onClick={toggleTheme}
      aria-label={
        themeName === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
      }
      aria-pressed={themeName === 'dark'}
    >
      {themeName === 'light' ? (
        <Moon color="#333" weight="fill" size="24" />
      ) : (
        <Sun color="white" weight="fill" size="24" />
      )}
    </IconWrapper>
  );
};

export default ThemeToggle;
