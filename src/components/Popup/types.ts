export type PopupProps = {
  /** Popup컴포넌트가 열리는지 여부 */
  isOpen: boolean;
  children: React.ReactNode;
  /** 모달의 백그라운드 mask를 숨길 수 있습니다. */
  showMask?: boolean;
  /** 우측상단의 닫기버튼을 숨길 수 있습니다. */
  showCloseButton?: boolean;
  onClose: () => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type PopupHeaderProps = {
  /** 상단 중앙에 위치하는 icon */
  icon?: React.ReactNode;
} & PopupBaseProps;
export type PopupBaseProps = { children: React.ReactNode } & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
