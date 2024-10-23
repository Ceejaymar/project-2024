import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import App from './App.tsx';
import './index.css';

ReactGA.initialize('G-NVNBXRECFP');

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  person_profiles: 'identified_only',
});

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  userAgent: window.navigator.userAgent,
  deviceType: /mobile/i.test(window.navigator.userAgent) ? 'Mobile' : 'Desktop',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);
