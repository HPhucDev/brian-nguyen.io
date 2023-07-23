import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFullscreenExit = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" />
  </svg>
);
const Memo = memo(SvgIcoFullscreenExit);
export default Memo;
