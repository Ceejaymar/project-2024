import yImage from './assets/yImage.png';
import oImage from './assets/oImage.jpg';
import mImage from './assets/mImage.png';
import pImage from './assets/pImage.png';

export const experienceList = [
  {
    company: 'Yubico',
    date: '2022 — 2025',
    title: 'Frontend Software Engineer II',
    image: yImage,
    description:
      'Developed an interactive quiz and custom WordPress blocks to improve user engagement and content delivery. Implemented internationalization for broader accessibility, collaborated with UX teams on Figma designs, and reduced bugs through end-to-end testing.',
  },
  {
    company: 'One Drop',
    date: '2020 — 2022',
    title: 'Software Engineer, Web',
    image: oImage,
    description:
      'Led development of an employer enrollment app and a HIPAA-compliant platform for healthcare professionals. Mentored new engineers, setting coding standards and testing priorities.',
  },
  {
    company: 'Pursuit',
    date: '2018 — 2020',
    title: 'Fullstack Assistant Instructor ',
    image: pImage,
    description:
      'Reviewed JavaScript code and led pair programming for 32+ students, while creating workshops on key development topics. Offered personalized feedback and mock interview prep to improve technical skills in Data Structures & Algorithms.',
  },
  {
    company: 'Microsoft',
    date: '2017 — 2018',
    title: 'Software Engineer Intern',
    image: mImage,
    description:
      'Partnered with the AzureCXP team to build a testing framework for an internal survey tool designed for enterprise cloud clients. Also worked alongside a Data Engineer to write SQL queries for a Spark cluster database.',
  },
];

export const projects = [
  {
    title: 'Batéy Fashion (WIP)',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/batey.png?alt=media&token=9276baaa-a8a8-468f-b935-a9e632017f5b',
    description:
      "I wanted to experience the feeling of creating a fashion brand, imagining it born from the culture and spirit of my home country. What would it look like? What emotions would it stir? This is the unfolding story of that exploration. While working on this project, I've also been using tools that are new to me, which has been an exciting part of the journey. This project is a WORK IN PROGRESS, and I'm excited to share what I've discovered so far.",
    tech: 'NextJS, TypeScript, CSS Modules, Better-SQLite3, Zod',
    repo: 'https://github.com/Ceejaymar/batey-fs',
    live: 'https://batey.vercel.app/',
  },
  {
    title: 'Accessibility Drawer',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/Screenshot%202025-07-02%20at%2011.23.52%E2%80%AFPM.png?alt=media&token=fc0fca95-bfca-4f82-91d6-2d235df11b32',
    description:
      'The A11y Drawer is a versatile, user-friendly component designed to empower website and application users with the ability to dynamically adjust multiple accessibility settings. This project aims to create a robust and highly customizable solution that enhances inclusivity by providing immediate control over common accessibility preferences directly within the user interface.',
    tech: 'React, TypeScript, TailwindCSS',
    repo: 'https://github.com/Ceejaymar/a11y-drawer',
    live: 'https://a11y-drawer.netlify.app/',
  },
  {
    title: 'weather app',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-cm.appspot.com/o/weather.png?alt=media&token=c202741a-ff4c-4540-870e-3da62d3c87b9',
    description:
      "A simple React weather app that uses the OpenWeather API to fetch and display current weather data based on the user's location or a searched city. The app features a clean interface, showing temperature, weather conditions, and other key details.",
    tech: 'React, Styled-components, Storybook, Axios',
    repo: 'https://github.com/Ceejaymar/weather',
    live: 'https://starlit-queijadas-1645a0.netlify.app/',
  },
];

export const socialLinks = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/carmart/',
  },
  {
    name: 'github',
    url: 'https://github.com/ceejaymar',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@Losliving',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/steadyonthego',
  },
];
