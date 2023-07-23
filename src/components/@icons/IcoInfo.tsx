import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <title>{'ico_info'}</title>
    <path d="M12,7.5a.75.75,0,1,1-.75.75A.76.76,0,0,1,12,7.5ZM12,10a.5.5,0,0,1,.5.5v6a.5.5,0,0,1-1,0v-6A.5.5,0,0,1,12,10Zm0,9a7,7,0,1,0-7-7A7,7,0,0,0,12,19Zm0,1a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </svg>
);
const Memo = memo(SvgIcoInfo);
export default Memo;
