import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_profile'}</title>
    <path d="M12,12a3.2,3.2,0,0,0,3.22-3.5,3.23,3.23,0,1,0-6.43,0A3.2,3.2,0,0,0,11.86,12Zm7.51,4.5v3a.5.5,0,0,1-1,0v-3c0-2-2.24-3.5-6.5-3.5h-.16C7.68,13,5.5,14.52,5.5,16.5v3a.5.5,0,0,1-1,0v-3c0-2.15,1.79-3.76,5-4.3A4.52,4.52,0,0,1,7.78,8.5a4.22,4.22,0,1,1,8.43,0,4.5,4.5,0,0,1-1.69,3.7C17.71,12.74,19.5,14.35,19.5,16.5Z" />
  </svg>
);
const Memo = memo(SvgIcoProfile);
export default Memo;
