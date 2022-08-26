import { useState, useEffect } from 'react';

const initialSize = {
  width: 0,
  height: 0,
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(initialSize);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
