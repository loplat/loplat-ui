import styled from '@emotion/styled';
import { bluescale500, black } from '../../../core/colors';
import { Button } from '../../Button';
import { Large, Small } from '../../../core/styles/mediaQuery';
import { IconButton } from '../../IconButton';
import { CloseIcon } from '../../../assets/Icon/export.generated';
import { Popup3Props, DialogProps } from '../core/types';
import { WrapperCommonStyle, Dialog, ButtonWrapper } from '../core/commonStyle';
import { spacing } from '../../../core';
import { Modal } from '../../../utils';

export const Popup3Component = ({
  description,
  onClose,
  content,
  title,
  showCloseButton = true,
  leftButtonColor = 'default',
  onClickLeftButton,
  leftButtonLabel = '취소',
  onClickRightButton,
  rightButtonColor = 'primary1',
  rightButtonLabel = '확인',
  ...props
}: Popup3Props): JSX.Element => {
  return (
    <StyledDialog
      role="dialog"
      aria-live="assertive"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      aria-modal="true"
      {...props}
    >
      {showCloseButton && (
        <IconButton color="ghost" onClick={onClose} aria-label="닫기" className="close_dialog" tabIndex={0}>
          <CloseIcon size={16} />
        </IconButton>
      )}
      <Wrapper>
        <Title showCloseButton={showCloseButton}>
          <h1 id="dialogTitle">{title}</h1>
          {description && <small>{description}</small>}
        </Title>
        {typeof content === 'string' ? <p id="dialogDesc">{content}</p> : <div id="dialogDesc">{content}</div>}
      </Wrapper>
      <StyledButtonWrapper>
        <Button color={leftButtonColor} onClick={onClickLeftButton}>
          {leftButtonLabel}
        </Button>
        <Button color={rightButtonColor} onClick={onClickRightButton}>
          {rightButtonLabel}
        </Button>
      </StyledButtonWrapper>
    </StyledDialog>
  );
};

export const Popup3 = ({ isOpen, onClose, ...props }: DialogProps & Popup3Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Popup3Component {...props} onClose={onClose} />
    </Modal>
  );
};

const StyledDialog = styled(Dialog)`
  width: auto;
  position: relative;

  ${Small} {
    width: 100vw;
    padding: ${spacing(6)}px;
  }
  ${Large} {
    min-width: 450px;
    max-width: 1200px;
    padding: ${spacing(8)}px ${spacing(6)}px;
  }

  .close_dialog {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

const Wrapper = styled.section`
  ${WrapperCommonStyle};
  align-items: flex-start;
  width: 100%;
  text-align: left;

  #dialogDesc {
    margin: 0;
    color: ${black};
    font-size: 1rem;
    line-height: 24px;
  }
`;

const Title = styled.div<Pick<Popup3Props, 'showCloseButton'>>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: flex-start;

  h1 {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${black};
    line-height: 30px;
    margin: 0;
    max-width: ${({ showCloseButton }) => (showCloseButton ? `calc(100% - ${spacing(8)}px)` : '100%')};
  }
  small {
    margin: ${spacing(1)}px 0 0 0;
    font-size: 0.75rem;
    color: ${bluescale500};
    line-height: 18px;
  }
  margin-bottom: ${spacing(6)}px;
`;

const StyledButtonWrapper = styled(ButtonWrapper)`
  align-items: center;
  justify-content: flex-end;

  button {
    ${Small} {
      padding: ${spacing(4)}px ${spacing(5)}px;
    }
  }
`;
