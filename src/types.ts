export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export interface NavLinkProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export interface HeaderProps {
  theme: string;
}
