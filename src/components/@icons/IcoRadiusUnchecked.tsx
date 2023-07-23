import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoRadiusUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_radius_unchecked'}</title>
    <path d="M12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18Zm0-1a5,5,0,1,0-5-5A5,5,0,0,0,12,17Z" />
  </svg>
);
const Memo = memo(SvgIcoRadiusUnchecked);
export default Memo;
