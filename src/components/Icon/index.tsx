import React from 'react';
import {Icon} from '@ui-kitten/components';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  name: string;
}

export const CustomIcon = ({
  width = 32,
  height = 32,
  fill = '#FFFFFF',
  name,
}: IconProps) => {
  return (
    <Icon
      style={{
        width,
        height,
      }}
      fill={fill}
      name={name}
    />
  );
};
