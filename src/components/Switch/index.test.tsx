import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Switch } from './index';
import userEvent from '@testing-library/user-event';

type Props = {
  checked?: boolean;
  disabled?: boolean;
};
const TestWrapper = ({ checked = false, disabled = false }: Props) => {
  const [isChecked, setChecked] = useState<boolean>(checked);
  return (
    <Switch
      checked={isChecked}
      onChange={(e) => {
        setChecked((prev) => !prev);
      }}
      variant="outlined"
      disabled={disabled}
    />
  );
};

describe('<Switch/>', () => {
  test('클릭시 input:checked 가 된다', () => {
    const { getByRole } = render(<TestWrapper />);
    const checkbox = getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test('토글시 input:checked도 토글된다', () => {
    const { getByRole } = render(<TestWrapper />);
    const checkbox = getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  test('최초값이 false일 경우 그 값이 적용되어야 한다', () => {
    const { getByRole } = render(<TestWrapper checked={true} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  test('최초값이 false일 경우 그 값이 적용되어야 한다', () => {
    const { getByRole } = render(<TestWrapper checked={false} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test('최초값이 true이고 disabled일 때 값이 변경되지 않아야한다', () => {
    const { getByRole } = render(<TestWrapper checked={true} disabled={true} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
