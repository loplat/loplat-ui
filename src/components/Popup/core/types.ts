import { ButtonProps } from '../../Button';
import React from 'react';

type Variant = NonNullable<ButtonProps['variant']>;
type PopupButton = {
  label?: string;
  variant?: Variant;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
type CustomButtonKey<Key extends string> = PrefixKey<Omit<PopupButton, 'onClick'>, `${Key}`> &
  PostfixKey<Pick<PopupButton, 'onClick'>, `${Key}`>;
export type TwoButtons = CustomButtonKey<'leftButton'> & CustomButtonKey<'rightButton'>;

type BasePopupConstructor =
  | { title: string | React.ReactElement; children?: React.ReactNode }
  | { title?: string | React.ReactElement; children: React.ReactNode };
export type BasePopupProps = BasePopupConstructor & {
  /** icon, button, title 색상을 결정합니다. */
  variant?: 'danger' | 'primary';
  icon?: React.ReactNode;
  /** `popup 컴포넌트`를 닫을 수 있는 함수여야 합니다. */
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type Popup1Props = BasePopupProps & DivProps & CustomButtonKey<'button'>;

export type Popup2Props = Omit<Required<BasePopupProps>, 'onClose' | 'variant'> & {
  variant?: string;
} & TwoButtons &
  DivProps;

export type Popup3Props = Omit<Required<BasePopupProps>, 'icon' | 'variant'> & {
  /** title 로는 부족한 설명을 덧붙일 수 있습니다.
   *  title 아래에 small 태그로 렌더링됩니다. */
  description?: string;
  /** 우측상단의 닫기 버튼을 숨길 수 있습니다. */
  showCloseButton?: boolean;
} & TwoButtons &
  DivProps;

export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};
