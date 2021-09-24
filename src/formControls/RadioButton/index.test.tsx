import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RadioButton from './index';

describe('<RadioButton />', () => {
  test('<RadioButton />를 누르면 체크표시가 활성화된다.', () => {
    let selected = '';
    const { getByLabelText } = render(
      <RadioButton
        selected={selected}
        value={'test'}
        onChange={(current) => {
          selected = current;
        }}
        name={'test'}
      >
        테스트
      </RadioButton>,
    );
    const radio = getByLabelText('테스트');
    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });

  test('disabled 된 <RadioButton />를 누르면 체크표시가 활성화되지 않는다.', () => {
    let selected = '';
    const { getByLabelText } = render(
      <RadioButton
        selected={selected}
        value={'test'}
        disabled
        onChange={(current) => {
          selected = current;
        }}
        name={'test'}
      >
        테스트
      </RadioButton>,
    );
    const radio = getByLabelText('테스트');
    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).not.toBeChecked();
  });
});
