import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTagSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="fc64631d-dbec-4915-8866-60b5ef22d43c"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <title>{'ico_tag_solid'}</title>
    <path d="M20.22,6.25l-4-1.34a2,2,0,0,0-1.63.17L4.09,11.13a2,2,0,0,0-.73,2.73l2.5,4.33a2,2,0,0,0,2.73.73l10.48-6.05a2,2,0,0,0,1-1.33l.86-4.14A1,1,0,0,0,20.22,6.25Zm-3.78,5.26a2,2,0,1,1,.73-2.73A2,2,0,0,1,16.44,11.51Z" />
  </svg>
);
const Memo = memo(SvgIcoTagSolid);
export default Memo;
