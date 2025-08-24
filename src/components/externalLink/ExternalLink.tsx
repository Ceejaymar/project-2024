import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const CardLink = styled(motion.a)`
  display: flex;
  gap: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors['default-text']};
  transition: all 0.3s ease;
`;

const MotionArrowUpRight = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

export default function ExternalLink({ href, children }) {
  return (
    <CardLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileHover="visible"
    >
      {children}
      <MotionArrowUpRight
        variants={{
          hidden: { x: -10, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ ease: 'easeIn', duration: 0.1 }}
      >
        <ArrowUpRight size={16} weight="bold" />
      </MotionArrowUpRight>
    </CardLink>
  );
}
