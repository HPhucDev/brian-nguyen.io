import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoBelga = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_belga'}</title>
    <path
      id="belga"
      className="cls-1"
      d="M11.08,10.66a2.44,2.44,0,0,1,.92-.19,2.65,2.65,0,0,1,2.5,2.77A2.64,2.64,0,0,1,12,16a2.64,2.64,0,0,1-2.5-2.76V8.47a.43.43,0,1,1,.86,0v4.77A1.73,1.73,0,0,0,12,15.05a1.73,1.73,0,0,0,1.64-1.81A1.73,1.73,0,0,0,12,11.42a1.53,1.53,0,0,0-.6.12.42.42,0,0,1-.56-.26A.5.5,0,0,1,11.08,10.66ZM6.64,5.57A1.07,1.07,0,0,0,5.57,6.64V17.36a1.07,1.07,0,0,0,1.07,1.07H17.36a1.07,1.07,0,0,0,1.07-1.07V6.64a1.07,1.07,0,0,0-1.07-1.07Zm0-1.07H17.36A2.14,2.14,0,0,1,19.5,6.64V17.36a2.14,2.14,0,0,1-2.14,2.14H6.64A2.14,2.14,0,0,1,4.5,17.36V6.64A2.14,2.14,0,0,1,6.64,4.5Z"
    />
  </svg>
);
const Memo = memo(SvgIcoBelga);
export default Memo;
