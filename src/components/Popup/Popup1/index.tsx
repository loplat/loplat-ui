import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../../Button';
import { black as black500, bluescale500 } from '../../../core/colors';
import { Popup1Props, DialogProps } from '../core/types';
import { WrapperCommonStyle, Dialog } from '../core/commonStyle';
import { spacing } from '../../../core';
import { Modal } from '../../../utils';

export const Popup1Component = ({
  variant = 'primary',
  title,
  children,
  icon,
  onClose,
  buttonLabel = '확인',
  buttonVariant = 'primary1',
  onClickButton,
  ...props
}: Popup1Props): React.ReactElement => {
  const confirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickButton && onClickButton(e);
    onClose(e);
  };

  return (
    <Dialog
      role="alertdialog"
      aria-modal="true"
      aria-live="assertive"
      aria-labelledby={title ? 'dialogTitle' : 'dialogDesc'}
      {...props}
    >
      <Wrapper color={variant} onlyTitle={!children} onlyContent={!title}>
        {icon ? icon : null}
        {title && <h1 id="dialogTitle">{title}</h1>}
        {children && typeof children === 'string' ? (
          <p id="dialogDesc">{children}</p>
        ) : (
          <div id="dialogDesc">{children}</div>
        )}
      </Wrapper>
      <Button fullWidth variant={buttonVariant} tabIndex={0} onClick={confirm}>
        {buttonLabel}
      </Button>
    </Dialog>
  );
};

export const Popup1 = ({ isOpen, onClose, ...props }: DialogProps & Popup1Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Popup1Component {...props} onClose={onClose} />
    </Modal>
  );
};

export const Wrapper = styled.section<{ color: string; onlyTitle: boolean; onlyContent: boolean }>`
  ${WrapperCommonStyle};
  > svg {
    margin: ${spacing(6)}px 0 ${spacing(2)}px 0;
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

  #dialogDesc {
    margin: 24px 0 0 0;
    color: ${bluescale500};
    font-size: 0.875rem;
    line-height: 21px;
    text-align: center;

    ${({ onlyContent }) =>
      onlyContent
        ? `
      margin-top: ${spacing(1)}px; 
      line-height: 24px; 
      font-size: 1rem; 
      color: ${black500};`
        : ''}
  }
`;
