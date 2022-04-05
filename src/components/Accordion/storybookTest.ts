import { Accordion } from './index';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof Accordion>): ComponentStory<typeof Accordion> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole('button');
    const content = canvas.getByTestId('loplat-ui_accordion_content');

    expect(content).toHaveStyle({ height: 0 });

    userEvent.click(title);
    await sleep(600);
    expect(content).not.toHaveStyle({ height: 0 });

    userEvent.click(title);
    await sleep(600);
    expect(content).toHaveStyle({ height: 0 });
  };

  return story;
}
