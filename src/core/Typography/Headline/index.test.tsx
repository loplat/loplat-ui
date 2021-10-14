import React from 'react';
import { render } from '@testing-library/react';
import { Headline1, Headline2, Headline3, Headline4, Headline5 } from './index';

describe('<Headline1 />', () => {
  test('<Headline1 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline1>테스트</Headline1>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Headline2 />', () => {
  test('<Headline2 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline2>테스트</Headline2>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Headline3 />', () => {
  test('<Headline3 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline3>테스트</Headline3>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Headline4 />', () => {
  test('<Headline4 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline4>테스트</Headline4>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});

describe('<Headline5 />', () => {
  test('<Headline5 />에 텍스트가 나오는가?', () => {
    const { getByText } = render(<Headline5>테스트</Headline5>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
