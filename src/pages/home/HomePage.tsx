import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import Header from '../../components/header/Header';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';

export default function HomePage({ theme }) {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash, key]);
  return (
    <>
      <Header themeName={theme} />
      <Experience themeName={theme} />
      <Projects themeName={theme} />
      <Contact />
    </>
  );
}
