import { Dropdown } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, screen, within } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof Dropdown>): ComponentStory<typeof Dropdown> {
  const options = ['loplat X', 'loplat i', 'WPS', 'IPS'];
  const delay = 500;

  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const bar = canvas.getByRole('button');

    // click bar & menu
    userEvent.click(bar);
    const menus = screen.getAllByRole('option');
    await sleep(delay);
    userEvent.click(menus[3]);
    expect(bar.textContent).toBe(options[3]);

    // keyboard interactions
    await sleep(delay);
    userEvent.tab();
    userEvent.keyboard('{space}');
    expect(bar.ariaExpanded).toBe('true');

    await sleep(delay);
    userEvent.keyboard('{arrowup}{arrowup}{arrowup}{enter}');
    expect(bar.textContent).toBe(options[0]);
    expect(bar.ariaExpanded).toBe('false');

    userEvent.keyboard('{enter}');
    expect(bar.ariaExpanded).toBe('true');
    userEvent.keyboard('{escape}');
    expect(bar.ariaExpanded).toBe('false');

    userEvent.click(canvasElement);
  };

  return story;
}
