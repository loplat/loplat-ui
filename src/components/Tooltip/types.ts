import React from 'react';

export type TooltipProps = {
  /** Tooltip을 적용할 ReactElement 입니다. */
  children: React.ReactElement;
  /** tooltip 안의 내용입니다. */
  title: string | React.ReactElement;
  /** tooltip의 상대적인 위치입니다. */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** tooltip이 화면에 보이기까지 delay 시간입니다. */
  enterDelay?: number;
  /** tooltip의 z-index 입니다. */
  zIndex?: number;
  /** 호버를 해도 tooltip이 열리지 않습니다. */
  disabled?: boolean;
  /** true로 주어질 시 Wrapper에 width:100%를 적용합니다. */
  fullWidth?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;
