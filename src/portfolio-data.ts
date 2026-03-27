import { GithubLogo, YoutubeLogo, InstagramLogo } from '@phosphor-icons/react';

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
    title: 'Fullstack Assistant Instructor',
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
  // {
  //   title: 'Mosaic emotion tracking',
  //   image: '',
  //   description: '',
  //   tech: 'React Native, Expo, TypeScript, Unistyles',
  //   caseStudySlug: 'mosaic',
  //   links: [
  //     { label: 'App Store', url: '', type: 'apple' },
  //     { label: 'Learn more', url: '', type: 'marketing' },
  //   ],
  // },
  {
    title: 'Los Zine',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/los-zine.webp',
    description:
      'An interactive digital zine that offers a glimpse into my personality, passions, projects, and journey as a creator. Explore the pages to discover stories, inspirations, and highlights from my work and life, presented in a playful and engaging format.',
    tech: 'React, TypeScript, Tailwind, Three.js',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/los-zine',
        type: 'github',
      },
      { label: 'Live Site', url: 'https://los-zine.vercel.app/', type: 'web' },
    ],
  },
  {
    title: 'Batéy Fashion',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/batey.webp',
    description:
      "I wanted to experience the feeling of creating a fashion brand, imagining it born from the culture and spirit of my home country. What would it look like? What emotions would it stir? This is the unfolding story of that exploration. This project is a WORK IN PROGRESS, and I'm excited to share what I've discovered so far.",
    tech: 'Next.js, TypeScript, CSS Modules, Better-SQLite3, Zod',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/batey-fs',
        type: 'github',
      },
      { label: 'Live Site', url: 'https://batey.vercel.app/', type: 'web' },
    ],
  },
  {
    title: 'Resplash',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/resplash.webp',
    description:
      "I've been a huge fan of Unsplash since the days they uploaded just ten photos a week, and I wanted to see if I could recreate some of that magic myself. This project, an Unsplash clone, is built with Next.js and Tailwind CSS. It's my way of using their API to build a modern application that captures the beauty and functionality of the original.",
    tech: 'Next.js, TypeScript, TailwindCSS, Unsplash API',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/resplash',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://fe-challenge-resplash.vercel.app/',
        type: 'web',
      },
    ],
  },
];

