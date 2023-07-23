import { ReactNode, useEffect, useRef, useState } from 'react';

import useIntersectionObserver from 'hooks/useIntersectionObserver';

const SVGAnimation = ({ children }: { children: ReactNode[] | ReactNode }) => {
  const parent = useRef<HTMLDivElement | null>(null);

  const [pathElements, setPathElements] = useState(parent.current?.querySelectorAll('path'));

  const { isVisible } = useIntersectionObserver(parent, {
    threshold: 1,
    freezeOnceVisible: true,
  });

  useEffect(() => {
    const paths = parent.current?.querySelectorAll('path');
    paths?.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });
    setPathElements(paths);
  }, [parent, setPathElements]);

  useEffect(() => {
    if (!pathElements || !isVisible) return;
    pathElements?.forEach((path) => {
      path.style.transition = path.style.transition = 'stroke-dashoffset .5s ease-out';
      path.style.strokeDashoffset = '0';
    });
  }, [isVisible, pathElements]);

  return <div ref={parent}>{children}</div>;
};

export default SVGAnimation;
