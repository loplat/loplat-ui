import React from 'react';
import { css } from '@emotion/css';
import { blue100, blueScale500 } from '../../core/Palette';

export interface HelpProps {
  title?: string;
  text: string;
  maxWidth: number | '100%';
}
const Help = ({ title, text, maxWidth = 400 }: HelpProps): React.ReactElement => {
  return (
    <div
      className={css`
        max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : '100%'};
        padding: 1rem;
        box-shadow: 2px 2px 4px 0 rgba(200, 212, 224, 0.3);
        border: solid 1px ${blueScale500};
        border-radius: 8px;
        background-color: ${blueScale500};
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

export default Help;
