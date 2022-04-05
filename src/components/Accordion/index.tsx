import React, { useState, useCallback, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { black, bluescale100, grayscale200, grayscale800 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { generateUniqueId } from '../../functions/generator';
import { spacing } from '../../core';
import { ChevronDownIcon } from '../../assets/Icon';

const transition = (label: string, duration: number) =>
  css`
    will-change: ${label};
    transition: ${label} ${duration}s cubic-bezier(0.4, 0, 0.2, 1);
  `;

const Heading = styled.h3`
  margin: 0;
  line-height: 24px;
  font-weight: normal;
  font-size: 1rem;

  button {
    color: inherit;
    font-size: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: ${spacing(4)}px ${spacing(6)}px;
    width: 100%;
    background-color: transparent;
  }
`;

const Wrapper = styled.div<Pick<Required<AccordionProps>, 'type' | 'isExpanded' | 'duration'>>`
  background-color: white;
  box-sizing: border-box;

  ${({ type, isExpanded }) =>
    type === 'fill' && isExpanded
      ? `background: ${bluescale100};`
      : type === 'fill'
      ? ` background: white;`
      : `border-bottom: 1px solid ${grayscale200};`};

  .heading {
    color: ${({ isExpanded }) => (isExpanded ? primary : `${black}`)};
    ${({ duration }) => duration && transition('color', duration)};
  }
  .accordion_chevron {
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)')};
    ${({ duration }) => duration && transition('transform', duration)};
  }
`;

const Body = styled.div<{ tableHeight: number } & Pick<AccordionProps, 'isExpanded' | 'duration'>>`
  overflow: hidden;
  font-size: 1rem;
  color: ${grayscale800};
  height: ${({ tableHeight }) => tableHeight}px;
  ${({ duration }) => duration && transition('height', duration)};

  > div {
    padding: ${spacing(2)}px ${spacing(6)}px ${spacing(8)}px;
  }
`;

type AccordionProps = {
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
};
export const Accordion = React.memo(
  ({
    title,
    content,
    isExpanded = false,
    toggle,
    type = 'fill',
    headingLevel = 'h3',
    duration = 0.2,
  }: AccordionProps): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const uniqueId = generateUniqueId();
    const bodyId = `loplat_accordion_body_${uniqueId}`;
    const [tableHeight, setTableHeight] = useState(0);

    useEffect(() => {
      setTableHeight(isExpanded ? bodyRef.current?.scrollHeight ?? 0 : 0);
    }, [isExpanded]);

    return (
      <Wrapper role="group" isExpanded={isExpanded} onClick={toggle} type={type} duration={duration}>
        <Heading as={headingLevel} className="heading">
          <button aria-expanded={isExpanded} aria-controls={bodyId}>
            {title}
            <ChevronDownIcon size={12} className="accordion_chevron" />
          </button>
        </Heading>
        <Body
          tableHeight={tableHeight}
          isExpanded={isExpanded}
          duration={duration}
          id={bodyId}
          data-testid="loplat-ui_accordion_content"
        >
          <div ref={bodyRef}>{content}</div>
        </Body>
      </Wrapper>
    );
  },
);

type AccordionGroupProps = {
  list: Pick<AccordionProps, 'title' | 'content'>[];
} & Partial<Pick<Required<AccordionProps>, 'type' | 'headingLevel' | 'duration'>> & {
    /**
     * 최초 렌더시, 열린 상태에서 렌더링 하고자하는 list의 index를 입력하면 됩니다.
     * list의 index보다 큰 숫자를 입력 할 경우, 모든 아코디언이 닫힌 상태로 렌더링됩니다.
     * 입력하지 않을 경우, 모든 아코디언이 닫힌 상태로 렌더링됩니다.
     * */
    defaultExpandedIndex?: number;
  };
export const AccordionGroup = ({
  list,
  defaultExpandedIndex = -1,
  ...otherProps
}: AccordionGroupProps): JSX.Element => {
  const [expanded, setExpanded] = useState(defaultExpandedIndex < list.length ? defaultExpandedIndex : -1);
  const toggle = useCallback((index: number) => {
    setExpanded((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <React.Fragment>
      {list.map((props, index) => (
        <div key={`props.title_${index}`}>
          <Accordion {...props} {...otherProps} isExpanded={expanded === index} toggle={() => toggle(index)} />
        </div>
      ))}
    </React.Fragment>
  );
};
