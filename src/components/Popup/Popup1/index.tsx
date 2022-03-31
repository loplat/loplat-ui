import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../../Button';
import { black as black500, bluescale500 } from '../../../core/colors';
import { primary, danger } from '../../../core/styles/palette';
import { Popup1Props } from '../core/types';
import { generateCustomIcon } from '../core/utils';
import { WrapperCommonStyle, Dialog } from '../core/commonStyle';

export const Popup1 = ({
  color,
  title = '',
  content = '',
  icon = 'check',
  onClose,
  label,
  ...props
}: Popup1Props): React.ReactElement => {
  const [mainColor, buttonColor] =
    color === 'danger' ? ([danger, 'danger1'] as const) : ([primary, 'primary1'] as const);
  const CustomIcon = generateCustomIcon(icon, mainColor);

  return (
    <Dialog
      role="dialog"
      aria-live="assertive"
      title={label}
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      {...props}
    >
      <Wrapper color={mainColor} onlyTitle={content === ''} onlyContent={title === ''}>
        {CustomIcon}
        {title !== '' && <h1 id="dialogTitle">{title}</h1>}
        {content !== '' && <p id="dialogDesc">{content}</p>}
      </Wrapper>
      <Button fullWidth color={buttonColor} tabIndex={0} onClick={onClose}>
        확인
      </Button>
    </Dialog>
  );
};

export const Wrapper = styled.div<{ color: string; onlyTitle: boolean; onlyContent: boolean }>`
  ${WrapperCommonStyle};
  > svg {
    margin: 24px 0 8px 0;
    ${({ onlyContent }) => (onlyContent ? `margin-top: 0px` : ``)}
  }

  h1 {
    font-weight: bold;
    font-size: 1rem;
    color: ${({ color }) => color};
    line-height: 30px;
    margin: 0;
    ${({ onlyTitle }) => (onlyTitle ? `font-size: 1.25rem; margin-bottom: 16px;` : '')}
  }
  p {
    margin: 24px 0 0 0;
    color: ${bluescale500};
    font-size: 0.875rem;
    line-height: 21px;

    ${({ onlyContent }) =>
      onlyContent
        ? `
      margin-top: 4px; 
      line-height: 24px; 
      font-size: 1rem; 
      color: ${black500};`
        : ''}
  }
`;
