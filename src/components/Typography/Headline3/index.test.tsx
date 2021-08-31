import React from 'react';
import { render } from '@testing-library/react';
import Headline3 from './index';

describe('<Headline3 />', () => {
  test('<Headline3 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline3>테스트</Headline3>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
