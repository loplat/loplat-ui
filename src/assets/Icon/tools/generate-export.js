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
      return `
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',border: '1px solid gray', margin: '1rem', minWidth:'4rem', minHeight:'3rem', padding: '0.5rem 1rem'}}>
          <${fileName}Icon {...props} />
          <span style={{marginTop: '0.5rem'}}>${fileName}</span>
        </div>`;
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
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      ${generateStorybook}
    </div>
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
