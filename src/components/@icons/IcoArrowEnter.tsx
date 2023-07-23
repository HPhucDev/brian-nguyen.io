import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoArrowEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 5C11.5 4.72386 11.7239 4.5 12 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5C16.5 5 16.5 5 16.5 5V15C16.5 15.069 16.486 15.1348 16.4607 15.1946C16.3848 15.3741 16.2071 15.5 16 15.5H8.70711L11.8536 18.6464C12.0488 18.8417 12.0488 19.1583 11.8536 19.3536C11.6583 19.5488 11.3417 19.5488 11.1464 19.3536L7.14645 15.3536C6.95118 15.1583 6.95118 14.8417 7.14645 14.6465L11.1464 10.6464C11.3417 10.4512 11.6583 10.4512 11.8536 10.6464C12.0488 10.8417 12.0488 11.1583 11.8536 11.3536L8.7071 14.5H15.5V5.5L12 5.5C11.7239 5.5 11.5 5.27614 11.5 5Z"
      fill="#3349E8"
    />
  </svg>
);
const Memo = memo(SvgIcoArrowEnter);
export default Memo;
