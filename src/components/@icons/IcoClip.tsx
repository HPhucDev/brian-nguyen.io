import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoClip = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_clip'}</title>
    <path
      className="cls-1"
      d="M7.59,16.5A1.5,1.5,0,1,0,6.09,15,1.5,1.5,0,0,0,7.59,16.5Zm0-6A1.5,1.5,0,1,0,6.09,9,1.5,1.5,0,0,0,7.59,10.5ZM10,14.28a2.46,2.46,0,0,1,.11.72,2.5,2.5,0,1,1-.58-1.6l2-1.4-2-1.4A2.5,2.5,0,1,1,10.09,9a2.46,2.46,0,0,1-.11.72l2.39,1.67,5.76-4a.5.5,0,0,1,.57.82L13.25,12l5.45,3.82a.5.5,0,0,1-.57.82l-5.76-4Z"
    />
  </svg>
);
const Memo = memo(SvgIcoClip);
export default Memo;
