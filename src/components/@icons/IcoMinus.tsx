import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12C4 11.7239 4.22386 11.5 4.5 11.5L19.5 11.5C19.7761 11.5 20 11.7239 20 12C20 12.2761 19.7761 12.5 19.5 12.5L4.5 12.5C4.22386 12.5 4 12.2761 4 12Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgIcoMinus);
export default Memo;
