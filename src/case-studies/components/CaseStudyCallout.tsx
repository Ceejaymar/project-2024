import React from 'react';
import styled from 'styled-components';

interface CaseStudyCalloutProps {
  children: React.ReactNode;
}

const Callout = styled.aside`
  max-width: 70ch;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.primary}08;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.7;
`;

export default function CaseStudyCallout({ children }: CaseStudyCalloutProps) {
  return <Callout>{children}</Callout>;
}
