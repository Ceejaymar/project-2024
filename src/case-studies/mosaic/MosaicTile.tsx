import React from 'react';
import styles from './MosaicTile.module.css';

const MOSAIC_TILE_LAYOUTS = ['one', 'two', 'three', 'four'] as const;

type MosaicTileLayout = (typeof MOSAIC_TILE_LAYOUTS)[number];
type MosaicTileVariant = 'hero-calendar' | 'progression';

type MosaicTileStyle = React.CSSProperties & {
  '--tile-color'?: string;
  '--tile-delay'?: string;
};

type MosaicTileProps = {
  colors: readonly string[];
  variant: MosaicTileVariant;
  delay?: string;
};

function getMosaicTileLayout(colors: readonly string[]): MosaicTileLayout {
  const layout = MOSAIC_TILE_LAYOUTS[colors.length - 1];

  if (!layout) {
    throw new Error('MosaicTile expects one to four colors.');
  }

  return layout;
}

function getTileStyle(delay?: string): MosaicTileStyle | undefined {
  if (!delay) {
    return undefined;
  }

  return {
    '--tile-delay': delay,
  };
}

function getSegmentStyle(color: string): MosaicTileStyle {
  return {
    '--tile-color': color,
  };
}

export default function MosaicTile({
  colors,
  variant,
  delay,
}: MosaicTileProps) {
  return (
    <span
      className={styles.tile}
      data-layout={getMosaicTileLayout(colors)}
      data-variant={variant}
      style={getTileStyle(delay)}
    >
      {colors.map((color, index) => (
        <span
          className={styles.segment}
          key={`${color}-${index}`}
          style={getSegmentStyle(color)}
        />
      ))}
    </span>
  );
}
