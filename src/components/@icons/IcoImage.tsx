import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoImage = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_image'}</title>
    <path
      id="image"
      className="cls-1"
      d="M11.94,14a1.5,1.5,0,0,1-1.62.34l-1.46-.59L7.94,15H16l-2.16-3Zm1.65-3.06.06-.05a.5.5,0,0,1,.69.11l3.08,4.24a.48.48,0,0,1,.1.29.5.5,0,0,1-.5.5H7a.52.52,0,0,1-.29-.09.51.51,0,0,1-.12-.7l1.71-2.39a.49.49,0,0,1,.59-.17l1.83.73a.51.51,0,0,0,.54-.11ZM9.5,10.5A.5.5,0,1,0,9,10,.5.5,0,0,0,9.5,10.5Zm0,1A1.5,1.5,0,1,1,11,10,1.5,1.5,0,0,1,9.5,11.5ZM18,17a1,1,0,0,0,1-1V8a1,1,0,0,0-1-1H6A1,1,0,0,0,5,8v8a1,1,0,0,0,1,1ZM6,6H18a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V8A2,2,0,0,1,6,6Z"
    />
  </svg>
);
const Memo = memo(SvgIcoImage);
export default Memo;
