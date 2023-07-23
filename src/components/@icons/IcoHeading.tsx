import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoHeading = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 4.5C5.39543 4.5 4.5 5.39543 4.5 6.5V7C4.5 7.27614 4.72386 7.5 5 7.5C5.27614 7.5 5.5 7.27614 5.5 7V6.5C5.5 5.94772 5.94772 5.5 6.5 5.5H11.5V19.5H9C8.72386 19.5 8.5 19.7239 8.5 20C8.5 20.2761 8.72386 20.5 9 20.5H12H15C15.2761 20.5 15.5 20.2761 15.5 20C15.5 19.7239 15.2761 19.5 15 19.5H12.5V5.5H17.5C18.0523 5.5 18.5 5.94772 18.5 6.5V7C18.5 7.27614 18.7239 7.5 19 7.5C19.2761 7.5 19.5 7.27614 19.5 7V6.5C19.5 5.39543 18.6046 4.5 17.5 4.5H12H6.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgIcoHeading);
export default Memo;
