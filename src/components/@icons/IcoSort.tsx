import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSort = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_sort'}</title>
    <path d="M8.35,10.35a.49.49,0,0,1-.7-.7l4-4a.48.48,0,0,1,.7,0l4,4a.49.49,0,0,1-.7.7L12,6.71Zm7.3,3.3a.49.49,0,0,1,.7.7l-4,4a.48.48,0,0,1-.7,0l-4-4a.49.49,0,0,1,.7-.7L12,17.29Z" />
  </svg>
);
const Memo = memo(SvgIcoSort);
export default Memo;
