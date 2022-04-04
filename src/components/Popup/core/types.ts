import { ButtonProps } from '../../Button';
import { IconProps } from '../../../assets/Icon';
import React from 'react';

type Color = NonNullable<ButtonProps['color']>;
type PopupButton = {
  label?: string;
  color?: Color;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
type CustomButtonKey<Key extends string> = PrefixKey<Omit<PopupButton, 'onClick'>, `${Key}`> &
  PostfixKey<Pick<PopupButton, 'onClick'>, `${Key}`>;
export type TwoButtons = CustomButtonKey<'leftButton'> & CustomButtonKey<'rightButton'>;

type BasePopupConstructor =
  | { title: string; content?: React.ReactElement | string }
  | { title?: string; content: React.ReactElement | string };
export type BasePopupProps = BasePopupConstructor & {
  /** icon, button, title 색상을 결정합니다. */
  color?: 'danger' | 'primary';
  /**
   * `loplat-ui icon 컴포넌트`를 전달하여 커스텀할 수 있습니다.
   *
   * 설정한 `color`에 따라 전달한 `icon 컴포넌트`의 `fillColor` 색상이 달라집니다.
   */
  icon?: 'check' | 'warning' | React.NamedExoticComponent<IconProps>;
  /** `popup 컴포넌트`를 닫을 수 있는 함수여야 합니다. */
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type Popup1Props = BasePopupProps & DivProps;

export type Popup2Props = Omit<Required<BasePopupProps>, 'onClose' | 'color'> & {
  color?: string;
} & TwoButtons &
  DivProps;

export type Popup3Props = Omit<Required<BasePopupProps>, 'icon' | 'color'> & {
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
