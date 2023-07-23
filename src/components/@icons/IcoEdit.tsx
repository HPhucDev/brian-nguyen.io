import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="b1110e06-8349-4aa9-b5f8-4496626ea059"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <title>{'ico_edit'}</title>
    <path d="M18.82,5.21l0,0a2.76,2.76,0,0,0-2-.81h0a2.78,2.78,0,0,0-2,.83l-.27.27h0L13.24,6.8h0l-7.6,7.6a.43.43,0,0,0-.11.21,0,0,0,0,0,0,0L4.39,19a.53.53,0,0,0,.13.48.52.52,0,0,0,.36.14H5l4.37-1.12,0,0a.4.4,0,0,0,.18-.1h0l9.18-9.18A2.8,2.8,0,0,0,18.82,5.21Zm-2,.17a1.89,1.89,0,0,1,1.28.52h0a1.8,1.8,0,0,1,.05,2.46L15.63,5.84A1.76,1.76,0,0,1,16.82,5.38Zm0,4.32L14.3,7.16l.62-.62,2.54,2.54ZM9.25,17.29,6.7,14.75l6.89-6.89,2.55,2.55Zm-3-1.57,2,2-2.71.69Z" />
  </svg>
);
const Memo = memo(SvgIcoEdit);
export default Memo;
