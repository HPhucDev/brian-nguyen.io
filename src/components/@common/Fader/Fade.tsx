import { useRef } from 'react';

import useIntersectionObserver from 'hooks/useIntersectionObserver';

interface FadeProps {
  threshold?: number;
  children: React.ReactNode;
}

const Fade = ({ threshold = 0.5, children }: FadeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { isVisible } = useIntersectionObserver(ref, {
    threshold: threshold,
    freezeOnceVisible: true,
  });

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity .5s ease-in-out, transform .5s ease-in-out',
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Fade;
