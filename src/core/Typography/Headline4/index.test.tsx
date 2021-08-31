import React from 'react';
import { render } from '@testing-library/react';
import Headline4 from './index';

describe('<Headline4 />', () => {
  test('<Headline4 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline4>테스트</Headline4>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
