import { useEffect, useState } from 'react';
function useWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    let timeoutId: any;

    window.addEventListener('resize', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    });
  }, []);
  const isWideScreen = width >= 1500;
  return { width, isWideScreen };
}

export default useWidth;
