import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import App from './App.tsx';
import './index.css';
import {
  shouldIgnoreAnalytics,
  syncAnalyticsIgnoreFlag,
} from './lib/analytics';

const isProduction = import.meta.env.PROD;
const hasPostHogKey = Boolean(import.meta.env.VITE_POSTHOG_KEY);

syncAnalyticsIgnoreFlag();

if (isProduction && hasPostHogKey && !shouldIgnoreAnalytics()) {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    autocapture: false,
    capture_pageview: true,
    capture_pageleave: false,
    person_profiles: 'identified_only',
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);
