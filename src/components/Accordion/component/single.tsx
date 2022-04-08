import React, { useState, useEffect, useRef, useMemo } from 'react';
import { AccordionProps } from '../core/types';
import { generateUniqueId } from '../../../functions/generator';
import { ChevronDownIcon } from '../../../assets/Icon';
import { Body, Heading, Wrapper } from '../core/styles';

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
