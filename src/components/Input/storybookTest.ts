import { Input } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof Input>): ComponentStory<typeof Input> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // placeholder
    expect(input).toEqual(canvas.getByPlaceholderText('값을 입력해주세요'));

    await sleep(500);

    // type input (20자 이하)
    await userEvent.type(input, 'the quick brown fox', {
      delay: 50,
    });
    // 에러 상태가 아님
    expect(canvas.queryByRole('alert')).toBeNull();

    await sleep(500);

    // type input (20자 초과)
    await userEvent.type(input, ' jumps over the lazy dog.', {
      delay: 50,
    });
    // 에러 상태
    expect(canvas.queryByRole('alert')).toBeVisible();

    await sleep(500);

    // 초기화
    await userEvent.clear(input);
  };

  return story;
}
