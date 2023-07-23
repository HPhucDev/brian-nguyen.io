import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSmallNegative = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 16 16" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_small_negative'}</title>
    <path className="cls-1" d="M4.5,7.5h7a.5.5,0,0,1,0,1h-7a.5.5,0,0,1,0-1Z" />
  </svg>
);
const Memo = memo(SvgIcoSmallNegative);
export default Memo;
