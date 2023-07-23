import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoMore = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_more'}</title>
    <path
      id="more"
      className="cls-1"
      d="M4,12a2,2,0,1,1,2,2A2,2,0,0,1,4,12Zm6,0a2,2,0,1,1,2,2A2,2,0,0,1,10,12Zm6,0a2,2,0,1,1,2,2A2,2,0,0,1,16,12Z"
    />
  </svg>
);
const Memo = memo(SvgIcoMore);
export default Memo;
