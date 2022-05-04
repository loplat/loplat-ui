import React, { ChangeEvent, useState, useCallback } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './index';
import { WarningCircleOutlineIcon } from '../../assets/Icon/index';
import { danger } from '../../core/styles/palette';

const TestInput = () => {
  const [value, setValue] = useState<string>('');
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value), []);

  return (
    <Input
      id="input-for-testing"
      placeholder="검색어를 입력해주세요."
      value={value}
      onChange={onChange}
      rightIcon={<WarningCircleOutlineIcon fillColor={danger} size={20} />}
      isIconVisible={value === '에러 생성'}
      error={value === '에러 생성'}
      errorMessage="에러메세지"
    />
  );
};

describe('<Input />', () => {
  test('<Input />에 아무것도 입력하지 않았을 때, placeholder만 보인다.', () => {
    render(<TestInput />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByPlaceholderText('검색어를 입력해주세요.')).toBeVisible();
  });
  test('<Input />을 클릭하고, 검색어를 입력한다.', () => {
    render(<TestInput />);

    const inputValue = '검색어';
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    userEvent.click(input);
    expect(input).toHaveFocus();

    userEvent.type(input, inputValue);
    expect(input).toHaveValue(inputValue);
  });

  test('<Input />의 rightIcon과 에러메세지는 상태에 따라 보여야한다', async () => {
    render(<TestInput />);
    const error = '에러 생성';
    const rightIcon = screen.getByTestId('loplat-ui__rightIcon');

    expect(rightIcon).not.toBeVisible();

    // 에러 발생
    userEvent.type(screen.getByRole('textbox'), error);

    expect(screen.getByRole('textbox')).toHaveValue(error);
    expect(screen.getByDisplayValue(error)).toBeVisible();

    const errorInline = screen.getByRole('alert');

    expect(rightIcon).toBeVisible();
    expect(errorInline).toBeVisible();
    expect(errorInline).toHaveTextContent('에러메세지');
  });
});
