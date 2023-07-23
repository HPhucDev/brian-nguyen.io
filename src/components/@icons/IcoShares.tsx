import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoShares = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_shares'}</title>
    <path d="M18,14h.46l.39.39a.5.5,0,0,1,0,.71.5.5,0,0,1-.7,0l-3.54-3.54a.5.5,0,0,1,.71-.71L18,13.5V9a1,1,0,0,0-1-1H9.46a.5.5,0,0,1,0-1H17a2,2,0,0,1,2,2v.31a.41.41,0,0,1,0,.19v4l2.68-2.69a.5.5,0,0,1,.71.71L18.85,15.1a.5.5,0,0,1-.7,0,.51.51,0,0,1-.15-.36ZM6,14.73V15a1,1,0,0,0,1,1h7.5a.5.5,0,0,1,0,1H7a2,2,0,0,1-2-2V11H5v-.49L2.32,13.19a.5.5,0,1,1-.71-.71L5.15,9a.48.48,0,0,1,.7,0l3.54,3.53a.5.5,0,1,1-.71.71L6,10.51v4A.41.41,0,0,1,6,14.73Z" />
  </svg>
);
const Memo = memo(SvgIcoShares);
export default Memo;
