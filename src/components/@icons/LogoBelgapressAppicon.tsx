import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLogoBelgapressAppicon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 56 56" fill="none" role="img" {...props}>
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={56}
      height={56}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19.9076C0 12.9393 0 9.45514 1.35613 6.7936C2.54901 4.45243 4.45243 2.54901 6.7936 1.35613C9.45514 0 12.9393 0 19.9076 0H36.0924C43.0607 0 46.5449 0 49.2064 1.35613C51.5476 2.54901 53.451 4.45243 54.6439 6.7936C56 9.45514 56 12.9393 56 19.9076V36.0924C56 43.0607 56 46.5449 54.6439 49.2064C53.451 51.5476 51.5476 53.451 49.2064 54.6439C46.5449 56 43.0607 56 36.0924 56H19.9076C12.9393 56 9.45514 56 6.7936 54.6439C4.45243 53.451 2.54901 51.5476 1.35613 49.2064C0 46.5449 0 43.0607 0 36.0924V19.9076Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0V56H56V0H0Z" fill="#3349E8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 23.215C26.9294 23.215 25.8843 23.4168 24.8959 23.8138C24.1489 24.1141 23.7823 24.9753 24.0765 25.7365C24.3694 26.5005 25.2123 26.8754 25.96 26.5751C26.6104 26.3133 27.2961 26.1834 28 26.1834C31.0702 26.1834 33.5708 28.7323 33.5708 31.8692C33.5708 35.0048 31.0702 37.5557 28 37.5557C24.9279 37.5557 22.4292 35.0048 22.4292 31.8692V16.9611C22.4292 16.1386 21.7794 15.4766 20.9763 15.4766C20.1758 15.4766 19.5234 16.1386 19.5234 16.9611V31.8692C19.5234 36.6406 23.3236 40.5234 28 40.5234C32.6738 40.5234 36.4766 36.6406 36.4766 31.8692C36.4766 27.0959 32.6738 23.215 28 23.215"
        fill="white"
      />
    </g>
  </svg>
);
const Memo = memo(SvgLogoBelgapressAppicon);
export default Memo;
