import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" />
  </svg>
);
const Memo = memo(SvgIcoFullscreen);
export default Memo;
