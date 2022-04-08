import { css, SerializedStyles } from '@emotion/react';

export const transition = (label: string, duration = 0.2): SerializedStyles =>
  css`
    will-change: ${label};
    transition: ${label} ${duration}s cubic-bezier(0.4, 0, 0.2, 1);
  `;
