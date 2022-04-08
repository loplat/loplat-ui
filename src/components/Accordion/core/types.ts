export type AccordionProps = {
  /** 아코디언의 제목을 작성합니다. */
  title: string;
  /** 아코디언의 내용을 작성합니다. */
  content: string | React.ReactElement;
  type?: 'fill' | 'line';
  /**
   * 페이지의 heading level에 맞게 작성해주세요.
   * 기본은 h3 입니다.
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** 아코디언의 열림여부를 설정합니다. */
  isExpanded: boolean;
  /** 아코디언의 `isExpanded`상태를 조작할 수 있는 함수여야합니다. */
  toggle: () => void;
  /** 여닫는 transition css 초 시간입니다.  */
  duration?: number;
  /**
   * SSR에서 발생하는 _unique id collision_ 을 막기 위한 suffix를 제공합니다.
   * CRA에서는 추가하지 않으셔도 괜찮습니다.
   */
  iconSuffix?: string;
};

export type AccordionGroupProps = {
  list: Pick<AccordionProps, 'title' | 'content'>[];
} & Partial<Pick<Required<AccordionProps>, 'type' | 'headingLevel' | 'duration' | 'iconSuffix'>> & {
    /**
     * 최초 렌더시, 열린 상태에서 렌더링 하고자하는 list의 index를 입력하면 됩니다.
     * list의 index보다 큰 숫자를 입력 할 경우, 모든 아코디언이 닫힌 상태로 렌더링됩니다.
     * 입력하지 않을 경우, 모든 아코디언이 닫힌 상태로 렌더링됩니다.
     * */
    defaultExpandedIndex?: number;
  };
