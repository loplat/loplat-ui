import type { ReactNode, RefObject } from 'react';

type PositionType = { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
export type PopoverContextType = {
  container: Element | null;
  triggerRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  triggerType?: 'hover' | 'click';
  isOpen: boolean;
};
export type PopoverTypes = {
  children: ReactNode;
  disabled: boolean;
  position: { anchor: PositionType; transform: PositionType };
  triggerType?: PopoverContextType['triggerType'];
  duration?: number;
  /** `trigger`와 `popover` 엘레먼트 사이의 간격 */
  offset?: number;
  /** `trigger`와 `popover` 엘레먼트 사이의 간격 방향.
   *
   * 예시: right을 선택할 경우, `anchor`를 기준으로 오른쪽으로 `offset`만큼 떨어진 곳에서 `popover`이 렌더링됩니다. */
  offsetDirection?: 'top' | 'bottom' | 'left' | 'right';
};
export type PopoverContentType = {
  children: ReactNode;
};
export type PopoverTriggerType = {
  children: (isOpen: boolean) => ReactNode;
};
