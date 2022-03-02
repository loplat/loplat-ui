import React from 'react';
import { css } from '@emotion/css';
import { bluescale500, bluescale300, blue100 } from '../../core/colors/index';

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
        padding: 12px;
        border: solid 1px ${bluescale500};
        border-radius: 8px;
        box-sizing: border-box;
        background-color: ${bluescale500};
        color: ${blue100};
        box-shadow: 2px 2px 4px 0 ${bluescale300}4C;
        font-size: 0.875rem;
        line-height: 1.5;
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
