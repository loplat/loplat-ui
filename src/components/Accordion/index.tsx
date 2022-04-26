import React, { useState, useCallback, useRef } from 'react';
import { AccordionProps, DetailsProps } from './types';
import { ChevronDownIcon } from '../../assets/Icon';
import { Body, Heading, Details, Summary } from './styles';

export const Accordion = React.memo(
  ({
    title,
    content,
    open = false,
    onToggle = undefined,
    type = 'fill',
    headingLevel = 'h3',
    duration = 0.3,
    iconSuffix,
    ...props
  }: AccordionProps & DetailsProps): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(open);
    const [expanded, setExpanded] = useState(open);

    const animateExpanding = useCallback((expanding: boolean) => {
      const body = bodyRef.current as HTMLDivElement;
      const content = contentRef.current as HTMLDivElement;

      if (expanding) {
        body.style.height = `${content.offsetHeight}px`;
        setIsOpen((prev) => !prev);
        // NOTE: 다 펼쳐지고 나서 height: auto로 바꿔줘야 펼침상태에서 Responsive하게 height을 반영할 수 있다.
        setTimeout(() => (body.style.height = 'auto'), duration * 1000);
      } else {
        body.style.height = `${content.offsetHeight}px`;
        setTimeout(() => (body.style.height = '0px'), 10);
        // NOTE: open 상태는 나중에 바뀌어야함. summary 이외 노드의 visibility 상태가 dom에서 자동으로 변경되기 때문
        setTimeout(() => setIsOpen((prev) => !prev), duration * 1000);
      }
    }, []);

    const toggle = useCallback(() => {
      setExpanded((prev) => !prev);
      animateExpanding(!isOpen);
    }, [isOpen]);

    return (
      <Details open={isOpen} expanded={expanded} type={type} duration={duration} {...props}>
        <Summary
          onClick={(e) => {
            e.preventDefault();
            if (onToggle) {
              setExpanded(!open);
              animateExpanding(!open);
              onToggle(e);
            } else {
              toggle();
            }
          }}
        >
          <Heading as={headingLevel}>{title}</Heading>
          <ChevronDownIcon size={12} suffixForId={iconSuffix} />
        </Summary>
        <Body role="region" ref={bodyRef}>
          <div ref={contentRef}>{content}</div>
        </Body>
      </Details>
    );
  },
);
