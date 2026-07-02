import posthog from 'posthog-js';

export const ANALYTICS_IGNORE_STORAGE_KEY = 'analytics_ignore';

export type AnalyticsEventPrefix =
  | 'cta_clicked'
  | 'resume_clicked'
  | 'project_clicked'
  | 'case_study_viewed'
  | 'outbound_clicked'
  | 'contact_clicked'
  | 'nav_clicked'
  | 'theme_toggled';

export type AnalyticsEventName = `${AnalyticsEventPrefix}: ${string}`;

export type AnalyticsPropertyValue =
  | string
  | number
  | boolean
  | null
  | undefined;

export type AnalyticsProperties = Record<string, AnalyticsPropertyValue>;

export type Placement =
  | 'hero'
  | 'nav'
  | 'mobile_nav'
  | 'experience_section'
  | 'featured_projects'
  | 'projects_page'
  | 'project_card'
  | 'case_study_footer'
  | 'contact_section'
  | 'footer';

export type ProjectAction =
  | 'case_study'
  | 'live_site'
  | 'github'
  | 'app_store'
  | 'website';

export type ContactType =
  | 'email'
  | 'linkedin'
  | 'github'
  | 'youtube'
  | 'instagram';

export type DestinationType = 'internal' | 'external' | 'download' | 'email';

export type PageType = 'home' | 'projects_index' | 'case_study';

export type ProjectAnalyticsLink =
  | {
      label: string;
      url: string;
      type: string;
    }
  | {
      label: string;
      to: string;
      type: string;
    };

const PLACEMENT_LABELS: Record<Placement, string> = {
  hero: 'Hero',
  nav: 'Desktop',
  mobile_nav: 'Mobile',
  experience_section: 'Experience',
  featured_projects: 'Featured Projects',
  projects_page: 'Projects Page',
  project_card: 'Project Card',
  case_study_footer: 'Case Study Footer',
  contact_section: 'Contact Section',
  footer: 'Footer',
};

const CONTACT_LABELS: Record<ContactType, string> = {
  email: 'Email',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  youtube: 'YouTube',
  instagram: 'Instagram',
};

const THEME_LABELS = {
  light: 'Light',
  dark: 'Dark',
} as const;

const formatPlacement = (placement: Placement) => PLACEMENT_LABELS[placement];

export const getAnalyticsIdSegment = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

const getPageType = (pathname: string): PageType | undefined => {
  if (pathname === '/') return 'home';
  if (pathname === '/projects') return 'projects_index';
  if (pathname.startsWith('/projects/')) return 'case_study';

  return undefined;
};

const isBrowser = () => typeof window !== 'undefined';

const safelyReadStorage = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safelyWriteStorage = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
};

const safelyRemoveStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    return;
  }
};

export function syncAnalyticsIgnoreFlag() {
  if (!isBrowser()) return;

  const analyticsIgnoreValue = new URLSearchParams(window.location.search).get(
    ANALYTICS_IGNORE_STORAGE_KEY,
  );

  if (analyticsIgnoreValue === 'true') {
    safelyWriteStorage(ANALYTICS_IGNORE_STORAGE_KEY, 'true');
  }

  if (analyticsIgnoreValue === 'false') {
    safelyRemoveStorage(ANALYTICS_IGNORE_STORAGE_KEY);
  }
}

export function shouldIgnoreAnalytics() {
  if (!isBrowser()) return true;

  syncAnalyticsIgnoreFlag();

  return safelyReadStorage(ANALYTICS_IGNORE_STORAGE_KEY) === 'true';
}

const getUserAgentFamily = () => {
  const userAgent = navigator.userAgent;

  if (/Firefox/i.test(userAgent)) return 'firefox';
  if (/Edg/i.test(userAgent)) return 'edge';
  if (/Chrome|CriOS/i.test(userAgent)) return 'chrome';
  if (/Safari/i.test(userAgent)) return 'safari';

  return 'other';
};

const compactProperties = (
  properties: AnalyticsProperties,
): Record<string, string | number | boolean | null> =>
  Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  ) as Record<string, string | number | boolean | null>;

const isAnalyticsAvailable = () =>
  import.meta.env.PROD && Boolean(import.meta.env.VITE_POSTHOG_KEY);

export function sanitizeAnalyticsDestination(destination: string) {
  try {
    const url = new URL(destination, window.location.origin);

    if (url.protocol === 'http:' || url.protocol === 'https:') {
      url.search = '';
      return url.toString();
    }
  } catch {
    return destination;
  }

  return destination;
}

