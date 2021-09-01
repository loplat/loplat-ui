import React from 'react';
import { render } from '@testing-library/react';
import { Caption1, Caption2 } from './index';

describe('<Caption1 />', () => {
  test('<Caption1 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Caption1>테스트</Caption1>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Caption2 />', () => {
  test('<Caption2 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Caption2>테스트</Caption2>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
