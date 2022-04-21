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

export function runGroupTest(story: ComponentStory<typeof Checkbox>): ComponentStory<typeof Checkbox> {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkFalse = canvas.getByLabelText('false');
    const checkTrue = canvas.getByLabelText('true');
    const checked = canvas.getByLabelText('checked');
    const unchecked = canvas.getByLabelText('unchecked');
    const intermediate = canvas.getByLabelText('intermediate');
    const disabled = canvas.getAllByLabelText(/disabled/i);

    expect(disabled[0]).toBeDisabled();

    userEvent.click(checkFalse);
    expect(checkFalse).toBeChecked();

    userEvent.click(checkTrue);
    expect(checkTrue).not.toBeChecked();

    expect(checked).toBeChecked();
    userEvent.click(checked);
    expect(checked).not.toBeChecked();

    expect(unchecked).not.toBeChecked();
    userEvent.click(unchecked);
    expect(unchecked).toBeChecked();

    expect(intermediate).not.toBeChecked();
    userEvent.click(intermediate);
    expect(intermediate).toBeChecked();
  };
  return story;
}
