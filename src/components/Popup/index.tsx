import { Modal } from '../../utils';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../../assets/Icon/export.generated';
import { PopupWrapper, Header, Content, Footer } from './index.styles';
import { PopupBaseProps, PopupHeaderProps, PopupProps } from './types';

export const Popup = ({
  isOpen,
  onClose,
  children,
  showCloseButton = false,
  showMask = true,
  ...props
}: PopupProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showMask={showMask}>
      <PopupWrapper role="alertdialog" aria-modal="true" aria-live="assertive" {...props}>
        {showCloseButton && (
          <IconButton
            onClick={onClose}
            variant="ghost2"
            borderless
            aria-label="close"
            className="popup__close"
            tabIndex={0}
          >
            <CloseIcon size={16} />
          </IconButton>
        )}
        {children}
      </PopupWrapper>
    </Modal>
  );
};

Popup.Header = ({ children, icon, className, ...props }: PopupHeaderProps) => {
  return (
    <Header className={`popup__header ${className}`} {...props}>
      {icon ? <div className="popup__icon">{icon}</div> : null}
      {children}
    </Header>
  );
};

Popup.Content = ({ children, className, ...props }: PopupBaseProps) => {
  return (
    <Content className={`popup__content ${className}`} {...props}>
      {children}
    </Content>
  );
};

Popup.Footer = ({ children, className, ...props }: PopupBaseProps) => {
  return (
    <Footer className={`popup__footer ${className}`} {...props}>
      {children}
    </Footer>
  );
};
