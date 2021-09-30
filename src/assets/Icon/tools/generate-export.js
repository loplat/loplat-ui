/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const defaultPath = path.join(__dirname, '../');
const iconFiles = fs.readdirSync(path.join(defaultPath, 'generated')).filter((file) => file.includes('tsx'));

const generatedCodes = [
  iconFiles
    .map((iconFile) => {
      const fileName = iconFile.split('.')[0];
      return `export { ${fileName} as ${fileName}Icon } from './generated/${fileName}';`;
    })
    .join('\n'),
];

const generateIconFilesName = [
  iconFiles
    .map((iconFile) => {
      const fileName = iconFile.split('.')[0];
      return `${fileName}Icon`;
    })
    .join(', '),
];

const generateStorybook = [
  iconFiles
    .map((iconFile) => {
      const fileName = iconFile.split('.')[0];
      return `<${fileName}Icon {...props} />`;
    })
    .join('\n'),
];

fs.writeFile(path.join(defaultPath, 'export.generated.ts'), generatedCodes.join('\n'), (error) => {
  if (error) {
    throw error;
  }

  console.log('export.generated.ts has been saved!');
});

fs.writeFile(
  path.join(defaultPath, 'index.stories.tsx'),
  `
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconProps } from './index';
import { ${generateIconFilesName} } from './index';

const IconDocument = (props: IconProps) => {
  return (
    <>
      ${generateStorybook}
    </>
  );
};

export default {
  title: 'Icon',
  component: IconDocument,
} as ComponentMeta<typeof IconDocument>;

const Template: ComponentStory<typeof IconDocument> = (args: IconProps) => <IconDocument {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 32,
  fillColor: '#000000',
};

`,
  (error) => {
    if (error) {
      throw error;
    }

    console.log('index.stories.tsx has been saved!');
  },
);
