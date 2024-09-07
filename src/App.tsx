import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './themes';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
// import About from './components/about/About';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import './App.css';

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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  const currentTheme = themes[theme];

  return (
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
        <Header themeName={theme} />
        {/* <About />
      <Projects />
      <Contact />
      <Footer /> */}
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
