import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" role="img" {...props}>
    <path
      id="b7ba8f4e-850b-4eda-b605-6a93fcc68e32"
      d="M12.07,5h0a6.92,6.92,0,0,1,6,3.5,7.05,7.05,0,0,1,0,7,6.92,6.92,0,0,1-6,3.5.57.57,0,0,1-.57-.57.56.56,0,0,1,.57-.57,5.76,5.76,0,0,0,4.07-1.68A5.89,5.89,0,0,0,16.27,8a5.77,5.77,0,0,0-8.14-.24,5.84,5.84,0,0,0-1.84,4L7.7,10.32a.55.55,0,0,1,.74.06.57.57,0,0,1,.06.74L6.19,13.45a.56.56,0,0,1-.79,0L3.11,11.12a.57.57,0,0,1,.06-.74.55.55,0,0,1,.74-.06h0l1.24,1.26A7,7,0,0,1,7.32,6.91,6.85,6.85,0,0,1,12.07,5Z"
      style={{
        fillRule: 'evenodd',
      }}
    />
  </svg>
);
const Memo = memo(SvgIcoRefresh);
export default Memo;
