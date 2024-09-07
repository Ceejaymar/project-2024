export interface ThemeProps {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavLinkProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export interface HeaderProps {
  themeName: 'light' | 'dark';
}
