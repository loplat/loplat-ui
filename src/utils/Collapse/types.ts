export type AnimateStatus = 'expanding' | 'shrinking';

export type CollapseProps = {
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
  onExpand?: (element: HTMLDivElement) => void;
  /** 열리고 나서 실행되는 함수 */
  onExpandFinished?: (element: HTMLDivElement) => void;
  /** 닫힐 때 실행되는 함수 */
  onCollapse?: (element: HTMLDivElement) => void;
  /** 닫히고 나서 실행되는 함수 */
  onCollapseFinished?: (element: HTMLDivElement) => void;
};
