import React from 'react';
import { render } from '@testing-library/react';
import { Help } from './index';

describe('<Help />', () => {
  test('<Help />에 title과 text가 나온다.', () => {
    const { getByTestId } = render(<Help title="title" text="text" />);
    expect(getByTestId('help-title')).toHaveTextContent('title');
    expect(getByTestId('help-text')).toHaveTextContent('text');
  });

  test('<Help />에 text만 나온다.', () => {
    const { getByText } = render(<Help text="text" />);
    const label = getByText('text');
    expect(label).toBeInTheDocument();
  });
});
