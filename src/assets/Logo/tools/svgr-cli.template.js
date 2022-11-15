/* eslint-disable */
function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  const IconComponentName = componentName.name.slice(3);

  return typeScriptTpl.ast`
    import React from 'react';
    import { LogoProps } from '../index';
    import Svg from '../../svg';
    import { marginSpacingProps } from '../../../core/Spacing'
    
    export const ${IconComponentName} = React.memo<LogoProps>(({width = 18, ...props}) => (
      ${jsx}
    ));
  `;
}

module.exports = defaultTemplate;
