import React from 'react';
import { Modal } from '../../utils';
import { Popup1 as PopupOne } from './Popup1';
import { Popup2Props, Popup2 as PopupTwo } from './Popup2';
import { Popup3Props, Popup3 as PopupThree } from './Popup3';
import { ButtonProps } from '../Button';

// 기존의 Button의 Color을 그냥 가져오는게 나을지 고민
type Color = NonNullable<ButtonProps['color']>;
type PopupButton = {
  label: string;
  click: (event: unknown) => void;
  color: Color;
};
export type TwoButtons = PrefixKey<PopupButton, 'leftButton'> & PrefixKey<PopupButton, 'rightButton'>;

export type BasePopupProps = {
  /** icon, button, title 색상을 결정합니다. */
  color: 'danger' | 'primary';
  title?: string;
  content?: string;
  /** title과 동일하거나, 해당 컴포넌트의 목적을 간략히 입력해주세요. dialog의 aria-label역할을 합니다. */
  label: string;
  /**
   * `loplat ui icon 컴포넌트`를 전달하여 커스텀할 수 있습니다.
   *
   * 설정한 color에 따라 전달한 icon의 fillColor 색상이 달라집니다.
   */
  icon?: 'check' | 'warning' | React.ReactElement;
  /** `popup 컴포넌트`를 닫을 수 있는 함수여야 합니다. */
  onClose: () => void;
};
export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type PopupProps = BasePopupProps & DivProps;

export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Popup1 = ({ isOpen, onClose, ...props }: DialogProps & PopupProps): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PopupOne {...props} onClose={onClose} />
    </Modal>
  );
};

export const Popup2 = ({ isOpen, onClose, ...props }: DialogProps & Popup2Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PopupTwo {...props} />
    </Modal>
  );
};

export const Popup3 = ({ isOpen, onClose, ...props }: DialogProps & Popup3Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PopupThree {...props} onClose={onClose} />
    </Modal>
  );
};
