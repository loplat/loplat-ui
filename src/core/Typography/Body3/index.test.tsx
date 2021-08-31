import React from 'react';
import { render } from '@testing-library/react';
import Body3 from './index';

describe('<Body3 />', () => {
  test('<Body3 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body3>테스트</Body3>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
