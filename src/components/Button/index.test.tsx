import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  test('라벨이 제대로 나오는 지', () => {
    const { getByText } = render(<Button label="테스트" />);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
