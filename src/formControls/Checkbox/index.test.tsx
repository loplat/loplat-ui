import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Checkbox } from './index';

const label = '체크박스 라벨';

type Checked = boolean | 'checked' | 'unchecked' | 'intermediate';
const useCheck = (initial: Checked) => {
  const [isCheck, setIsChecked] = useState<Checked>(initial);
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };
  return { isCheck, onchange };
};

describe('<Checkbox />', () => {
  test('<Checkbox /> 의 라벨이 원하는대로 정확하게 나온다.', () => {
    const { result } = renderHook(() => useCheck(false));
    const { getByText, getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const wrapper = getByTestId('wrapper');
    const labelComponent = getByText(label);

    expect(wrapper).toBeVisible();
    expect(wrapper).toContainElement(labelComponent);

    expect(labelComponent).toContainHTML('input');
    expect(labelComponent).toContainHTML('<span />');

    expect(labelComponent).toHaveTextContent(label);
    expect(labelComponent.outerHTML).toContain(label);
  });

  test('<Checkbox /> 의 disabled가 잘 작동된다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    const { getByTestId } = render(
      <Checkbox
        onChange={result.current.onchange}
        name="test"
        label={label}
        checked={result.current.isCheck}
        disabled={true}
      />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  test('<Checkbox /> 의 disabled이 false 일때 disabled 상태가 아니다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    const { getByTestId } = render(
      <Checkbox
        onChange={result.current.onchange}
        name="test"
        label={label}
        checked={result.current.isCheck}
        disabled={false}
      />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeEnabled();
  });

  test('<Checkbox /> 의 checked가 checked 이면 선택된 상태이다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('<Checkbox /> 의 checked가 intermediate 이어도 선택된 상태이다.', () => {
    const { result } = renderHook(() => useCheck('intermediate'));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('<Checkbox /> 의 checked가 unchecked 이면 선택되지 않은 상태이다.', () => {
    const { result } = renderHook(() => useCheck('unchecked'));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('<Checkbox /> 의 checked가 false 이면 선택되지 않은 상태이다.', () => {
    const { result } = renderHook(() => useCheck(false));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  // TODO: 이하 userEvent 이후 checkbox 자체의 toBeChecked / not.toBeChecked()로는 확인할수가 없다.
  test('<Checkbox /> 의 checked가 true 일 때 클릭하면 false 가 된다.', () => {
    const { result } = renderHook(() => useCheck(true));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(result.current.isCheck).toBeFalsy();
  });
  test('<Checkbox /> 의 checked가 false 일 때 클릭하면 true 가 된다.', () => {
    const { result } = renderHook(() => useCheck(false));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(result.current.isCheck).toBeTruthy();
  });
  test('<Checkbox /> 의 checked가 intermediate 일때 클릭하면 선택해제된다.', () => {
    const { result } = renderHook(() => useCheck('intermediate'));
    const { getByLabelText } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const box = getByLabelText(label);

    expect(box).toBeChecked();
    fireEvent.click(box);
    expect(result.current.isCheck).toBeFalsy();
  });
  test('<Checkbox /> 의 checked가 checked 일때 클릭하면 선택해제된다.', () => {
    const { result } = renderHook(() => useCheck('checked'));
    const { getByLabelText } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const box = getByLabelText(label);

    expect(box).toBeChecked();
    fireEvent.click(box);
    expect(result.current.isCheck).toBeFalsy();
  });
  test('<Checkbox /> 의 checked가 unchecked 일때 클릭하면 선택된다.', () => {
    const { result } = renderHook(() => useCheck('unchecked'));
    const { getByTestId } = render(
      <Checkbox onChange={result.current.onchange} name="test" label={label} checked={result.current.isCheck} />,
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(result.current.isCheck).toBeTruthy();
  });
});
