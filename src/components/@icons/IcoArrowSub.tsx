import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoArrowSub = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_arrow_sub'}</title>
    <path
      d="M7.25,14H16L12.9,10.85a.49.49,0,0,1,.7-.7l4,4a.48.48,0,0,1,0,.7l-4,4a.49.49,0,0,1-.7-.7L16,15H6.75a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,1,0Z"
      fillRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgIcoArrowSub);
export default Memo;
