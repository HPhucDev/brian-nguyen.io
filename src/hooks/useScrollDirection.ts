import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 2;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | 'inherit'>('inherit');
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      // Sometimes scroll event happens on page load so we skip this first event
      if (isFirst) return setIsFirst(false);

      const direction =
        scrollY > lastScrollY ? 'down' : scrollDirection === 'inherit' ? 'inherit' : 'up';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > SCROLL_THRESHOLD || scrollY - lastScrollY < -SCROLL_THRESHOLD)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection, isFirst]);

  return scrollDirection;
};

export default useScrollDirection;
