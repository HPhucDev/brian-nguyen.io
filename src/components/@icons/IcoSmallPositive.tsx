import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSmallPositive = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 16 16" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_small_positive'}</title>
    <path
      className="cls-1"
      d="M7.5,7.5v-3a.5.5,0,0,1,1,0v3h3a.5.5,0,0,1,0,1h-3v3a.5.5,0,0,1-1,0v-3h-3a.5.5,0,0,1,0-1Z"
    />
  </svg>
);
const Memo = memo(SvgIcoSmallPositive);
export default Memo;
