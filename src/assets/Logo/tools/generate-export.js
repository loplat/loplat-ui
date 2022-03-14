/* eslint-disable */
const fs = require('fs');
const path = require('path');

const defaultPath = path.join(__dirname, '../');
const logoFiles = fs.readdirSync(path.join(defaultPath, 'generated')).filter((file) => file.includes('tsx'));

const generatedCodes = [
  logoFiles
    .map((logoFile) => {
      const fileName = logoFile.split('.')[0];
      return `export { ${fileName} as ${fileName}Logo } from './generated/${fileName}';`;
    })
    .join('\n'),
];

fs.writeFile(path.join(defaultPath, 'export.generated.ts'), generatedCodes.join('\n'), (error) => {
  if (error) {
    throw error;
  }

  console.log('export.generated.ts has been saved!');
});
