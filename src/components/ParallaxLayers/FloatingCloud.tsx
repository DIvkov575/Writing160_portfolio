import { FC } from 'react';
import styles from './FloatingCloud.module.css';

interface FloatingCloudProps {
  size?: 'small' | 'medium' | 'large';
  speed?: 'slow' | 'medium' | 'fast';
  position?: 'top' | 'middle' | 'bottom';
  delay?: number;
  color?: string;
}

const FloatingCloud: FC<FloatingCloudProps> = ({
  size = 'medium',
  speed = 'medium',
  position = 'middle',
  delay = 0,
  color = '#E8F4F8',
}) => {
  const sizeClass = size === 'small' ? styles.small : size === 'large' ? styles.large : '';
  const speedClass = speed === 'slow' ? styles.slow : speed === 'fast' ? styles.fast : '';
  const positionClass = styles[position];

  return (
    <div className={`${styles.cloudContainer} ${speedClass} ${positionClass}`}>
      <div className={styles.mover} style={{ animationDelay: `${delay}s` }}>
      <svg
        className={`${styles.cloudSvg} ${sizeClass}`}
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main cloud body */}
        <ellipse cx="250" cy="180" rx="180" ry="100" fill={color} opacity="0.9" />

        {/* Left puff */}
        <ellipse cx="150" cy="200" rx="120" ry="80" fill={color} opacity="0.85" />

        {/* Right puff */}
        <ellipse cx="350" cy="200" rx="130" ry="90" fill={color} opacity="0.85" />

        {/* Top bumps for cloud detail */}
        <ellipse cx="200" cy="140" rx="90" ry="70" fill={color} opacity="0.95" />
        <ellipse cx="300" cy="130" rx="100" ry="75" fill={color} opacity="0.95" />
        <ellipse cx="250" cy="120" rx="80" ry="65" fill={color} opacity="0.9" />

        {/* Extra small details */}
        <ellipse cx="180" cy="160" rx="60" ry="50" fill={color} opacity="0.8" />
        <ellipse cx="320" cy="155" rx="65" ry="55" fill={color} opacity="0.8" />

        {/* Soft glow effect */}
        <ellipse cx="250" cy="180" rx="180" ry="100" fill="white" opacity="0.3" />
      </svg>
      </div>
    </div>
  );
};

export default FloatingCloud;
