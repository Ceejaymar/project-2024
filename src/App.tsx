import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './themes';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
// import About from './components/about/About';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const storedTheme = sessionStorage.getItem('theme'); // Use sessionStorage instead of localStorage
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('theme', theme); // Use sessionStorage instead of localStorage
  }, [theme]);

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header theme={theme} />
      {/* <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
