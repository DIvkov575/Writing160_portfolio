import { FC, useEffect, useState } from 'react';

const ScrollProgress: FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setProgress(progress);
    };

    calculateProgress();
    window.addEventListener('scroll', calculateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', calculateProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, var(--sky-blue-medium), var(--sky-blue-deep))',
          transition: 'width 0.1s ease',
          boxShadow: '0 0 10px var(--sky-blue-medium)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
