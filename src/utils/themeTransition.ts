import { lightTheme, darkTheme } from '../themes';

export const getThemeTransition = (themeName: 'light' | 'dark') => {
  return {
    initial: {
      backgroundColor:
        themeName === 'light'
          ? darkTheme.colors.background
          : lightTheme.colors.background,
      color:
        themeName === 'light'
          ? darkTheme.colors['default-text']
          : lightTheme.colors['default-text'],
    },
    animate: {
      backgroundColor:
        themeName === 'light'
          ? lightTheme.colors.background
          : darkTheme.colors.background,
      color:
        themeName === 'light'
          ? lightTheme.colors['default-text']
          : darkTheme.colors['default-text'],
    },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  };
};
