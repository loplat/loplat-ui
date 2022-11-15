import { RadioButtonGroupProps } from '../core/types';
import { RadioButton } from './single';
import { BoxSpacing, boxSpacingStyle } from '../../../core/Spacing';
import styled from '@emotion/styled';

export const RadioButtonGroup = ({
  onChange,
  list,
  name,
  disabledValue,
  selectedValue,
  direction = 'column',
  ...props
}: RadioButtonGroupProps) => {
  return (
    <Wrapper {...props} direction={direction} data-testid="loplat-ui__group">
      {list.map(({ value, label }) => (
        <RadioButton
          key={value}
          value={value}
          label={label}
          name={name}
          checked={value === selectedValue}
          onChange={onChange}
          disabled={disabledValue ? value === disabledValue : false}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<BoxSpacing & Pick<RadioButtonGroupProps, 'direction'>>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  ${boxSpacingStyle};

  > label:not(:last-of-type) {
    ${({ direction }) => (direction === 'column' ? `margin-bottom: 12px` : `margin-right: 16px`)};
  }
`;
