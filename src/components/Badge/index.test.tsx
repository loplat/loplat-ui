import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './index';

describe('<Badge />', () => {
  test('<Badge />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Badge text="테스트" />);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
