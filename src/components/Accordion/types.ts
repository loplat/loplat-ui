import { SerializedStyles } from '@emotion/react';
import type {
  ComponentPropsWithoutRef,
  MutableRefObject,
  RefObject,
  ReactChildren,
  HTMLAttributes,
  MouseEvent,
} from 'react';

type Combine<T, K> = T & Omit<K, keyof T>;
export type Keyframe = { [property: string]: string | number };
export type IconPosition = 'start' | 'end';

type AccordionBase = {
  /** 로플랫이 정한 style variation을 따릅니다.  */
  type?: 'fill' | 'line';
  /** 여닫는 transition css millisecond 입니다.  */
  duration?: number;
  /** 아코디언의 여닫음을 나타내는 상태입니다. */
  open?: boolean;
  /** 아코디언의 `open`상태를 조작할 수 있는 함수여야합니다. */
  onToggle?: (e: MouseEvent<HTMLElement>) => void;
  /** easing style default: 'cubic-bezier(0.4, 0, 0.2, 1)' */
  easing?: string;
  /** Accordion 스타일을 커스텀합니다. `@emotion/react`의 css함수로 스타일을 작성해주세요. */
  css?: SerializedStyles;
};

export type AccordionProps = Combine<AccordionBase, ComponentPropsWithoutRef<'details'>>;
export type AccordionTitleProps = {
  /** 페이지의 heading level에 맞게 작성해주세요. 기본은 h3 입니다. */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLDivElement>;
export type AccordionIndicatorProps = {
  /** css animation keyframe을 최소 2개 이상의 배열로 전달해주세요. */
  keyframes?: Keyframe[];
  children: ReactChildren;
};

export type AccordionContextProviderProps = {
  accordionRef: MutableRefObject<HTMLDetailsElement | null>;
  children: JSX.Element;
} & Pick<Required<AccordionBase>, 'duration' | 'open' | 'easing'> &
  Pick<AccordionBase, 'onToggle'>;
export type AccordionContextReturnType = {
  toggle: NonNullable<AccordionBase['onToggle']>;
  contentRef: MutableRefObject<HTMLDivElement | null>;
  getAccordionTitleProps: () => Record<string, string | number>;
  getAccordionBodyProps: () => Record<string, string | number>;
  setIconAnimation: (keyframes: Keyframe[], iconRef: RefObject<HTMLDivElement>) => void;
};
