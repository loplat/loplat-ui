import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { Accordion, DEFAULT_DURATION } from './index';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof Accordion>): ComponentStory<typeof Accordion> {
  story.play = async ({ args, canvasElement }) => {
    const duration = args.duration ?? DEFAULT_DURATION;
    const canvas = within(canvasElement);

    const details = canvasElement.querySelector('details') as HTMLDetailsElement;
    const title = canvasElement.querySelector('summary') as HTMLDivElement;
    const body = canvas.getByRole('region');

    expect(body).not.toBeVisible();

    userEvent.click(title);
    expect(details).toHaveProperty('open');
    await sleep(duration + 200);
    expect(body).toBeVisible();

    // body를 클릭하면 토글되지 않음
    userEvent.click(body);
    await sleep(duration);
    expect(body).toBeVisible();

    // title을 클릭하면 접힘
    userEvent.click(title);
    expect(body).toBeVisible();
    await sleep(duration - 200);
    expect(body).toBeVisible();
    expect(details).toHaveProperty('open');
    await sleep(duration + 100);
    expect(body).not.toBeVisible();
  };

  return story;
}
