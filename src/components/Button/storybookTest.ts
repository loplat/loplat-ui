import { Button } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(story: ComponentStory<typeof Button>): ComponentStory<typeof Button> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // render children
    if (typeof args.children === 'string') {
      expect(button).toHaveTextContent(args.children);
    }

    // click button
    userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();

    // click outside
    userEvent.click(canvasElement);
    expect(button).not.toHaveFocus();
  };

  return story;
}
