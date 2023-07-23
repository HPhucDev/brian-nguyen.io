import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoWarningFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_warning_filled'}</title>
    <path d="M12.89,9.87a.88.88,0,1,0-1.75,0v3.25a.88.88,0,0,0,1.75,0ZM12,15a1,1,0,1,0,1,1A1,1,0,0,0,12,15Zm1.3-9.23,6.28,11A1.5,1.5,0,0,1,18.28,19H5.72a1.5,1.5,0,0,1-1.5-1.5,1.47,1.47,0,0,1,.2-.74l6.28-11a1.48,1.48,0,0,1,2-.55A1.41,1.41,0,0,1,13.3,5.76Z" />
  </svg>
);
const Memo = memo(SvgIcoWarningFilled);
export default Memo;
