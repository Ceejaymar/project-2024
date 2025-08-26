import React from 'react';
import styled from 'styled-components';

import GradientLogo from '../logoGradient/GradientLogo';
import media from '../../utils/mediaQueries';
import { socialLinks } from '../../portfolio-data';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1280px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  font-weight: 500;
  padding: 2rem 2rem;

  ${media.laptop`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors['default-text']}80;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
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

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        built by
        <GradientLogo width={65} height="100%" />
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
