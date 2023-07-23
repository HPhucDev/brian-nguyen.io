import { useEffect, useState } from 'react';

const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i),
    );
    setIsTouchDevice(mobile);
  }, []);

  return { isTouchDevice };
};

export default useIsTouchDevice;
