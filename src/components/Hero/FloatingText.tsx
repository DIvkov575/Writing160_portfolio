import { FC } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { FloatingTextProps } from '../../types';

const FloatingText: FC<FloatingTextProps> = ({
  children,
  speed,
  delay = 0,
  className = '',
}) => {
  return (
    <Parallax
      speed={speed}
      opacity={[0, 1]}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className={className}>{children}</div>
    </Parallax>
  );
};

export default FloatingText;
