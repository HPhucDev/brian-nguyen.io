import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFile = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_file'}</title>
    <path
      id="file"
      className="cls-1"
      d="M8.5,16h4a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5A.5.5,0,0,1,8.5,16Zm0-2h7a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5A.5.5,0,0,1,8.5,14Zm0-2h7a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5A.5.5,0,0,1,8.5,12Zm0-2h2a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5A.5.5,0,0,1,8.5,10Zm0-2h2a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5A.5.5,0,0,1,8.5,8ZM13,5V9h4V8.84a1,1,0,0,0-.29-.71L13.88,5.3A1.05,1.05,0,0,0,13.17,5ZM12,5H8A1,1,0,0,0,7,6V18a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V10H13a1,1,0,0,1-1-1Zm1.17-1a2,2,0,0,1,1.41.59l2.83,2.83A2,2,0,0,1,18,8.84V18a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V6H6A2,2,0,0,1,8,4h5.17Z"
    />
  </svg>
);
const Memo = memo(SvgIcoFile);
export default Memo;
