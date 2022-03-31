import styled from '@emotion/styled';
import { bluescale500, black } from '../../../core/colors';
import { Dialog as DialogRef } from '../Popup1';
import { Button } from '../../Button';
import { Large, Small } from '../../../core/MediaQuery';
import { IconButton } from '../../IconButton';
import { CloseIcon } from '../../../assets/Icon/export.generated';
import { Popup3Props } from '../core/types';
import { ButtonWrapper as ButtonWrapperRef } from '../Popup2';
import { WrapperCommonStyle } from '../core/commonStyle';

export const Popup3 = ({
  description,
  onClose,
  label,
  content,
  title,
  showCloseButton = true,
  leftButtonColor,
  leftButtonClick,
  leftButtonLabel,
  rightButtonClick,
  rightButtonColor,
  rightButtonLabel,
  ...props
}: Popup3Props): JSX.Element => {
  return (
    <Dialog
      role="dialog"
      aria-live="assertive"
      title={label}
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      {...props}
    >
      {showCloseButton && (
        <IconButton color="ghost" onClick={onClose} aria-label="닫기" className="close_dialog" tabIndex={0}>
          <CloseIcon size={16} />
        </IconButton>
      )}
      <Wrapper>
        <Title>
          <h1 id="dialogTitle">{title}</h1>
          {description && <small id="dialogDesc">{description}</small>}
        </Title>
        <p>{content}</p>
      </Wrapper>
      <ButtonWrapper>
        <Button color={leftButtonColor} onClick={leftButtonClick}>
          {leftButtonLabel}
        </Button>
        <Button color={rightButtonColor} onClick={rightButtonClick}>
          {rightButtonLabel}
        </Button>
      </ButtonWrapper>
    </Dialog>
  );
};

const Dialog = styled(DialogRef)`
  width: auto;
  position: relative;

  ${Small} {
    width: 100%;
    max-width: 100%;
    padding: 24px;
  }
  ${Large} {
    min-width: 450px;
    max-width: 1200px;
    padding: 32px 24px;
  }

  .close_dialog {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

const Wrapper = styled.div`
  ${WrapperCommonStyle};
  align-items: flex-start;
  width: 100%;
  text-align: left;

  p {
    margin: 0;
    color: ${black};
    font-size: 1rem;
    line-height: 24px;
  }
`;

const Title = styled.section`
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
    max-width: calc(100% - 34px);
  }
  small {
    margin: 4px 0 0 0;
    font-size: 0.75rem;
    color: ${bluescale500};
    line-height: 18px;
  }
  margin-bottom: 24px;
`;

const ButtonWrapper = styled(ButtonWrapperRef)`
  align-items: center;
  justify-content: flex-end;

  button {
    ${Small} {
      padding: 16px 20px;
    }
  }
`;
