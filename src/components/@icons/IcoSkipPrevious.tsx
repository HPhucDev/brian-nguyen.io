import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSkipPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12Z" />
  </svg>
);
const Memo = memo(SvgIcoSkipPrevious);
export default Memo;