export const fullProjects = [
  // {
  //   title: 'Mosaic emotion tracking',
  //   slug: 'mosaic',
  //   image: '',
  //   description: '',
  //   year: 2026,
  //   tech: 'React Native, Expo, TypeScript, Unistyles',
  //   caseStudySlug: 'mosaic',
  //   links: [
  //     { label: 'App Store', url: '', type: 'apple' },
  //     { label: 'Learn more', url: '', type: 'marketing' },
  //   ],
  // },
  {
    title: 'Values Page challenge',
    slug: 'values-page-challenge',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/values-page.png',
    description: '',
    year: 2026,
    tech: 'Next.js, TypeScript, TailwindCSS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/byl-eng-eval',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://values-page.vercel.app/discover/breakdown',
        type: 'web',
      },
    ],
  },
  {
    title: 'Kanban',
    slug: 'kanban',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/kanban.png',
    description: '',
    year: 2025,
    tech: 'Next.js, TypeScript, TailwindCSS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/beyou-kanban',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://beyou-kanban.vercel.app/',
        type: 'web',
      },
    ],
  },
  {
    title: 'Resplash',
    slug: 'resplash',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/resplash.webp',
    description: '',
    year: 2025,
    tech: 'Next.js, TypeScript, TailwindCSS, Unsplash API',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/resplash',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://fe-challenge-resplash.vercel.app/',
        type: 'web',
      },
    ],
  },
  {
    title: 'Pricing Section',
    slug: 'pricing-section',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/fc-pricing-section.webp',
    description: '',
    year: 2025,
    tech: 'React, TypeScript, TailwindCSS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/frontend-challenges/tree/main/apps/pricing-section',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://frontend-challenges-pricing-section.vercel.app/',
        type: 'web',
      },
    ],
  },
  {
    title: 'Blog Card',
    slug: 'blog-card',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/fc-blog-card.webp',
    description: '',
    year: 2025,
    tech: 'HTML, CSS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/frontend-challenges/tree/main/apps/blog-card',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://frontend-challenges-blog-card.vercel.app/',
        type: 'web',
      },
    ],
  },
  {
    title: 'Batéy Fashion',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/batey.webp',
    description:
      "I wanted to experience the feeling of creating a fashion brand, imagining it born from the culture and spirit of my home country. What would it look like? What emotions would it stir? This is the unfolding story of that exploration. While working on this project, I've also been using tools that are new to me, which has been an exciting part of the journey. This project is a WORK IN PROGRESS, and I'm excited to share what I've discovered so far.",
    year: 2025,
    tech: 'Next.js, TypeScript, CSS Modules, Better-SQLite3, Zod',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/batey-fs',
        type: 'github',
      },
      { label: 'Live Site', url: 'https://batey.vercel.app/', type: 'web' },
    ],
  },
  {
    title: 'Accessibility Drawer',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/a11y-drawer.webp',
    description:
      'The A11y Drawer is a versatile, user-friendly component designed to empower website and application users with the ability to dynamically adjust multiple accessibility settings. This project aims to create a robust and highly customizable solution that enhances inclusivity by providing immediate control over common accessibility preferences directly within the user interface.',
    year: 2025,
    tech: 'React, TypeScript, TailwindCSS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/a11y-drawer',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://a11y-drawer.netlify.app/',
        type: 'web',
      },
    ],
  },
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/portfolio-website.webp',
    description: '',
    year: 2024,
    tech: 'React, TypeScript, Styled-Components, Framer Motion',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/project-2024',
        type: 'github',
      },
      { label: 'Live Site', url: 'https://los.codes', type: 'web' },
    ],
  },
  {
    title: 'Weather app',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/weather.webp',
    description:
      "A simple React weather app that uses the OpenWeather API to fetch and display current weather data based on the user's location or a searched city. The app features a clean interface, showing temperature, weather conditions, and other key details.",
    year: 2022,
    tech: 'React, Styled-components, Storybook, Axios',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/weather',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://starlit-queijadas-1645a0.netlify.app/',
        type: 'web',
      },
    ],
  },
  {
    title: 'The Ends ecommerce',
    slug: 'the-ends',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/TheEnds.webp',
    description: '',
    year: 2019,
    tech: 'React, SASS, Node, Postgres, Express, SQL, Firebase, Travis CI',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/TheEnds-ecommerce-frontend',
        type: 'github',
      },
      { label: 'Live Site', url: 'https://theends.web.app/', type: 'web' },
    ],
  },
  {
    title: 'Portfolio Website - Old',
    slug: 'portfolio-website-old',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/portfolio-website-old.webp',
    description: '',
    year: 2019,
    tech: 'React, Mui',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/portfolio-2019',
        type: 'github',
      },
      { label: 'Live Site', url: 'https://carlosmartinez.dev/', type: 'web' },
    ],
  },
  {
    title: 'Dreamshare clone',
    slug: 'dreamshare',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/Dreamshare.webp',
    description: '',
    year: 2018,
    tech: 'React, SASS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/Dreamshare-morty',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://dreamshare-cm.surge.sh/',
        type: 'web',
      },
    ],
  },
  {
    title: 'Knobcreek clone',
    slug: 'knobcreek',
    image:
      'https://los-project-images.s3.us-east-1.amazonaws.com/portfolio/Knobcreek.webp',
    description: '',
    year: 2018,
    tech: 'React, SASS',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ceejaymar/knobcreek-barrel',
        type: 'github',
      },
      {
        label: 'Live Site',
        url: 'https://knobcreek-cm.surge.sh/',
        type: 'web',
      },
    ],
  },
];

export const socialLinks = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@Losliving',
    icon: YoutubeLogo,
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/steadyonthego',
    icon: InstagramLogo,
  },
  {
    name: 'github',
    url: 'https://github.com/ceejaymar',
    icon: GithubLogo,
  },
];
