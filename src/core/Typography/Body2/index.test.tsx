import React from 'react';
import { render } from '@testing-library/react';
import Body2 from './index';

describe('<Body2 />', () => {
  test('<Body2 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body2>테스트</Body2>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
