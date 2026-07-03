import React from 'react';

export type MosaicTileStyle = React.CSSProperties & {
  '--tile-color'?: string;
  '--tile-delay'?: string;
};

export function getMosaicTileColorStyle(color: string): MosaicTileStyle {
  return {
    '--tile-color': color,
  };
}
