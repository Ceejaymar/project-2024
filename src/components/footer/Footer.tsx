import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: var(--text-color);
    font-size: 1.5rem;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--secondary-color);
    }
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yourusername/',
    icon: <FaLinkedin />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <FaTwitter />,
  },
];

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinks aria-label="Social media links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Los. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
