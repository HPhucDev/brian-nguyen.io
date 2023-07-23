import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_warning'}</title>
    <path
      id="warning"
      d="M12,9.49a.5.5,0,0,1,.5.5v4a.5.5,0,1,1-1,0V10A.5.5,0,0,1,12,9.49Zm0,6a.5.5,0,0,1,.5.5.5.5,0,0,1-1,0A.5.5,0,0,1,12,15.49Zm.43-9.23a.47.47,0,0,0-.18-.19.5.5,0,0,0-.68.19l-6.28,11a.59.59,0,0,0-.07.25.5.5,0,0,0,.5.5H18.28a.5.5,0,0,0,.24-.06.51.51,0,0,0,.19-.69Zm.87-.5,6.28,11A1.5,1.5,0,0,1,18.28,19H5.72a1.5,1.5,0,0,1-1.5-1.5,1.47,1.47,0,0,1,.2-.74l6.28-11a1.48,1.48,0,0,1,2-.55A1.41,1.41,0,0,1,13.3,5.76Z"
    />
  </svg>
);
const Memo = memo(SvgIcoWarning);
export default Memo;
