import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { ArrowLeft } from '@phosphor-icons/react';
import media from '../../utils/mediaQueries';

interface CaseStudyLayoutProps {
  title: string;
  eyebrow?: string;
  summary: string;
  year?: number;
  role?: string;
  tech?: string;
  heroImage?: string;
  children: React.ReactNode;
}

const Page = styled.main`
  width: 100%;
  max-width: 1180px;
  min-height: 100vh;
  padding: 2rem 1.25rem 6rem;
  color: ${({ theme }) => theme.colors['default-text']};

  ${media.tablet`
    padding: 2rem 2rem 7rem;
  `}
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors['default-text']};
  }
`;

const Hero = styled.header`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  ${media.laptop`
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
    align-items: end;
    gap: 4rem;
  `}
`;

const Eyebrow = styled.p`
  margin-bottom: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 12ch;
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: clamp(2.8rem, 8vw, 6rem);
  font-weight: 500;
  line-height: 0.95;
`;

const Summary = styled.p`
  max-width: 42rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 1.08rem;
  line-height: 1.8;

  ${media.tablet`
    font-size: 1.18rem;
  `}
`;

const MetaList = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-top: 0.25rem;

  ${media.tablet`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${media.laptop`
    grid-template-columns: 1fr;
  `}
`;

const MetaItem = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 0.85rem;
`;

const MetaLabel = styled.dt`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors['secondary-text']};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const MetaValue = styled.dd`
  color: ${({ theme }) => theme.colors['default-text']};
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 560px;
  margin: 1rem 0 4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  object-fit: cover;
  object-position: top;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function CaseStudyLayout({
  title,
  eyebrow,
  summary,
  year,
  role,
  tech,
  heroImage,
  children,
}: CaseStudyLayoutProps) {
  const metaItems = [
    year ? { label: 'Year', value: year } : null,
    role ? { label: 'Role', value: role } : null,
    tech ? { label: 'Stack', value: tech } : null,
  ].filter(Boolean) as Array<{ label: string; value: string | number }>;

  return (
    <Page>
      <BackLink to="/projects">
        <ArrowLeft size={16} weight="bold" />
        back to projects
      </BackLink>

      <Hero>
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Title>{title}</Title>
        </div>

        <div>
          <Summary>{summary}</Summary>

          {metaItems.length ? (
            <MetaList>
              {metaItems.map((item) => (
                <MetaItem key={item.label}>
                  <MetaLabel>{item.label}</MetaLabel>
                  <MetaValue>{item.value}</MetaValue>
                </MetaItem>
              ))}
            </MetaList>
          ) : null}
        </div>
      </Hero>

      {heroImage ? <HeroImage src={heroImage} alt={`${title} cover`} /> : null}

      <Content>{children}</Content>
    </Page>
  );
}
