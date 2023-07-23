import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTextblock = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      d="M7.7334 11.3333L9.86673 9.20001L7.7334 7.06668"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5332 6H19.9999" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.5332 9.19998H19.9999"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5332 12.4H19.9999" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.13281 15.6H19.9995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.13281 18.8H19.9995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 9.19998H9.86667" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Memo = memo(SvgIcoTextblock);
export default Memo;
