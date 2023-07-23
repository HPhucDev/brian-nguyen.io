import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoMail = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_mail'}</title>
    <path d="M20,8h0a1,1,0,0,0-1-1H5A1,1,0,0,0,4,8H4l8,4.62Zm0,1.16-7.73,4.46a.64.64,0,0,1-.54,0L4,9.16V16a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1Zm1-.82V16a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V8A2,2,0,0,1,5,6H19a2,2,0,0,1,2,2v.34Z" />
  </svg>
);
const Memo = memo(SvgIcoMail);
export default Memo;
