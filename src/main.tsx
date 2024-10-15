import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.tsx';
import './index.css';

ReactGA.initialize('G-NVNBXRECFP');

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  userAgent: window.navigator.userAgent,
  deviceType: /mobile/i.test(window.navigator.userAgent) ? 'Mobile' : 'Desktop',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
