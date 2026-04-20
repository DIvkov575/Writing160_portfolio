import { FC } from 'react';
import styles from './FloatingAirplane.module.css';

interface FloatingAirplaneProps {
  size?: 'small' | 'medium' | 'large';
  speed?: 'slow' | 'medium' | 'fast';
  position?: 'top' | 'middle' | 'bottom';
  delay?: number;
  color?: string;
}

const FloatingAirplane: FC<FloatingAirplaneProps> = ({
  size = 'medium',
  speed = 'medium',
  position = 'top',
  delay = 0,
  color = '#C8E0EE',
}) => {
  const sizeClass = size === 'small' ? styles.small : size === 'large' ? styles.large : '';
  const speedClass = speed === 'slow' ? styles.slow : speed === 'fast' ? styles.fast : '';
  const positionClass = styles[position];

  return (
    <div className={`${styles.airplaneContainer} ${speedClass} ${positionClass} ${sizeClass}`}>
      <div className={styles.mover} style={{ animationDelay: `${delay}s` }}>
      {/* Boeing 737-400 silhouette, top-down view, CC-BY-SA 4.0, Peter Lowden */}
      <svg
        viewBox="0 0 64 64"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={styles.airplaneSvg}
        style={{ transform: 'rotate(270deg)' }}
      >
        <g transform="matrix(1,0,0,-1,0,64)">
          <path d="m 32,2.3 0.3,0.1 0.8,1.2 0.9,3.1 0.6,3.1 0.5,5.2 0,8.6 3.6,2.7 -0.2,-1.5 0,-1.5 0.1,-1.2 0.2,-0.4 2.8,0 0.2,0.4 0.1,1.2 0,1.5 -0.4,2.2 -0.3,0 -0.1,0.9 14,7.7 0.4,0.4 0.2,0.7 0,1.5 -8.3,-2.4 -0.1,0.4 -0.2,0.2 -0.2,-0.2 -0.1,-0.5 -3.7,-1.1 -0.1,0.4 -0.2,0.2 -0.2,-0.2 -0.1,-0.5 -2,-0.6 0,1 -0.1,0.5 -0.1,0.1 -0.4,0 -0.1,-0.1 -0.1,-0.5 0,-1.3 -4.6,0 0,10.5 -0.1,2.8 -0.6,3.7 -0.6,3 0.1,0.4 8.5,5.9 0,1.8 -10,-2.5 -0.2,0.7 -0.1,0.8 -0.1,0.4 -0.1,-0.4 -0.1,-0.8 -0.2,-0.7 -10,2.5 0,-1.8 8.5,-5.9 0.1,-0.4 -0.6,-3 -0.6,-3.7 -0.1,-2.8 0,-10.5 -4.6,0 0,1.3 -0.1,0.5 -0.1,0.1 -0.4,0 -0.1,-0.1 -0.1,-0.5 0,-1 -2,0.6 -0.1,0.5 -0.2,0.2 -0.2,-0.2 -0.1,-0.4 -3.7,1.1 -0.1,0.5 -0.2,0.2 -0.2,-0.2 -0.1,-0.4 -8.3,2.4 0,-1.5 0.2,-0.7 0.4,-0.4 14,-7.7 -0.1,-0.9 -0.3,0 -0.4,-2.2 0,-1.5 0.1,-1.2 0.2,-0.4 2.8,0 0.2,0.4 0.1,1.6 0,1.1 -0.2,1.5 3.6,-2.8 0,-8.5 0.5,-5.2 0.6,-3.1 1,-3.1 0.7,-1.2 z" />
        </g>
      </svg>
      </div>
    </div>
  );
};

export default FloatingAirplane;
