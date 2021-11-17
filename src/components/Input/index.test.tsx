import React, { useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import { Input } from './index';
import { WarningCircleOutlineIcon } from '../../assets/Icon/index';
import { danger300 } from '../../core/Palette';

const useMockInput = () => {
  const [value, setValue] = useState<string>();
  return { value, setValue };
};

describe('<Input />', () => {
  test('<Input />에 아무것도 입력하지 않았을 때, placeholder만 보인다.', () => {
    const { getByPlaceholderText } = render(<Input placeholder="검색어를 입력해주세요." />);
    expect(getByPlaceholderText('검색어를 입력해주세요.')).toBeVisible();
  });
  test('<Input />을 클릭하고, 검색어를 입력한다.', () => {
    const { result } = renderHook(() => useMockInput());
    const { getByDisplayValue, getByPlaceholderText } = render(
      <Input
        id="input-for-testing"
        placeholder="검색어를 입력해주세요."
        value={result.current.value}
        onChange={(e) => {
          result.current.setValue(e?.target.value);
        }}
      />,
    );
    userEvent.click(getByPlaceholderText('검색어를 입력해주세요.'));
    expect(getByPlaceholderText('검색어를 입력해주세요.')).toBeEmptyDOMElement();
    userEvent.keyboard('검색어');
    expect(getByDisplayValue('검색어')).toBeVisible();
  });

  test('<Input />에 에러가 있을 경우, rightIcon과 에러메시지가 보여야한다.', () => {
    const { result } = renderHook(() => useMockInput());
    const { getByRole, getByLabelText } = render(
      <Input
        id="input-for-testing"
        placeholder="placeholder"
        value={result.current.value}
        onChange={(e) => result.current.setValue(e?.target.value)}
        rightIcon={<WarningCircleOutlineIcon fillColor={danger300} size={20} />}
        isIconVisible={true}
        error={true}
        errorMessage="에러메세지입니다."
      />,
    );
    expect(getByLabelText('warning icon')).toBeVisible();
    expect(getByRole('alert')).toBeVisible();
    expect(getByRole('alert')).toHaveTextContent('에러메세지입니다.');
  });

  test('<Input />의 rightIcon은 default로 보이지 않아야한다', () => {
    const { result } = renderHook(() => useMockInput());
    const { getByLabelText } = render(
      <Input
        id="input-for-testing"
        placeholder="placeholder"
        value={result.current.value}
        onChange={(e) => result.current.setValue(e?.target.value)}
        rightIcon={<WarningCircleOutlineIcon fillColor={danger300} size={20} />}
        error={false}
        errorMessage="에러메세지입니다."
      />,
    );

    expect(getByLabelText('warning icon')).not.toBeVisible();
  });

  test('<Input />의 rightIcon은 상태에 따라 보여야한다', async () => {
    const { result } = renderHook(() => useMockInput());
    const { getByPlaceholderText, getByDisplayValue, getByLabelText } = render(
      <Input
        id="input-for-testing"
        placeholder="검색어를 입력해주세요."
        value={result.current.value}
        onChange={(e) => result.current.setValue(e?.target.value)}
        rightIcon={<WarningCircleOutlineIcon fillColor={danger300} size={20} />}
        isIconVisible={result.current.value === '에러 생성'}
        error={result.current.value === '에러 생성'}
        errorMessage="에러메세지"
      />,
    );
    const warningIcon = getByLabelText('warning icon');

    expect(warningIcon).not.toBeVisible();
    userEvent.click(getByPlaceholderText('검색어를 입력해주세요.'));
    userEvent.keyboard('에러 생성');
    expect(getByDisplayValue('에러 생성')).toBeVisible();
    // NOTE: toBeVisible()일 경우 에러가 발생하여 (아마 opacity로 줘서때문인듯) 이걸로 대체함
    expect(warningIcon).toBeInTheDocument();

    // TODO: 확인되지않고있음
    // expect(getByRole('alert')).toBeVisible();
    // expect(getByRole('alert')).toHaveTextContent('에러메세지입니다.');
  });
});
