import type { ComponentPropsWithoutRef, MutableRefObject, HTMLAttributes, MouseEvent, ReactNode } from 'react';

type Combine<T, K> = T & Omit<K, keyof T>;
export type Keyframe = { [property: string]: string | number };
export type IconPosition = 'start' | 'end';
export type AnimateStatus = 'expanding' | 'shrinking';

type AccordionBase = {
  /** 로플랫이 정한 style variation을 따릅니다. */
  variant?: 'fill' | 'line';
  /** 여닫는 transition css millisecond 입니다.  */
  duration?: number;
  /** 아코디언의 여닫음을 나타내는 상태입니다. */
  open?: boolean;
  /** 아코디언의 `open`상태를 조작할 수 있는 함수여야합니다. */
  onToggle?: (e: MouseEvent<HTMLElement>) => void;
  /** 아코디언 컴포넌트 전체에 적용되는 animation timing-function 입니다.
   *  easing style default: 'cubic-bezier(0.4, 0, 0.2, 1)' */
  easing?: string;
};

export type AccordionProps = Combine<AccordionBase, ComponentPropsWithoutRef<'details'>>;
export type AccordionTitleProps = HTMLAttributes<HTMLDivElement>;
export type AccordionIndicatorProps = {
  /** animation keyframe 객체를 최소 2개 이상의 배열로 전달해주세요. 만약 3개 이상 추가하고싶다면, offset 속성을 추가하여 크로스브라우징에 대응해 주세요.
   * [keyframe syntax](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntax) */
  keyframes?: Keyframe[];
  children: ReactNode;
};

export type AccordionContextProviderProps = {
  accordionRef: MutableRefObject<HTMLDetailsElement | null>;
  children: JSX.Element;
} & Pick<Required<AccordionBase>, 'duration' | 'open' | 'easing'> &
  Pick<AccordionBase, 'variant'> &
  Pick<AccordionBase, 'onToggle'>;
export type AccordionContextReturnType = {
  toggle: NonNullable<AccordionBase['onToggle']>;
  contentRef: MutableRefObject<HTMLDivElement | null>;
  getAccordionTitleProps: () => Record<string, string | number>;
  getAccordionBodyProps: () => Record<string, string | number>;
  setIconAnimation: (keyframes: Keyframe[], iconElement: HTMLDivElement) => void;
} & Pick<AccordionBase, 'variant'>;
