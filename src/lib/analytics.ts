import posthog from 'posthog-js';

export const ANALYTICS_IGNORE_STORAGE_KEY = 'analytics_ignore';

export type AnalyticsEventName =
  | 'cta_clicked'
  | 'resume_clicked'
  | 'project_clicked'
  | 'case_study_viewed'
  | 'outbound_clicked'
  | 'contact_clicked'
  | 'nav_clicked'
  | 'theme_toggled';

export type AnalyticsPropertyValue =
  | string
  | number
  | boolean
  | null
  | undefined;

export type AnalyticsProperties = Record<string, AnalyticsPropertyValue>;

export type ProjectLinkTarget =
  | 'case_study'
  | 'live_site'
  | 'github'
  | 'app_store'
  | 'external';

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

export function trackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsProperties = {},
) {
  if (!isBrowser() || shouldIgnoreAnalytics() || !isAnalyticsAvailable()) {
    return;
  }

  const baseProperties: AnalyticsProperties = {
    path: window.location.pathname,
    pathname: window.location.pathname,
    referrer: document.referrer || undefined,
    timestamp: new Date().toISOString(),
    environment: import.meta.env.MODE,
    user_agent_family: getUserAgentFamily(),
    is_webdriver: navigator.webdriver === true,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
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

export function getProjectLinkTarget(
  type: string,
  label = '',
): ProjectLinkTarget {
  const normalizedLabel = label.toLowerCase();

  if (type === 'case-study') return 'case_study';
  if (type === 'github') return 'github';
  if (type === 'apple' || type === 'android') return 'app_store';
  if (
    type === 'web' ||
    type === 'marketing' ||
    normalizedLabel.includes('live') ||
    normalizedLabel.includes('website')
  ) {
    return 'live_site';
  }

  return 'external';
}
