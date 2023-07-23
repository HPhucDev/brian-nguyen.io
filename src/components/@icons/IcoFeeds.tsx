import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFeeds = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_feeds'}</title>
    <path
      className="cls-1"
      d="M7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Zm0,1a2,2,0,1,1,2-2A2,2,0,0,1,7,19ZM5.5,8C11.85,8,16,12.15,16,18.5a.5.5,0,0,1-.5.5h0a.49.49,0,0,1-.49-.49h0C15,12.7,11.3,9,5.5,9h0A.49.49,0,0,1,5,8.51H5A.5.5,0,0,1,5.5,8Zm0,3c4.69,0,7.5,2.81,7.5,7.5a.5.5,0,0,1-.5.5h0a.49.49,0,0,1-.48-.48h0C12,14.36,9.64,12,5.5,12h0A.49.49,0,0,1,5,11.52H5v0A.5.5,0,0,1,5.5,11Zm0-6c8,0,13.5,5.49,13.5,13.5a.5.5,0,0,1-.5.5h0a.49.49,0,0,1-.49-.49h0C18,11,13,6,5.5,6h0A.49.49,0,0,1,5,5.51H5A.5.5,0,0,1,5.5,5Z"
    />
  </svg>
);
const Memo = memo(SvgIcoFeeds);
export default Memo;
