import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router';

import { lightTheme, darkTheme } from './themes';
import { trackEvent } from './lib/analytics';

const themes = { light: lightTheme, dark: darkTheme };
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage.tsx';
import ProjectsPage from './pages/projects/ProjectsPage.tsx';
import CaseStudy from './pages/caseStudy/CaseStudy.tsx';
import Footer from './components/footer/Footer';

const THEME_STORAGE_KEY = 'portfolio-theme';
type ThemeName = 'light' | 'dark';

const getSavedTheme = (): ThemeName | null => {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;
};

const getInitialTheme = (): ThemeName => {
  const savedTheme = getSavedTheme();

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const updateThemeColor = (color: string) => {
  let metaThemeColor = document.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', color);
};

function App() {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);
  const [hasSavedTheme, setHasSavedTheme] = useState(() =>
    Boolean(getSavedTheme()),
  );

  const toggleTheme = () => {
    setHasSavedTheme(true);
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';

      trackEvent('theme_toggled', {
        from: prevTheme,
        to: nextTheme,
        location: 'theme_toggle',
      });

      return nextTheme;
    });
  };

  const currentTheme = themes[theme];

  useEffect(() => {
    if (hasSavedTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateSystemTheme);
    };
  }, [hasSavedTheme]);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeColor(themes[theme].colors.background);
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <motion.div
          initial={{
            backgroundColor:
              theme === 'light'
                ? darkTheme.colors.background
                : lightTheme.colors.background,
          }}
          animate={{ backgroundColor: currentTheme.colors.background }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Navbar themeName={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
          </Routes>
          <Footer />
        </motion.div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
