import { useEffect, useState } from 'react';

const debounce = (fn: () => void, ms: number) => {
  let timer: number | null;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn();
    }, ms);
  };
};

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateScreenHeight = () => setScreenHeight(window.innerHeight);
    window.addEventListener('resize', debounce(updateScreenHeight, 500));
    updateScreenHeight();
    return () => window.removeEventListener('resize', debounce(updateScreenHeight, 500));
  }, []);

  return screenHeight;
};

export default useScreenHeight;
