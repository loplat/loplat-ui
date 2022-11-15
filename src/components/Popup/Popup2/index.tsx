import styled from '@emotion/styled';
import { Modal } from '../../../utils';
import { Button } from '../../Button';
import { grayscale900 } from '../../../core/colors';
import { primary } from '../../../core';
import { generateCustomIcon } from '../core/utils';
import { WrapperCommonStyle, Dialog, ButtonWrapper } from '../core/commonStyle';
import { Popup2Props, DialogProps } from '../core/types';
import { spacing } from '../../../core';

export const Popup2Component = ({
  content,
  title,
  icon = 'check',
  color = primary,
  leftButtonColor = 'default',
  onClickLeftButton,
  leftButtonLabel = '취소',
  onClickRightButton,
  rightButtonColor = 'primary1',
  rightButtonLabel = '확인',
  ...props
}: Popup2Props): JSX.Element => {
  const CustomIcon = generateCustomIcon(icon, color);

  return (
    <Dialog
      role="dialog"
      aria-live="assertive"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      aria-modal="true"
      {...props}
    >
      <Wrapper color={color}>
        {CustomIcon}
        <h1 id="dialogTitle">{title}</h1>
        {typeof content === 'string' ? <p id="dialogDesc">{content}</p> : <div id="dialogDesc">{content}</div>}
      </Wrapper>
      <ButtonWrapper>
        <Button fullWidth color={leftButtonColor} tabIndex={0} onClick={onClickLeftButton}>
          {leftButtonLabel}
        </Button>
        <Button fullWidth color={rightButtonColor} onClick={onClickRightButton}>
          {rightButtonLabel}
        </Button>
      </ButtonWrapper>
    </Dialog>
  );
};

export const Popup2 = ({ isOpen, onClose, ...props }: DialogProps & Popup2Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Popup2Component {...props} />
    </Modal>
  );
};

export const Wrapper = styled.section<{ color: string }>`
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
  #dialogDesc {
    margin: ${spacing(6)}px 0 0 0;
    color: ${grayscale900};
    font-size: 0.875rem;
    line-height: 21px;
  }
`;
