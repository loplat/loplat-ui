import React from 'react';
import { render } from '@testing-library/react';
import Body4 from './index';

describe('<Body4 />', () => {
  test('<Body4 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body4>테스트</Body4>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
