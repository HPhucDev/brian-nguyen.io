import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoKiosk = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_kiosk'}</title>
    <path d="M7,15.5v3H17v-3Zm1.5-10h1v2h-1Zm6,0h1v2h-1Zm-3,0h1v2h-1Zm-5,0-1.22,2H18.74l-1.22-2Zm2,3h-2a1,1,0,0,0,2,0Zm3,0h-2a1,1,0,0,0,2,0Zm3,0h-2a1,1,0,0,0,2,0Zm3,0h-2a1,1,0,0,0,2,0ZM16,10.44a2,2,0,0,1-1-.62,2,2,0,0,1-3,0,2,2,0,0,1-3,0,2,2,0,0,1-1,.62V14.5h8Zm1,0V14.5a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1V10.44A2,2,0,0,1,5.5,8.5H5.26a1,1,0,0,1-1-1A1,1,0,0,1,4.41,7L5.62,5a1,1,0,0,1,.86-.48h11a1,1,0,0,1,.86.48l1.21,2a1,1,0,0,1-.33,1.37,1,1,0,0,1-.52.15H18.5A2,2,0,0,1,17,10.44Z" />
  </svg>
);
const Memo = memo(SvgIcoKiosk);
export default Memo;
