import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoChat = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_chat'}</title>
    <path d="M7,18l2.4-1.8A1,1,0,0,1,10,16h6a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H5A1,1,0,0,0,4,9v6a1,1,0,0,0,1,1H6a1,1,0,0,1,1,1ZM7,7h9a2,2,0,0,1,2,2v4h1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6ZM6,7V6A2,2,0,0,1,8,4H19a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H18v1a2,2,0,0,1-2,2H10L6,20V17H5a2,2,0,0,1-2-2V9A2,2,0,0,1,5,7Z" />
  </svg>
);
const Memo = memo(SvgIcoChat);
export default Memo;
