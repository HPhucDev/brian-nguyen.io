import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_newspaper'}</title>
    <path
      id="newspaper"
      d="M8,8.5h5a.5.5,0,0,1,.5.5v4a.5.5,0,0,1-.5.5H8a.5.5,0,0,1-.5-.5V9A.5.5,0,0,1,8,8.5Zm.5,1v3h4v-3Zm6.5,5h3a.5.5,0,0,1,0,1H15a.5.5,0,0,1,0-1Zm0-2h3a.5.5,0,0,1,0,1H15a.5.5,0,0,1,0-1Zm0-4h3a.5.5,0,0,1,0,1H15a.5.5,0,0,1,0-1Zm0,2h3a.5.5,0,0,1,0,1H15a.5.5,0,0,1,0-1Zm-7,4h5a.5.5,0,0,1,0,1H8a.5.5,0,0,1,0-1Zm-1.5-6v7a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1v-7a1,1,0,0,0-1-1H7.5A1,1,0,0,0,6.5,8.5Zm-.73,8a2,2,0,0,1-.27-1v-5a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1Zm-.27-7v-1a2,2,0,0,1,2-2h11a2,2,0,0,1,2,2v7a2,2,0,0,1-2,2H5.5a2,2,0,0,1-2-2v-4A2,2,0,0,1,5.5,9.5Z"
    />
  </svg>
);
const Memo = memo(SvgIcoNewspaper);
export default Memo;
