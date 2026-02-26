import { FC, CSSProperties } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { ParallaxLayerProps } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';

const ParallaxLayer: FC<ParallaxLayerProps> = ({
  speed,
  direction = 'vertical',
  children,
  className = '',
}) => {
  const scrollPosition = useScrollPosition();
  const isMobile = useIsMobile();

  // Reduce parallax effect on mobile for better performance
  const adjustedSpeed = isMobile ? speed * 0.3 : speed;

  const transform =
    direction === 'vertical'
      ? `translateY(${scrollPosition.y * adjustedSpeed}px)`
      : `translateX(${scrollPosition.x * adjustedSpeed}px)`;

  const style: CSSProperties = {
    transform,
    willChange: 'transform',
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default ParallaxLayer;
