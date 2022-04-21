import React, { useState, useEffect, useRef } from 'react';
import { AccordionProps, DetailsProps } from './types';
import { ChevronDownIcon } from '../../assets/Icon';
import { Body, Heading, Details, Summary } from './styles';

export const Accordion = React.memo(
  ({
    title,
    content,
    open,
    onToggle,
    type = 'fill',
    headingLevel = 'h3',
    duration = 0.2,
    iconSuffix,
    ...props
  }: AccordionProps & DetailsProps): JSX.Element => {
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const summaryRef = useRef<HTMLDivElement>(null);
    const [totalHeight, setTotalHeight] = useState(detailsRef.current?.scrollHeight ?? 0);
    useEffect(() => {
      setTotalHeight(detailsRef.current?.scrollHeight ?? 0);
    }, [open]);

    return (
      <Details
        open={open}
        type={type}
        duration={duration}
        summaryHeight={summaryRef.current?.scrollHeight ?? 55}
        totalHeight={totalHeight}
        ref={detailsRef}
        {...props}
      >
        <Summary
          ref={summaryRef}
          onClick={(e) => {
            e.preventDefault();
            onToggle(e);
          }}
        >
          <Heading as={headingLevel}>{title}</Heading>
          <ChevronDownIcon size={12} className="accordion_chevron" suffixForId={iconSuffix} />
        </Summary>
        <Body role="region">{content}</Body>
      </Details>
    );
  },
);
