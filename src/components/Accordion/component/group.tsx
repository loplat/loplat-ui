import React, { useState, useCallback } from 'react';
import { AccordionGroupProps } from '../core/types';
import { Accordion } from './single';

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
