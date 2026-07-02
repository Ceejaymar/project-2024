import React from 'react';
import styled, { useTheme } from 'styled-components';

import GradientLogo from '../logoGradient/GradientLogo';
import media from '../../utils/mediaQueries';
import { socialLinks } from '../../portfolio-data';
import {
  ContactType,
  getAnalyticsIdSegment,
  getContactEventName,
  sanitizeAnalyticsDestination,
  trackEvent,
} from '../../lib/analytics';

const GRADIENT_MAP = {
  'grad-1': { start: 'primary-pastel', end: 'secondary-pastel' },
  'grad-2': { start: 'quinary-pastel', end: 'quaternary-pastel' },
  'grad-3': { start: 'senary-pastel', end: 'tertiary-pastel' },
};

const getContactType = (name: string): ContactType => {
  const normalizedName = name.toLowerCase();

  if (normalizedName === 'github') return 'github';
  if (normalizedName === 'youtube') return 'youtube';
  if (normalizedName === 'instagram') return 'instagram';

  return 'github';
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['default-text']};
  font-weight: 500;
  padding: 2rem 1rem;

  ${media.laptop`
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 2rem;
  `}
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['secondary-text']};

  ${media.laptop`
    flex-direction: row;
  `}
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-transform: capitalize;

  ${media.tablet`
    display: flex;
  `}
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors['default-text']}80;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
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
    box-shadow: ${({ theme }) => theme.colors.boxShadow}40 1.95px 1.95px 5px;

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

      background: conic-gradient(var(--start-color) 45deg, var(--end-color));

      filter: blur(5px);
      z-index: -1;
    }
  }
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
  font-size: 1.1rem;
  min-width: max-content;

  ${media.laptop`
    margin-top: 0;
  `}
`;

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <Copyright>
        built by
        <GradientLogo width={65} height="100%" />
      </Copyright>
      <SocialLinksContainer>
        <p>Where else you can find me:</p>
        <SocialLinks aria-label="Social media links">
          {socialLinks.map((link, index) => {
            const gradientKey = `grad-${(index % 3) + 1}`; // Ensures safe wrapping if there are more than 3 links
            const gradient = GRADIENT_MAP[gradientKey];

            return (
              <ExternalLink
                key={link.name}
                href={link.url}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(
                    getContactEventName({
                      contactType: getContactType(link.name),
                      placement: 'footer',
                    }),
                    {
                      placement: 'footer',
                      element_id: `footer_${getAnalyticsIdSegment(link.name)}`,
                      element_label: link.name,
                      destination_type: 'external',
                      destination: sanitizeAnalyticsDestination(link.url),
                      contact_type: getContactType(link.name),
                    },
                  )
                }
                style={
                  {
                    '--start-color': theme.colors[gradient.start],
                    '--end-color': theme.colors[gradient.end],
                  } as React.CSSProperties
                }
              >
                <div>
                  <link.icon size={28} weight="bold" color="white" />
                </div>
                {link.name}
              </ExternalLink>
            );
          })}
        </SocialLinks>
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
