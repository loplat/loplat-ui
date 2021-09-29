import React, { useState, useCallback } from 'react';
import { fireEvent, render } from '@testing-library/react';
import RadioButton from './index';
import { renderHook, act } from '@testing-library/react-hooks';

const useSelect = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const setSelected = useCallback((x) => setValue(x), []);
  return { selected: value, setSelected };
};

describe('<RadioButton />', () => {
  test('<RadioButton />를 누르면 체크표시가 활성화된다.', () => {
    const { result } = renderHook(() => useSelect(''));
    const { getByLabelText } = render(
      <RadioButton
        selected={result.current.selected}
        value={'test'}
        onChange={(current) => {
          act(() => {
            result.current.setSelected(current);
          });
        }}
        name={'test'}
      >
        테스트
      </RadioButton>,
    );
    const radio = getByLabelText('테스트');
    expect(radio).not.toBeChecked();
  });

  test('disabled 된 <RadioButton />를 누르면 체크표시가 활성화되지 않는다.', () => {
    const { result } = renderHook(() => useSelect(''));
    const { getByLabelText } = render(
      <RadioButton
        selected={result.current.selected}
        value={'test'}
        disabled
        onChange={(current) => {
          act(() => {
            result.current.setSelected(current);
          });
        }}
        name={'test'}
      >
        테스트
      </RadioButton>,
    );
    const radio = getByLabelText('테스트');
    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).not.toBeChecked();
  });
});
