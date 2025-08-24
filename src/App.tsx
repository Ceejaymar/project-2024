import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStyles } from './GlobalStyles';
import { usePostHog } from 'posthog-js/react';
import { BrowserRouter, Routes, Route } from 'react-router';

import { lightTheme, darkTheme } from './themes';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage.tsx';
import ProjectsPage from './pages/projects/ProjectsPage.tsx';
import Footer from './components/footer/Footer';

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
  const posthog = usePostHog();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    posthog?.capture('theme_toggled');
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  const currentTheme = themes[theme];

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
          onAnimationComplete={() =>
            updateThemeColor(currentTheme.colors.background)
          }
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
          </Routes>
          <Footer />
        </motion.div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
