import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoShare = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_share'}</title>
    <path d="M10.5,7a.51.51,0,0,1-.5.5H7.5a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V14a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v2.5a2,2,0,0,1-2,2h-8a2,2,0,0,1-2-2v-8a2,2,0,0,1,2-2H10A.5.5,0,0,1,10.5,7Zm7,.21-5.68,5.68a.5.5,0,0,1-.71,0,.5.5,0,0,1,0-.7L16.79,6.5H13a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5h5a.47.47,0,0,1,.35.15A.5.5,0,0,1,18.5,6v5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5Z" />
  </svg>
);
const Memo = memo(SvgIcoShare);
export default Memo;
