import React, { ReactNode } from 'react';
import useMousePosition from 'hooks/useMousePosition';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

type HaloProps = {
  children: ReactNode | ReactNode[];
  /** Width/height in px */
  size?: number;
  /** How strong the effect should be (0-100) */
  strength?: number;
  className?: string;
};

interface StyledOverlayDivProps {
  $x: number;
  $y: number;
}

const StyledOverlayDiv = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== '$isOpen',
})<StyledOverlayDivProps>(({ $x = 0, $y = 0 }) => ({
  transitionProperty: 'opacity',
  opacity: 0,
  position: 'absolute',
  inset: 0,
  zIndex: 50,
  transform: `translateX(${$x}) translateY(${$y}) `,
  pointerEvents: 'none',
}));
const StyledContainerDiv = styled(motion.div)({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Halo({ children, size = 600, strength = 10 }: HaloProps) {
  const ref = React.useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = size / 2;

  return (
    <StyledContainerDiv ref={ref} whileHover="hover">
      <StyledOverlayDiv
        $x={x ? x - offset : -offset}
        $y={y ? y - offset : -offset}
        style={
          {
            width: size,
            height: size,
            background: 'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)',
          } as React.CSSProperties
        }
        variants={{
          hover: {
            opacity: strength / 100,
          },
        }}
      />
      {children}
    </StyledContainerDiv>
  );
}
