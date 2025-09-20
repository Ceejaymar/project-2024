export const lightTheme = {
  colors: {
    background: '#fafafa',
    boxShadow: '#212427',
    'default-text': '#1c2528',
    'secondary-text': '#747474',
    // 'tertiary-text': '#dddddd',
    'tertiary-text': '#313131',
    border: '#e5e5e5',
    text: '#f7f5f2',
    primary: '#A16AE8',
    secondary: '#03dac6',
    tertiary: '#B19FF9',
    quaternary: '#FEA303',
    quinary: '#0E3506',
    senary: '#fed280ff',
  },
};

export const darkTheme = {
  colors: {
    background: '#212427',
    boxShadow: '#000000',
    navbarBackground: '#212427',
    // 'default-text': '#313131',
    'default-text': '#fafafa',
    'secondary-text': '#bbbbbb',
    'tertiary-text': '#313131',
    border: '#e5e5e520',
    text: '#212427',
    primary: '#A16AE8',
    secondary: '#03dac6',
    tertiary: '#B19FF9',
    quaternary: '#FEA303',
    quinary: '#0E3506',
    senary: '#fed280ff',
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
