import { Accordion } from './index';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(story: ComponentStory<typeof Accordion>): ComponentStory<typeof Accordion> {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole('heading');
    const content = canvas.getByRole('region');

    expect(content).not.toBeVisible();
    userEvent.click(title);
    expect(content).toBeVisible();
  };

  return story;
}
