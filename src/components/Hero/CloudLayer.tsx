import { FC, CSSProperties } from 'react';
import { CloudLayerProps } from '../../types';
import ParallaxLayer from '../ParallaxLayers/ParallaxLayer';
import styles from './Hero.module.css';

const CloudLayer: FC<CloudLayerProps> = ({
  size,
  position,
  speed = 0.1,
  opacity = 0.7,
}) => {
  const sizeClass =
    size === 'small'
      ? styles.cloudSmall
      : size === 'medium'
      ? styles.cloudMedium
      : styles.cloudLarge;

  const cloudStyle: CSSProperties = {
    ...position,
    opacity,
  };

  return (
    <ParallaxLayer speed={speed}>
      <div className={`${styles.cloudShape} ${sizeClass}`} style={cloudStyle} />
    </ParallaxLayer>
  );
};

export default CloudLayer;
