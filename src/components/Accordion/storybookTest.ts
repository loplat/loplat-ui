import { Accordion, AccordionGroup } from './index';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../../functions/delay';

export function runTest(story: ComponentStory<typeof Accordion>): ComponentStory<typeof Accordion> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole('button');
    const content = canvas.getByTestId('loplat-ui_accordion_content');

    expect(content).not.toBeVisible();
    expect(content).toHaveStyle({ height: 0 });

    userEvent.click(title);
    await sleep(600);
    expect(content).not.toHaveStyle({ height: 0 });
    expect(content).toBeVisible();

    userEvent.click(title);
    await sleep(600);
    expect(content).toHaveStyle({ height: 0 });
    expect(content).not.toBeVisible();
  };

  return story;
}

export function runTestGroup(story: ComponentStory<typeof AccordionGroup>): ComponentStory<typeof AccordionGroup> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const titles = canvas.getAllByRole('button');
    const contents = canvas.getAllByTestId('loplat-ui_accordion_content');

    expect(titles).toHaveLength(4);

    expect(contents[2]).toHaveStyle({ height: 0 });
    expect(contents[2]).not.toBeVisible();

    userEvent.click(titles[2]);
    await sleep(600);
    expect(contents[2]).toBeVisible();
    expect(contents[2]).not.toHaveStyle({ height: 0 });

    userEvent.click(titles[3]);
    await sleep(600);
    expect(contents[2]).not.toBeVisible();
    expect(contents[2]).toHaveStyle({ height: 0 });
    expect(contents[3]).toBeVisible();
    expect(contents[3]).not.toHaveStyle({ height: 0 });

    userEvent.click(titles[3]);
    await sleep(600);
    expect(contents[2]).not.toBeVisible();
    expect(contents[3]).not.toBeVisible();
  };

  return story;
}
