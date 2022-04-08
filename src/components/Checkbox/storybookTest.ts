import { Checkbox } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(story: ComponentStory<typeof Checkbox>): ComponentStory<typeof Checkbox> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const label = canvas.getByText(args.label);

    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    userEvent.click(label);
    expect(checkbox).not.toBeChecked();
  };

  return story;
}
