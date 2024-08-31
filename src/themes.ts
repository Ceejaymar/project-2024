export const lightTheme = {
  colors: {
    background: '#f5f5f5',
    text: '#f5f5f5',
    primary: '#A16AE8',
    secondary: '#03dac6',
    tertiary: '#B19FF9',
    quaternary: '#FEA303',
    quinary: '#0E3506',
  },
};

export const darkTheme = {
  colors: {
    background: '#333',
    text: '#f5f5f5',
    primary: '#bb86fc',
    secondary: '#03dac6',
  },
};

export type Theme = {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
  };
};
