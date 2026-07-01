import React from 'react';
import styled from 'styled-components';
import media from '../../utils/mediaQueries';

interface CaseStudySectionProps {
  title: string;
  spacing?: 'compact' | 'default' | 'spacious';
  children: React.ReactNode;
}

const Section = styled.section<{
  $spacing: NonNullable<CaseStudySectionProps['spacing']>;
}>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: ${({ $spacing }) => {
    if ($spacing === 'compact') {
      return 'clamp(1.75rem, 4vw, 2.5rem) 0';
    }

    if ($spacing === 'spacious') {
      return 'clamp(2.5rem, 6vw, 3.5rem) 0';
    }

    return '2rem 0';
  }};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${media.laptop`
    grid-template-columns: minmax(12rem, 0.36fr) minmax(0, 0.64fr);
    gap: 4rem;
  `}
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1.35rem;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

const Body = styled.div`
  max-width: 70ch;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 1rem;
  line-height: 1.85;

  p + p {
    margin-top: 1rem;
  }
`;

export default function CaseStudySection({
  title,
  spacing = 'default',
  children,
}: CaseStudySectionProps) {
  return (
    <Section $spacing={spacing}>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Section>
  );
}
