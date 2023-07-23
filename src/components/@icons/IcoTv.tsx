import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTv = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_tv'}</title>
    <path
      id="tv"
      d="M13.5,16v1h4a.5.5,0,0,1,0,1H6.5a.5.5,0,0,1,0-1h4V16H6a2,2,0,0,1-2-2V8A2,2,0,0,1,6,6H18a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2Zm-1,0h-1v1h1ZM6,7A1,1,0,0,0,5,8v6a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V8a1,1,0,0,0-1-1Z"
    />
  </svg>
);
const Memo = memo(SvgIcoTv);
export default Memo;
