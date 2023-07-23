import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
);
const Memo = memo(SvgIcoPlayArrow);
export default Memo;
