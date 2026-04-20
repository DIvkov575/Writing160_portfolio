import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const FloatingElementsContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const [container] = useState(() => {
    const div = document.createElement('div');
    div.style.cssText = [
      'position:fixed',
      'top:0',
      'left:0',
      'width:100%',
      'height:100%',
      'pointer-events:none',
      'z-index:5',
      'overflow:visible',
    ].join(';');
    return div;
  });

  useEffect(() => {
    document.documentElement.appendChild(container);
    return () => {
      document.documentElement.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default FloatingElementsContainer;
