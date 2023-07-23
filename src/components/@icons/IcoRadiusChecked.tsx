import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoRadiusChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_radius_checked'}</title>
    <path d="M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0,2a5,5,0,1,0-5-5A5,5,0,0,0,12,17Zm0,1a6,6,0,1,1,6-6A6,6,0,0,1,12,18Z" />
  </svg>
);
const Memo = memo(SvgIcoRadiusChecked);
export default Memo;
