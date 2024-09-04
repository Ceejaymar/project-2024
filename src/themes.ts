export const lightTheme = {
  colors: {
    background: '#f7f5f2',
    // 'default-text': '#212427',
    'default-text': '#1c2528',
    'secondary-text': '#919191',
    'tertiary-text': '#dddddd',
    // 'tertiary-text': '#313131',
    text: '#f7f5f2',
    primary: '#A16AE8',
    secondary: '#03dac6',
    tertiary: '#B19FF9',
    quaternary: '#FEA303',
    quinary: '#0E3506',
  },
};

export const darkTheme = {
  colors: {
    background: '#1c2528',
    // 'default-text': '#212427',
    // 'default-text': '#313131',
    'default-text': '#f7f5f2',
    'secondary-text': '#919191',
    text: '#1c2528',
    primary: '#A16AE8',
    secondary: '#03dac6',
    tertiary: '#B19FF9',
    quaternary: '#FEA303',
    quinary: '#0E3506',
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
