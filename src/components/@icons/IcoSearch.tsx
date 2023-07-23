import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_search'}</title>
    <path d="M10.2,14.7a4.5,4.5,0,1,0-4.5-4.5A4.49,4.49,0,0,0,10.2,14.7Zm4.23-1,4.72,4.73a.49.49,0,0,1-.7.7l-4.73-4.72a5.49,5.49,0,1,1,.71-.71Z" />
  </svg>
);
const Memo = memo(SvgIcoSearch);
export default Memo;
