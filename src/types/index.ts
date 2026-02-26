export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year?: string;
  link?: string;
}

export interface ParallaxLayerProps {
  speed: number;
  direction?: 'vertical' | 'horizontal';
  children: React.ReactNode;
  className?: string;
}

export interface CloudLayerProps {
  size: 'small' | 'medium' | 'large';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  speed?: number;
  opacity?: number;
}

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface FloatingTextProps {
  children: React.ReactNode;
  speed: number;
  delay?: number;
  className?: string;
}
