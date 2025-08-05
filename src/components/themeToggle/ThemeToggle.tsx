import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from '@phosphor-icons/react';
import { ThemeProps } from '../../types';
import media from '../../utils/mediaQueries';

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  right: 20px;

  ${media.tablet`
    position: relative;
    right: 0;
    margin-left: 1rem;
  `}
`;

const ThemeToggle = ({ themeName, toggleTheme }: ThemeProps) => {
  return (
    <IconWrapper onClick={toggleTheme}>
      {themeName === 'light' ? (
        <Moon color="#333" weight="fill" size="24" />
      ) : (
        <Sun color="white" weight="fill" size="24" />
      )}
    </IconWrapper>
  );
};

export default ThemeToggle;
