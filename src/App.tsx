import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme, Theme } from './themes';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
// import About from './components/about/About';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import { useState } from 'react';
import './App.css';

const themes: { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
};

const themeNames = Object.keys(themes) as string[];

function App() {
  const [theme, setTheme] = useState(0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme + 1) % themeNames.length);
  };

  const currentTheme = themeNames[theme];

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Navbar themeNames={themeNames} theme={theme} toggleTheme={toggleTheme} />
      <Header />
      {/* <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
