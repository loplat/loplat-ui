function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  const IconComponentName = componentName.name.slice(3);

  return typeScriptTpl.ast`
    import React, { useMemo } from 'react';
    import type { IconProps } from '../index';
    
    export const ${IconComponentName} = React.memo<IconProps>(({size = 18, fillColor = '#9DAAB7', suffixForId, className, style}) => {
      const uniqueId = useMemo(() => suffixForId ?? String(Math.random().toString(36).slice(2, 11)), [suffixForId]);
      return ${jsx}
    })
  `;
}

module.exports = defaultTemplate;
