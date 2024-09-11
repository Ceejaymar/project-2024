import React from 'react';
import styled from 'styled-components';
import LogoGradient from '../logoGradient/LogoGradient';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  font-weight: 500;
  padding: 1.2rem 1rem;
`;

const SocialLinks = styled.div`
  /* margin-bottom: 1rem; */
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors['default-text']}80;
    font-size: 1rem;
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors['default-text']};
    }
  }
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  gap: 0.5rem;
  font-size: 1.1rem;
`;

const socialLinks = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/carmart/',
  },
  {
    name: 'github',
    url: 'https://github.com/ceejaymar',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/steadyonthego',
  },
];

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>
        built by
        <LogoGradient width={65} height="100%" />
      </Copyright>
      <SocialLinks aria-label="Social media links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