export function trackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsProperties = {},
) {
  if (!isBrowser() || shouldIgnoreAnalytics() || !isAnalyticsAvailable()) {
    return;
  }

  const baseProperties: AnalyticsProperties = {
    page_path: window.location.pathname,
    page_type: getPageType(window.location.pathname),
    environment: import.meta.env.MODE,
    user_agent_family: getUserAgentFamily(),
    is_webdriver: navigator.webdriver === true,
  };

  try {
    posthog.capture(
      eventName,
      compactProperties({ ...baseProperties, ...properties }),
    );
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('[analytics] Failed to track event', eventName, error);
    }
  }
}

export function getCtaEventName({
  label,
  placement,
}: {
  label: string;
  placement: Placement;
}): AnalyticsEventName {
  return `cta_clicked: ${label} (${formatPlacement(placement)})`;
}

export function getResumeEventName({
  label,
  placement,
}: {
  label: string;
  placement: Placement;
}): AnalyticsEventName {
  return `resume_clicked: ${label} (${formatPlacement(placement)})`;
}

export function getProjectEventName({
  projectName,
  action,
}: {
  projectName: string;
  action: ProjectAction;
}): AnalyticsEventName {
  const actionLabel = action === 'case_study' ? 'Case Study' : 'Project';

  return `project_clicked: ${projectName} (${actionLabel})`;
}

export function getOutboundEventName({
  projectName,
  label,
  placement,
}: {
  projectName: string;
  label: string;
  placement: Placement;
}): AnalyticsEventName {
  return `outbound_clicked: ${projectName}, ${label} (${formatPlacement(
    placement,
  )})`;
}

export function getCaseStudyViewEventName({
  projectName,
}: {
  projectName: string;
}): AnalyticsEventName {
  return `case_study_viewed: ${projectName}`;
}

export function getContactEventName({
  contactType,
  placement,
}: {
  contactType: ContactType;
  placement: Placement;
}): AnalyticsEventName {
  return `contact_clicked: ${CONTACT_LABELS[contactType]} (${formatPlacement(
    placement,
  )})`;
}

export function getNavigationEventName({
  label,
  placement,
}: {
  label: string;
  placement: Extract<Placement, 'nav' | 'mobile_nav'>;
}): AnalyticsEventName {
  return `nav_clicked: ${label} (${formatPlacement(placement)})`;
}

export function getThemeEventName({
  from,
  to,
}: {
  from: keyof typeof THEME_LABELS;
  to: keyof typeof THEME_LABELS;
}): AnalyticsEventName {
  return `theme_toggled: ${THEME_LABELS[from]} to ${THEME_LABELS[to]}`;
}

export function getProjectLinkAction(type: string, label = ''): ProjectAction {
  const normalizedLabel = label.toLowerCase();

  if (type === 'case-study') return 'case_study';
  if (type === 'github') return 'github';
  if (type === 'apple' || type === 'android') return 'app_store';
  if (normalizedLabel.includes('website') || type === 'marketing') {
    return 'website';
  }

  if (type === 'web' || normalizedLabel.includes('live')) {
    return 'live_site';
  }

  return 'website';
}

export function getProjectLinkAnalytics({
  link,
  projectName,
  analyticsProjectName = projectName,
  projectSlug,
  placement,
  elementIdPrefix,
}: {
  link: ProjectAnalyticsLink;
  projectName: string;
  analyticsProjectName?: string;
  projectSlug?: string;
  placement: Placement;
  elementIdPrefix: string;
}): {
  eventName: AnalyticsEventName;
  properties: AnalyticsProperties;
} {
  const action = getProjectLinkAction(link.type, link.label);
  const resolvedProjectSlug = projectSlug || getAnalyticsIdSegment(projectName);

  if ('url' in link) {
    return {
      eventName: getOutboundEventName({
        projectName: analyticsProjectName,
        label: link.label,
        placement,
      }),
      properties: {
        placement,
        element_id: `${elementIdPrefix}_${resolvedProjectSlug}_${getAnalyticsIdSegment(
          link.label,
        )}`,
        element_label: link.label,
        destination_type: 'external',
        destination: sanitizeAnalyticsDestination(link.url),
        project_slug: resolvedProjectSlug,
        project_name: analyticsProjectName,
        action,
      },
    };
  }

  return {
    eventName: getProjectEventName({
      projectName: analyticsProjectName,
      action,
    }),
    properties: {
      placement,
      element_id: `${elementIdPrefix}_${resolvedProjectSlug}_${action}`,
      element_label: link.label,
      destination_type: 'internal',
      destination: link.to,
      project_slug: resolvedProjectSlug,
      project_name: analyticsProjectName,
      action,
    },
  };
}
