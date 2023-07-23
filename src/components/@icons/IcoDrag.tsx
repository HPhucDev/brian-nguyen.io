import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoDrag = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_drag'}</title>
    <path
      className="cls-1"
      d="M5.5,15.5h13a.5.5,0,0,1,0,1H5.5a.5.5,0,0,1,0-1Zm0-4h13a.5.5,0,0,1,0,1H5.5a.5.5,0,0,1,0-1Zm0-4h13a.5.5,0,0,1,0,1H5.5a.5.5,0,0,1,0-1Z"
    />
  </svg>
);
const Memo = memo(SvgIcoDrag);
export default Memo;
