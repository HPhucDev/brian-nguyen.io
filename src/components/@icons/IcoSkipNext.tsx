import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSkipNext = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M6 18L14.5 12L6 6V18ZM16 6V18H18V6H16Z" />
  </svg>
);
const Memo = memo(SvgIcoSkipNext);
export default Memo;
