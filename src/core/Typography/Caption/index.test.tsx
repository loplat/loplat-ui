import React from 'react';
import { render } from '@testing-library/react';
import { Caption1 } from './index';

describe('<Caption1 />', () => {
  test('<Caption1 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Caption1>테스트</Caption1>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
