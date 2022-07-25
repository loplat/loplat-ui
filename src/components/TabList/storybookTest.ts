import { TabList } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof TabList>): ComponentStory<typeof TabList> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const options = canvas.getAllByRole('tab');

    // click tab
    await sleep(500);
    userEvent.click(options[2]);
    expect(options[2].ariaSelected).toBe('true');

    // click disabled tab
    userEvent.click(options[1]);
    expect(options[1].ariaSelected).toBe(null);

    // keydown arrow & enter
    await sleep(500);
    userEvent.keyboard('{arrowright}');
    expect(options[3]).toHaveFocus();
    expect(options[3].ariaSelected).toBe('false');
    userEvent.keyboard('{enter}');
    expect(options[3].ariaSelected).toBe('true');

    // keydown arrow & space
    await sleep(500);
    userEvent.keyboard('{arrowright}{space}');
    expect(options[0].ariaSelected).toBe('true');

    // focusout
    await sleep(500);
    userEvent.click(canvasElement);
    expect(options[0]).not.toHaveFocus();
  };

  return story;
}
