import { RadioButton } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { radioValues } from './index.stories';

export function runTest(story: ComponentStory<typeof RadioButton>): ComponentStory<typeof RadioButton> {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const form = canvas.getByTestId('loplat-ui__form');
    const availableRadioButton = canvas.getByLabelText(radioValues[0]);
    const disabledRadioButton = canvas.getByLabelText(radioValues[4]);

    expect(form).toHaveLength(radioValues.length);

    // click available radio button
    userEvent.click(availableRadioButton);
    expect(availableRadioButton).toBeChecked();

    // click disabled radio button
    userEvent.click(disabledRadioButton);
    expect(disabledRadioButton).toBeDisabled();
  };

  return story;
}
