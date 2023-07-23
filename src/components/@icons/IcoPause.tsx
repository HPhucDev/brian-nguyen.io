import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoPause = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" />
  </svg>
);
const Memo = memo(SvgIcoPause);
export default Memo;
