import React from 'react';
import styled from 'styled-components';

interface CaseStudyCalloutProps {
  label?: string;
  children: React.ReactNode;
}

const Callout = styled.aside`
  max-width: 72ch;
  margin: 0 auto;
  padding: 1.35rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.primary}08;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.7;
`;

const Label = styled.p`
  margin-bottom: 0.45rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export default function CaseStudyCallout({
  label,
  children,
}: CaseStudyCalloutProps) {
  return (
    <Callout>
      {label ? <Label>{label}</Label> : null}
      {children}
    </Callout>
  );
}
