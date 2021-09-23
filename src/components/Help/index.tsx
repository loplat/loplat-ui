import React from 'react';
import { css } from '@emotion/css';
import { blue100, blueScale500 } from '../../core/Palette';

export interface HelpProps {
  title?: string;
  text: string;
  fullWidth?: boolean;
}
const Help = ({ title, text, fullWidth = false }: HelpProps): React.ReactElement => {
  return (
    <div
      className={css`
        max-width: ${fullWidth ? '100%' : '400px'};
        padding: 15px;
        box-shadow: 2px 2px 4px 0 rgba(200, 212, 224, 0.3);
        border: solid 1px ${blueScale500};
        border-radius: 8px;
        background-color: ${blueScale500};
        color: ${blue100};
        font-size: 14px;
        box-sizing: border-box;
      `}
    >
      {title && (
        <p
          data-testid="help-title"
          className={css`
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
