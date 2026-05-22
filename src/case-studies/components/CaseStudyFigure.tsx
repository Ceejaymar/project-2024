import React from 'react';
import styled from 'styled-components';

interface CaseStudyFigureProps {
  src: string;
  alt: string;
  caption?: string;
  variant?: 'full' | 'inset';
}

const Figure = styled.figure<{ $variant: 'full' | 'inset' }>`
  margin: 1rem 0;
  max-width: ${({ $variant }) => ($variant === 'inset' ? '70ch' : 'none')};
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  object-fit: cover;
`;

const Caption = styled.figcaption`
  max-width: 64ch;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.85rem;
  line-height: 1.6;
`;

export default function CaseStudyFigure({
  src,
  alt,
  caption,
  variant = 'full',
}: CaseStudyFigureProps) {
  return (
    <Figure $variant={variant}>
      <Image src={src} alt={alt} />
      {caption ? <Caption>{caption}</Caption> : null}
    </Figure>
  );
}
