import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoRealtime = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12.3333H20.5V5H4V12.3333ZM4.91667 11.4167H19.5833V5.91667H4.91667V11.4167ZM4 19.6667H20.5V18.75H4V19.6667ZM4 16H20.5V15.0833H4V16Z"
      fill="#666875"
    />
  </svg>
);
const Memo = memo(SvgIcoRealtime);
export default Memo;
