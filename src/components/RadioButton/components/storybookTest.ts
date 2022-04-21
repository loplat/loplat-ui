import { RadioButtonGroup } from '..';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(story: ComponentStory<typeof RadioButtonGroup>): ComponentStory<typeof RadioButtonGroup> {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const availableRadioButton = canvas.getByLabelText('테스트1');
    const disabledRadioButton = canvas.getByLabelText('테스트3');

    expect(canvas.getByLabelText('테스트0')).toBeChecked();
    userEvent.click(availableRadioButton);
    expect(availableRadioButton).toBeChecked();

    userEvent.click(disabledRadioButton);
    expect(disabledRadioButton).toBeDisabled();
    expect(disabledRadioButton).not.toBeChecked();
  };

  return story;
}
