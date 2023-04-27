export type AnimateStatus = 'expanding' | 'shrinking';

export type TransitionProps = {
  /** 여닫은 상태 */
  isExpanded: boolean;
  orientation?: 'vertical' | 'horizontal';
  children: React.ReactNode;
  /** 닫았을 때 minimum width/height size */
  collapsedSize?: number;
  /** 여닫는 transition css millisecond 입니다.  */
  duration?: number;
  /** animation timing-function 입니다.
   *  easing style default: 'cubic-bezier(0.4, 0, 0.2, 1)' */
  easing?: string;
  /** 열릴 때 실행되는 함수 */
  onExpand?: () => void;
  /** 열리고 나서 실행되는 함수 */
  onExpandFinished?: () => void;
  /** 닫힐 때 실행되는 함수 */
  onCollapse?: () => void;
  /** 닫히고 나서 실행되는 함수 */
  onCollapseFinished?: () => void;
};
