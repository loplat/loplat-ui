/* eslint-disable */
function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  const IconComponentName = componentName.name.slice(3);

  return typeScriptTpl.ast`
    import React from 'react';
    import type { LogoProps } from '../index';
    
    export const ${IconComponentName} = React.memo<LogoProps>(({width = 18, className, style}) => (
      ${jsx}
    ));
  `;
}

module.exports = defaultTemplate;
