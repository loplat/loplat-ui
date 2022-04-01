import styled from '@emotion/styled';
import { grayscale900 } from '../../../core/colors';
import { Button } from '../../Button';
import { primary } from '../../../core';
import { generateCustomIcon } from '../core/utils';
import { WrapperCommonStyle, Dialog, ButtonWrapper } from '../core/commonStyle';
import { Popup2Props } from '../core/types';
import { spacing } from '../../../core';

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
    <Dialog
      role="dialog"
      aria-live="assertive"
      title={label}
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      {...props}
    >
      <Wrapper color={color}>
        {CustomIcon}
        <h1 id="dialogTitle">{title}</h1>
        <p id="dialogDesc">{content}</p>
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
    margin: ${spacing(4)}px 0 ${spacing(3)}px 0;
  }

  h1 {
    font-weight: bold;
    font-size: 1rem;
    color: ${({ color }) => color};
    line-height: 30px;
    margin: 0;
  }
  p {
    margin: ${spacing(6)}px 0 0 0;
    color: ${grayscale900};
    font-size: 0.875rem;
    line-height: 21px;
  }
`;
