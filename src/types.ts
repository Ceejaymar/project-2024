export interface ThemeProps {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavLinkProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export interface HeaderProps extends Pick<ThemeProps, 'themeName'> {
  themeName: 'light' | 'dark';
}
