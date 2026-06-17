import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router';
import styled from 'styled-components';
import { ArrowLeft } from '@phosphor-icons/react';

import { caseStudies, CaseStudySlug } from '../../case-studies';
import { trackEvent } from '../../lib/analytics';

const NotFoundPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  min-height: 100vh;
  padding: 4rem 1.25rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  text-align: center;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 2rem;
  font-weight: 500;
`;

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const trackedSlugRef = useRef<string | null>(null);
  const caseStudy =
    slug && Object.hasOwn(caseStudies, slug)
      ? caseStudies[slug as CaseStudySlug]
      : null;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    if (!slug || !caseStudy || trackedSlugRef.current === slug) return;

    trackEvent('case_study_viewed', {
      project: caseStudy.title,
      slug,
    });
    trackedSlugRef.current = slug;
  }, [caseStudy, slug]);

  if (!caseStudy) {
    return (
      <NotFoundPage>
        <BackLink to="/projects">
          <ArrowLeft size={16} weight="bold" />
          back to projects
        </BackLink>
        <Title>Case study not found</Title>
      </NotFoundPage>
    );
  }

  const { Component } = caseStudy;

  return <Component />;
}
