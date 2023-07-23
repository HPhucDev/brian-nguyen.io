import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_help'}</title>
    <path d="M11.39,15h0a.71.71,0,0,1,1,0h0a.7.7,0,0,1,0,1h0a.71.71,0,0,1-1,0A.7.7,0,0,1,11.39,15Zm-.15-1.26a3,3,0,0,1,.17-1.06,2.76,2.76,0,0,1,.62-.86l.81-.76a1.62,1.62,0,0,0,.52-1.15A1.21,1.21,0,0,0,13,9a1.32,1.32,0,0,0-1-.34A1.54,1.54,0,0,0,11,9a1,1,0,0,0-.38.81H9.5a1.84,1.84,0,0,1,.71-1.47A2.86,2.86,0,0,1,12,7.75a2.66,2.66,0,0,1,1.82.57,2,2,0,0,1,.65,1.57,2.72,2.72,0,0,1-1,1.94l-.67.61a1.78,1.78,0,0,0-.45,1.31ZM12,19a7,7,0,1,0-7-7A7,7,0,0,0,12,19Zm0,1a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </svg>
);
const Memo = memo(SvgIcoHelp);
export default Memo;
