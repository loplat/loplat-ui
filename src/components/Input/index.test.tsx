import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import { Input } from './index';
import React, { useState } from 'react';

const useMockInput = () => {
  const [value, setValue] = useState<string>();
  return { value, setValue };
};

describe('<Input />', () => {
  test('<Input />에 아무것도 입력하지 않았을 때, placeholder만 보인다.', () => {
    const { getByPlaceholderText } = render(<Input placeholder={'검색어를 입력해주세요.'} />);
    expect(getByPlaceholderText('검색어를 입력해주세요.')).toBeInTheDocument();
  });
  test('<Input />을 클릭하고, 검색어를 입력한다.', () => {
    const { result } = renderHook(() => useMockInput());
    const { getByDisplayValue, getByPlaceholderText } = render(
      <Input
        id="input-for-testing"
        placeholder={'검색어를 입력해주세요.'}
        value={result.current.value}
        onChange={(e) => {
          result.current.setValue(e?.target.value);
        }}
      />,
    );
    userEvent.click(getByPlaceholderText('검색어를 입력해주세요.'));
    expect(getByPlaceholderText('검색어를 입력해주세요.')).toBeEmptyDOMElement();
    userEvent.keyboard('검색어');
    expect(getByDisplayValue('검색어')).toBeInTheDocument();
  });
});
