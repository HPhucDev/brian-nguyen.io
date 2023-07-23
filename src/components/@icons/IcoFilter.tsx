import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_filter'}</title>
    <path
      className="cls-1"
      d="M16.22,6.5H7.76l3.63,4.93a.47.47,0,0,1,.1.3v4.71l1,.65V11.72a.54.54,0,0,1,.1-.3Zm-5.7,5.4L6.63,6.61s0,0,0,0a.75.75,0,0,1,0-.71.67.67,0,0,1,.6-.37h9.63a.68.68,0,0,1,.6.37.7.7,0,0,1,0,.71l0,0L13.47,11.9V18a.46.46,0,0,1-.24.43.44.44,0,0,1-.24.07.47.47,0,0,1-.26-.08l-2-1.28a.48.48,0,0,1-.23-.42Z"
    />
  </svg>
);
const Memo = memo(SvgIcoFilter);
export default Memo;
