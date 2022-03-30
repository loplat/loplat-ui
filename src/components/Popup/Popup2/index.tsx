import React from 'react';
import styled from '@emotion/styled';
import { grayscale900 } from '../../../core/colors';
import { Dialog, WrapperCommonStyle } from '../Popup1/';
import { Button } from '../../Button';
import { primary, Small } from '../../../core';
import { BasePopupProps, DivProps, TwoButtons } from '../';
import { generateCustomIcon } from '../Popup1/';

export type Popup2Props = Omit<Required<BasePopupProps>, 'onClose' | 'color'> & { color?: string } & TwoButtons &
  DivProps;

export const Popup2 = ({
  label,
  content,
  title,
  icon = 'check',
  color = primary,
  leftButtonColor,
  leftButtonClick,
  leftButtonLabel,
  rightButtonClick,
  rightButtonColor,
  rightButtonLabel,
  ...props
}: Popup2Props): JSX.Element => {
  const CustomIcon = generateCustomIcon(icon, color);

  return (
    <Dialog role="dialog" aria-live="assertive" title={label} {...props}>
      <Wrapper color={color}>
        {CustomIcon}
        <h1>{title}</h1>
        <p>{content}</p>
      </Wrapper>
      <ButtonWrapper>
        <Button fullWidth color={leftButtonColor} tabIndex={0} onClick={leftButtonClick}>
          {leftButtonLabel}
        </Button>
        <Button fullWidth color={rightButtonColor} onClick={rightButtonClick}>
          {rightButtonLabel}
        </Button>
      </ButtonWrapper>
    </Dialog>
  );
};

export const Wrapper = styled.div<{ color: string }>`
  ${WrapperCommonStyle};

  > svg {
    margin: 16px 0 12px 0;
  }

  h1 {
    font-weight: bold;
    font-size: 1rem;
    color: ${({ color }) => color};
    line-height: 30px;
    margin: 0;
  }
  p {
    margin: 24px 0 0 0;
    color: ${grayscale900};
    font-size: 0.875rem;
    line-height: 21px;
  }
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    &:first-of-type {
      margin-right: 15px;
    }

    ${Small} {
      padding: 16px 0;
    }
  }
`;
