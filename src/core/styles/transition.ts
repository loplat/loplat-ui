import { css, SerializedStyles } from '@emotion/react';

export const transition = (property: string, duration = 0.2): SerializedStyles => {
  return css`
    transition-property: ${property};
    transition-duration: ${duration}s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  `;
};
