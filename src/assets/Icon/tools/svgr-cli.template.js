function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  const IconComponentName = componentName.name.slice(3);

  return typeScriptTpl.ast`
    import React, { useMemo } from 'react';
    import type { IconProps } from '../index';
    
    export const ${IconComponentName} = React.memo<IconProps>(({size = 18, fillColor = '#9DAAB7', className, style}) => {
      const uniqueId = useMemo(() => String(Math.random().toString(36).substr(2, 9)), []);
      return ${jsx}
    })
  `;
}

module.exports = defaultTemplate;
