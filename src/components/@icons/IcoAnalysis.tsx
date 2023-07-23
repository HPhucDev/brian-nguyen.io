import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoAnalysis = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_analysis'}</title>
    <path
      className="cls-1"
      d="M17.5,11a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-1,0v-5A.5.5,0,0,1,17.5,11Zm-2,2a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-1,0v-3A.5.5,0,0,1,15.5,13Zm-2-6a.5.5,0,0,1,.5.5v9a.5.5,0,0,1-1,0v-9A.5.5,0,0,1,13.5,7Zm-2,3a.5.5,0,0,1,.5.5v6a.5.5,0,0,1-1,0v-6A.5.5,0,0,1,11.5,10Zm-2-2a.5.5,0,0,1,.5.5v8a.5.5,0,0,1-1,0v-8A.5.5,0,0,1,9.5,8Zm-2,3a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-1,0v-5A.5.5,0,0,1,7.5,11ZM5,18H19.5a.5.5,0,0,1,0,1H4.5a.5.5,0,0,1-.5-.5V5.5a.5.5,0,0,1,1,0Z"
    />
  </svg>
);
const Memo = memo(SvgIcoAnalysis);
export default Memo;
