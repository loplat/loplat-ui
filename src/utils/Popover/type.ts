import type { ReactNode, RefObject } from 'react';
import type { Keyframe } from '../../components/Accordion/types';

export type PopoverPosition = { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
export type PopoverContextProps = {
  container: Element | null;
  triggerRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  triggerType?: 'hover' | 'click';
  isOpen: boolean;
};
export type PopoverProps = {
  children: ReactNode;
  disabled?: boolean;
  position?: { anchor: PopoverPosition; transform: PopoverPosition };
  /** animation easing */
  easing?: string;
  enterDelay?: number;
  outDelay?: number;
  /** animation duration */
  duration?: number;
  /** animation keyframe 객체를 최소 2개 이상의 배열로 전달해주세요. 만약 3개 이상 추가하고싶다면, offset 속성을 추가하여 크로스브라우징에 대응해 주세요.
   * [keyframe format](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntax) */
  keyframes?: Keyframe[];
  triggerType?: PopoverContextProps['triggerType'];
  /** `trigger`와 `popover` 엘레먼트 사이의 간격 */
  offset?: number;
  /** `trigger`와 `popover` 엘레먼트 사이의 간격 방향.
   *
   * **(예시)** `offsetDirection = right` 인 경우, `anchor`를 기준으로 오른쪽으로 `offset`만큼 떨어진 곳에서 `popover`이 렌더링됩니다. */
  offsetDirection?: 'top' | 'bottom' | 'left' | 'right';
};
export type PopoverContentProps = {
  children: ReactNode;
};
export type PopoverTriggerProp = {
  children: (isOpen: boolean) => ReactNode;
};
