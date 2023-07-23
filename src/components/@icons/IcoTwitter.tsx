import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'Twitter'}</title>
    <path
      id="twitter"
      d="M17.58,9.6c0-.12,0-.24,0-.36A5.59,5.59,0,0,0,19,7.8a6,6,0,0,1-1.65.44A2.78,2.78,0,0,0,18.61,6.7a6,6,0,0,1-1.82.68,2.91,2.91,0,0,0-2.1-.88,2.83,2.83,0,0,0-2.87,2.78,3.29,3.29,0,0,0,.07.63A8.28,8.28,0,0,1,6,7a2.75,2.75,0,0,0,.89,3.71,3,3,0,0,1-1.3-.35v0a2.81,2.81,0,0,0,2.31,2.73,3.16,3.16,0,0,1-.76.09,2.36,2.36,0,0,1-.54-.05A2.85,2.85,0,0,0,9.25,15.1a5.84,5.84,0,0,1-3.56,1.19,5.12,5.12,0,0,1-.69,0A8.31,8.31,0,0,0,9.4,17.5,8,8,0,0,0,17.58,9.6Z"
    />
  </svg>
);
const Memo = memo(SvgIcoTwitter);
export default Memo;
