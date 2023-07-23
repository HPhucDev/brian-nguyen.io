import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoOverview = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_overview'}</title>
    <path d="M4.5,15v4h6V15Zm0-1h6a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1V15A1,1,0,0,1,4.5,14Zm9-2v7h6V12Zm0-1h6a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1V12A1,1,0,0,1,13.5,11Zm0-6V9h6V5Zm0-1h6a1,1,0,0,1,1,1V9a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1V5A1,1,0,0,1,13.5,4Zm-9,1v7h6V5Zm0-1h6a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1V5A1,1,0,0,1,4.5,4Z" />
  </svg>
);
const Memo = memo(SvgIcoOverview);
export default Memo;
