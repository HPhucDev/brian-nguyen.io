import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_camera'}</title>
    <path d="M12,16a3,3,0,1,0-3-3A3,3,0,0,0,12,16Zm0,1a4,4,0,1,1,4-4A4,4,0,0,1,12,17ZM8.72,6,8.28,7.32A1,1,0,0,1,7.33,8H5A1,1,0,0,0,4,9v8a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H16.67a1,1,0,0,1-1-.68L15.28,6ZM7.33,7l.44-1.32a1,1,0,0,1,1-.68h6.56a1,1,0,0,1,1,.68L16.67,7H19a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V9A2,2,0,0,1,5,7Z" />
  </svg>
);
const Memo = memo(SvgIcoCamera);
export default Memo;
