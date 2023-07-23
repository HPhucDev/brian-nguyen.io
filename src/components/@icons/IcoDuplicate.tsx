import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <path
      className="cls-1"
      d="M6.48,2.46A2.46,2.46,0,0,0,4,4.9V16.22a2.46,2.46,0,0,0,2.48,2.44h.67v.44a2.46,2.46,0,0,0,2.48,2.44h7.89A2.46,2.46,0,0,0,20,19.1V8a2.46,2.46,0,0,0-2.48-2.44h-.67V4.9a2.46,2.46,0,0,0-2.48-2.44Zm11,4a1.57,1.57,0,0,1,1.12.46A1.55,1.55,0,0,1,19.1,8V19.1a1.57,1.57,0,0,1-1.58,1.56H9.63A1.56,1.56,0,0,1,8.06,19.1V8A1.56,1.56,0,0,1,9.63,6.45Zm-2-2.65a1.59,1.59,0,0,0-1.11-.46H6.48A1.57,1.57,0,0,0,4.9,4.9V16.22a1.56,1.56,0,0,0,1.58,1.55h.68V8A2.46,2.46,0,0,1,9.63,5.56h6.31V4.9A1.53,1.53,0,0,0,15.48,3.8Z"
    />
  </svg>
);
const Memo = memo(SvgIcoDuplicate);
export default Memo;
