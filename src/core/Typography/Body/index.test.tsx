import React from 'react';
import { render } from '@testing-library/react';
import { Body } from './index';

describe('<Body />', () => {
  test('<Body />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body>테스트</Body>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
