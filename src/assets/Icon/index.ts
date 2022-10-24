import React from 'react';
import { MarginSpacing } from '@Core/Spacing';

export type IconProps = {
  size?: number;
  fillColor?: string;
  suffixForId?: string;
} & MarginSpacing &
  React.SVGAttributes<SVGElement>;

export * from './export.generated';
