import { TabList } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof TabList>): ComponentStory<typeof TabList> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');

    // click tab
    await sleep(1000);
    userEvent.click(tabs[2]);
    expect(tabs[2].ariaSelected).toBe('true');

    // click disabled tab
    await sleep(500);
    userEvent.click(tabs[1]);
    expect(tabs[1].ariaSelected).toBe('false');

    // keydown arrow & enter
    await sleep(500);
    userEvent.keyboard('{arrowright}');
    expect(tabs[3]).toHaveFocus();
    expect(tabs[3].ariaSelected).toBe('false');
    userEvent.keyboard('{enter}');
    expect(tabs[3].ariaSelected).toBe('true');

    // keydown arrow & space
    await sleep(500);
    userEvent.keyboard('{arrowright}{space}');
    expect(tabs[0].ariaSelected).toBe('true');

    // focusout
    await sleep(500);
    userEvent.click(canvasElement);
    expect(tabs[0]).not.toHaveFocus();
  };

  return story;
}
