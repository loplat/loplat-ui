import React from 'react';
import { render } from '@testing-library/react';
import { Headline } from './index';

describe('<Headline />', () => {
  test('<Headline />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline>테스트</Headline>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
