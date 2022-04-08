import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Checkbox, CheckboxProps } from './index';
import userEvent from '@testing-library/user-event';

const label = '체크박스 라벨';

type Checked = CheckboxProps['checked'];
const useCheck = (initial: Checked) => {
  const [isCheck, setIsChecked] = useState<Checked>(initial);
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };
  return { isCheck, onchange };
};

describe('<Checkbox />', () => {
  test('<Checkbox /> 의 disabled가 잘 작동된다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={false} disabled={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('<Checkbox /> 의 disabled이 false 일때 disabled 상태가 아니다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    render(
      <Checkbox
        onChange={result.current.onchange}
        name="test"
        label={label}
        checked={result.current.isCheck}
        disabled={false}
      />,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeDisabled();
  });

  test('<Checkbox /> 의 checked가 checked 이면 선택된 상태이다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('<Checkbox /> 의 checked가 intermediate 이면 선택된 상태가 아니다.', () => {
    const { result } = renderHook(() => useCheck('intermediate'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('<Checkbox /> 의 checked가 unchecked 이면 선택되지 않은 상태이다.', () => {
    const { result } = renderHook(() => useCheck('unchecked'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('<Checkbox /> 의 checked가 false 이면 선택되지 않은 상태이다.', () => {
    const { result } = renderHook(() => useCheck(false));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('<Checkbox /> 의 checked가 true 일 때 클릭하면 false 가 된다.', () => {
    const { result } = renderHook(() => useCheck(true));
    render(
      <Checkbox
        onChange={result.current.onchange}
        name="test"
        label="체크박스 라벨"
        checked={result.current.isCheck}
      />,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('<Checkbox /> 의 checked가 false 일 때 클릭하면 checked 가 된다.', () => {
    const { result } = renderHook(() => useCheck(false));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('<Checkbox /> 의 checked가 intermediate 일때 클릭하면 선택된다.', () => {
    const { result } = renderHook(() => useCheck('intermediate'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('<Checkbox /> 의 checked가 checked 일때 클릭하면 선택해제된다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('<Checkbox /> 의 checked가 unchecked 일때 클릭하면 선택된다.', () => {
    const { result } = renderHook(() => useCheck('unchecked'));
    render(<Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
