import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_print'}</title>
    <path d="M9.5,18h5a.5.5,0,0,1,0,1h-5a.5.5,0,0,1,0-1Zm0-2h5a.5.5,0,0,1,0,1h-5a.5.5,0,0,1,0-1ZM15,11v1h2V11Zm-.5-1h3a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-2A.5.5,0,0,1,14.5,10ZM7,6V8H17V6ZM7,17H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6V6A1,1,0,0,1,7,5H17a1,1,0,0,1,1,1V8h1a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H17v3.5a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5Zm1-2v5h8V15ZM7,15H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1H17v1h2V9H5v7H7Z" />
  </svg>
);
const Memo = memo(SvgIcoPrint);
export default Memo;
