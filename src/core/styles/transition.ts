import { css, SerializedStyles } from '@emotion/react';

export const transition = (property: string, duration = 300, easing?: string): SerializedStyles => {
  return css`
    transition-property: ${property};
    transition-duration: ${duration}ms;
    transition-timing-function: ${easing ?? `cubic-bezier(0.4, 0, 0.2, 1)`};
  `;
};
