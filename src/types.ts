export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'apple' | 'android' | 'web' | 'marketing' | string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  tech: string;
  caseStudySlug?: string;
  links: ProjectLink[];
}

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
