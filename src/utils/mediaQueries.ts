import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (styles: any) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${styles}
      }
    `;
    return acc;
  },
  {} as { [key: string]: any },
);

export default media;
