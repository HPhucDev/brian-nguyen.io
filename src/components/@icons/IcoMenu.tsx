import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_menu'}</title>
    <path
      className="cls-1"
      d="M5,15H19a1,1,0,0,1,0,2H5a1,1,0,0,1,0-2Zm0-4H19a1,1,0,0,1,0,2H5a1,1,0,0,1,0-2ZM5,7H19a1,1,0,0,1,0,2H5A1,1,0,0,1,5,7Z"
    />
  </svg>
);
const Memo = memo(SvgIcoMenu);
export default Memo;
