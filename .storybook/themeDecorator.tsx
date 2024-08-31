import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from '../src/themes';
import { GlobalStyles } from '../src/GlobalStyles';

const themes: { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeDecorator = (Story: React.FC, context: any) => {
  const themeName = context.globals.theme || 'light';
  const theme = themes[themeName] || lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export default ThemeDecorator;
