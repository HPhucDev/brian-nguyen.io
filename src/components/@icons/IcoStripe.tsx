import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoStripe = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_stripe'}</title>
    <path className="cls-1" d="M8.5,11.5h7a.5.5,0,0,1,0,1h-7a.5.5,0,0,1,0-1Z" />
  </svg>
);
const Memo = memo(SvgIcoStripe);
export default Memo;
