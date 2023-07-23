import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_check'}</title>
    <path
      fill="currentColor"
      d="M10.7,15.8l7.68-8.63a.5.5,0,1,1,.74.66l-8,9a.49.49,0,0,1-.7.05l-3.5-3a.5.5,0,1,1,.66-.76Z"
    />
  </svg>
);
const Memo = memo(SvgIcoCheck);
export default Memo;
