import React from 'react';
import styled from 'styled-components';

interface CaseStudyCalloutProps {
  label?: string;
  children: React.ReactNode;
}

const CALLOUT_GOLD = '#C09040';

const Callout = styled.aside`
  box-sizing: border-box;
  align-self: stretch;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 1.1rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background-color: ${CALLOUT_GOLD}0d;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.7;
`;

const Label = styled.p`
  margin-bottom: 0.35rem;
  color: ${CALLOUT_GOLD};
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
