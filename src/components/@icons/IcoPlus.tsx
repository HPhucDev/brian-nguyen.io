import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 4.5C12.5 4.22386 12.2761 4 12 4C11.7239 4 11.5 4.22386 11.5 4.5L11.5 11.5L4.5 11.5C4.22386 11.5 4 11.7239 4 12C4 12.2761 4.22386 12.5 4.5 12.5L11.5 12.5L11.5 19.5C11.5 19.7761 11.7239 20 12 20C12.2761 20 12.5 19.7761 12.5 19.5L12.5 12.5L19.5 12.5C19.7761 12.5 20 12.2761 20 12C20 11.7239 19.7761 11.5 19.5 11.5L12.5 11.5L12.5 4.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgIcoPlus);
export default Memo;
