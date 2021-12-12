import React from 'react';
import { render } from '@testing-library/react';
import { Caption } from './index';

describe('<Caption />', () => {
  test('<Caption />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Caption>테스트</Caption>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
