import { Button, ButtonProps } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(story: ComponentStory<typeof Button>): ComponentStory<typeof Button> {
  story.play = async ({ args, canvasElement }: { args: ButtonProps; canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // render children
    if (typeof args.children === 'string') {
      await expect(button).toHaveTextContent(args.children);
    }

    // click button
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
    await expect(button).toHaveFocus();

    // click outside
    await userEvent.click(canvasElement);
    await expect(button).not.toHaveFocus();
  };

  return story;
}
