import { Tooltip } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, screen, waitForElementToBeRemoved } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof Tooltip>): ComponentStory<typeof Tooltip> {
  const testTooltip = async (horizontalPosition: 'left' | 'center' | 'right') => {
    // hover tooltip
    const tooltip = screen.getByTestId(`loplat-ui__${horizontalPosition}-tooltip`);
    userEvent.hover(tooltip);
    await sleep(800);

    // test popper
    const popper = screen.getByTestId('loplat-ui__popper');
    expect(popper).toBeInTheDocument();

    // unhover tooltip
    userEvent.unhover(tooltip);
    await waitForElementToBeRemoved(popper);

    // test popper
    expect(popper).not.toBeInTheDocument();
  };

  story.play = async () => {
    await testTooltip('left');
    await testTooltip('center');
    await testTooltip('right');
  };

  return story;
}
