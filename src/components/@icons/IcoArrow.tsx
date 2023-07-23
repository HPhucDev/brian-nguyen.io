import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_arrow'}</title>
    <path d="M15.65,9.65a.49.49,0,0,1,.7.7l-4,4a.48.48,0,0,1-.7,0l-4-4a.49.49,0,0,1,.7-.7L12,13.29Z" />
  </svg>
);
const Memo = memo(SvgIcoArrow);
export default Memo;
