import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { black, bluescale100, grayscale200, grayscale800, blue100, white } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { transition } from '../../core/styles/transition';
import { generateUniqueId } from '../../functions/generator';
import { spacing } from '../../core';
import { ChevronDownIcon } from '../../assets/Icon';

const Heading = styled.h3`
  margin: 0;
  line-height: 24px;
  font-weight: normal;
  font-size: 1rem;
  &:focus {
    color: ${primary};
  }
  &:hover {
    background-color: ${blue100};
  }

  button {
    cursor: pointer;
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
  box-sizing: border-box;
  ${({ type, duration, isExpanded }) =>
    css`
      ${transition('background-color', duration)};
      background-color: ${type === 'fill' && isExpanded ? bluescale100 : white};
      border-bottom: ${type === 'line' && `1px solid ${grayscale200}`};

      .heading {
        ${transition('background-color', duration)};
        color: ${isExpanded ? primary : `${black}`};
        > button {
          ${transition('color', duration)};
        }
      }

      .accordion_chevron {
        ${transition('transform', duration)};
        transform: ${isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)'};
      }
    `};
`;

const changeVisibilityStyle = (isVisible: boolean, duration = 0.2) => {
  if (isVisible) {
    return css`
      visibility: visible;
      ${transition('height', duration)}
      will-change: height, visibility;
    `;
  }
  return css`
    visibility: hidden;
    will-change: height, visibility;
    transition: height ${duration}s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${duration}s;
  `;
};

const Body = styled.div<{ height: number } & Pick<AccordionProps, 'isExpanded' | 'duration'>>`
  overflow: hidden;
  font-size: 1rem;
  color: ${grayscale800};
  height: ${({ height }) => height}px;
  ${({ height, duration }) => changeVisibilityStyle(height !== 0, duration)}

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
  /**
   * SSR에서 발생하는 _unique id collision_ 을 막기 위한 suffix를 제공합니다.
   * CRA에서는 추가하지 않으셔도 괜찮습니다.
   */
  iconSuffix?: string;
};
export const Accordion = React.memo(
  ({
    title,
    content,
    isExpanded,
    toggle,
    type = 'fill',
    headingLevel = 'h3',
    duration = 0.2,
    iconSuffix,
  }: AccordionProps): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [bodyId, headId] = useMemo(() => {
      const uniqueId = generateUniqueId();
      return [`loplat_accordion_body_${uniqueId}`, `loplat_accordion_head_${uniqueId}`];
    }, []);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      setHeight(isExpanded ? bodyRef.current?.scrollHeight ?? 0 : 0);
    }, [isExpanded]);

    return (
      <Wrapper role="group" isExpanded={isExpanded} type={type} duration={duration}>
        <Heading as={headingLevel} className="heading">
          <button aria-expanded={isExpanded} aria-controls={bodyId} onClick={toggle} id={headId}>
            {title}
            <ChevronDownIcon size={12} className="accordion_chevron" suffixForId={iconSuffix} />
          </button>
        </Heading>
        <Body
          height={height}
          isExpanded={isExpanded}
          duration={duration}
          id={bodyId}
          data-testid="loplat-ui_accordion_content"
          role="region"
          aria-labelledby={headId}
        >
          <div ref={bodyRef}>{content}</div>
        </Body>
      </Wrapper>
    );
  },
);

type AccordionGroupProps = {
  list: Pick<AccordionProps, 'title' | 'content'>[];
} & Partial<Pick<Required<AccordionProps>, 'type' | 'headingLevel' | 'duration' | 'iconSuffix'>> & {
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
  iconSuffix,
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
          <Accordion
            {...props}
            {...otherProps}
            isExpanded={expanded === index}
            toggle={() => toggle(index)}
            iconSuffix={iconSuffix && `${iconSuffix}_${index}`}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
