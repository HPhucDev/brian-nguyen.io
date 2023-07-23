import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7437 4.5H19.0001C19.2763 4.5 19.5001 4.72386 19.5001 5C19.5001 5.27614 19.2763 5.5 19.0001 5.5H16.0334L9.10003 18.5H11.5333C11.8095 18.5 12.0333 18.7239 12.0333 19C12.0333 19.2761 11.8095 19.5 11.5333 19.5H8.27616C8.26958 19.5001 8.26298 19.5001 8.25637 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19C4.5 18.7239 4.72386 18.5 5 18.5H7.9667L14.9 5.5H12.4668C12.1907 5.5 11.9668 5.27614 11.9668 5C11.9668 4.72386 12.1907 4.5 12.4668 4.5H15.7239C15.7305 4.49987 15.7371 4.49987 15.7437 4.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgIcoItalic);
export default Memo;
