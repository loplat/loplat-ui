import React from 'react';
import { render } from '@testing-library/react';
import { Body1, Body2, Body3, Body4 } from './index';

describe('<Body1 />', () => {
  test('<Body1 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body1>테스트</Body1>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Body2 />', () => {
  test('<Body2 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body2>테스트</Body2>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Body3 />', () => {
  test('<Body3 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body3>테스트</Body3>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Body4 />', () => {
  test('<Body4 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Body4>테스트</Body4>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
