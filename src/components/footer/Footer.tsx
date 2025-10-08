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

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors['secondary-text']};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-transform: capitalize;
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors['default-text']}80;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
  }

  &:nth-child(1) div::before {
    background: conic-gradient(
      ${({ theme }) => theme.colors['primary-pastel']} 90deg,
      ${({ theme }) => theme.colors['secondary-pastel']}
    );
  }

  &:nth-child(2) div::before {
    background: conic-gradient(
      ${({ theme }) => theme.colors['quinary-pastel']} 180deg,
      ${({ theme }) => theme.colors['quaternary-pastel']}
    );
  }

  &:nth-child(3) div::before {
    background: conic-gradient(
      ${({ theme }) => theme.colors['senary-pastel']},
      ${({ theme }) => theme.colors['tertiary-pastel']} 180deg
    );
  }

  & div {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    z-index: 1;
    isolation: isolate;
    overflow: hidden;

    & svg {
      filter: drop-shadow(
        2px 2px 1px ${({ theme }) => theme.colors.boxShadow}40
      );
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      filter: blur(5px);
      z-index: -1;
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
      <SocialLinksContainer>
        <p>Where else you can find me:</p>
        <SocialLinks aria-label="Social media links">
          {socialLinks.map((link) => (
            <ExternalLink
              key={link.name}
              href={link.url}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <link.icon size={28} weight="bold" color="white" />
              </div>
              {link.name}
            </ExternalLink>
          ))}
        </SocialLinks>
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
