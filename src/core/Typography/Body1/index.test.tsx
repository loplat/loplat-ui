import React from 'react';
import { render } from '@testing-library/react';
import Body1 from './index';

describe('<Body1 />', () => {
  test('<Body1 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body1>테스트</Body1>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
