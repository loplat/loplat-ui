import React from 'react';
import { render } from '@testing-library/react';
import Headline2 from './index';

describe('<Headline2 />', () => {
  test('<Headline2 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline2>테스트</Headline2>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
