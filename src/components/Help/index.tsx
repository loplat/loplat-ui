import React from 'react';
import { css } from '@emotion/css';
import { bluescale500, bluescale300, blue100 } from '../..';

export interface HelpProps {
  title?: string;
  text: string;
  maxWidth?: number | '100%';
}
export const Help = ({ title, text, maxWidth = 400 }: HelpProps): React.ReactElement => {
  return (
    <div
      className={css`
        max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : '100%'};
        padding: 1rem;
        box-shadow: 2px 2px 4px 0 ${bluescale300}4C;
        border: solid 1px ${bluescale500};
        border-radius: 8px;
        background-color: ${bluescale500};
        color: ${blue100};
        font-size: 0.88rem;
        box-sizing: border-box;
      `}
    >
      {title && (
        <p
          data-testid="help-title"
          className={css`
            font-weight: bold;
            margin: 0 0 4px 0;
          `}
        >
          {title}
        </p>
      )}
      <p
        data-testid="help-text"
        className={css`
          margin: 0;
        `}
      >
        {text}
      </p>
    </div>
  );
};
