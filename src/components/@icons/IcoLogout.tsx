import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_logout'}</title>
    <path d="M12,6H6.52a1,1,0,0,0-1,1V17a1,1,0,0,0,1,1H12a.5.5,0,0,1,0,1H6.52a2,2,0,0,1-2-2V7a2,2,0,0,1,2-2H12a.5.5,0,0,1,0,1Zm7.32,5.64a.51.51,0,0,1,0,.71L15.8,15.89a.5.5,0,0,1-.7,0,.5.5,0,0,1,0-.71l2.68-2.68H9.45A.5.5,0,0,1,9,12a.5.5,0,0,1,.5-.5h8.33L15.1,8.82a.5.5,0,0,1,0-.71.48.48,0,0,1,.7,0Z" />
  </svg>
);
const Memo = memo(SvgIcoLogout);
export default Memo;
