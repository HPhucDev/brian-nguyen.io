import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCheckSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 10 10" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{clip-path:url(#clip-path);}.cls-2{fill:#fff;fill-rule:evenodd;}'}</style>
      <clipPath id="clip-path">
        <circle cx={5} cy={5} r={5} />
      </clipPath>
    </defs>
    <title>{'ico_check_small'}</title>
    <circle cx={5} cy={5} r={5} />
    <g className="cls-1">
      <path
        className="cls-2"
        d="M4.52,6,7.45,2.71a.62.62,0,0,1,.93.83L5.05,7.29a.63.63,0,0,1-.87.06L2.72,6.1a.62.62,0,0,1,.81-.95Z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgIcoCheckSmall);
export default Memo;
