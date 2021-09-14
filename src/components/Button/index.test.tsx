import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { Alert } from '../../assets/Icon/generated/Alert';

describe('<Button />', () => {
  test('Default <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('Primary1 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button color="primary1">테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('Primary2 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button color={'primary2'}>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('Danger1 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button color={'danger1'}>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('Danger2 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button color={'danger2'}>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('Solid <Button />에 텍스트가 나온다', () => {
    const { getByText } = render(<Button color={'danger2'}>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('LeftIcon 이 있는 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button leftIcon={<Alert />}>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('RightIcon 이 있는 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(<Button rightIcon={<Alert />}>테스트</Button>);
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });

  test('LeftIcon과 RightIcon 이 있는 <Button />에 텍스트가 나온다.', () => {
    const { getByText } = render(
      <Button leftIcon={<Alert />} rightIcon={<Alert />}>
        테스트
      </Button>,
    );
    const label = getByText('테스트');
    expect(label).toBeInTheDocument();
  });
});
