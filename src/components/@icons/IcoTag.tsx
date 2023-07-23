import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTag = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_tag'}</title>
    <path d="M14.94,8.91a1,1,0,1,0,1.36.37A1,1,0,0,0,14.94,8.91ZM14.44,8a2,2,0,1,1-.74,2.74A2,2,0,0,1,14.44,8Zm4.18,4.05a1.07,1.07,0,0,0,.53-.73L20,7.21s0-.09-.06-.11l-4-1.33a1.09,1.09,0,0,0-.9.09L4.54,11.91a1.1,1.1,0,0,0-.4,1.5l2.5,4.33a1.09,1.09,0,0,0,1.5.4Zm-10,6.83a2,2,0,0,1-2.73-.73l-2.5-4.33a2,2,0,0,1,.73-2.73L14.57,5.08a2,2,0,0,1,1.63-.17l4,1.34a1,1,0,0,1,.67,1.15L20,11.54a2,2,0,0,1-1,1.33Z" />
  </svg>
);
const Memo = memo(SvgIcoTag);
export default Memo;
