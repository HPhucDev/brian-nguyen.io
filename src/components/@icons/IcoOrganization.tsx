import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoOrganization = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_organization'}</title>
    <path d="M5,17.75a.5.5,0,1,0,0,1H19a.5.5,0,1,0,0-1Zm1-9H18l-6-3.5Zm9.5,8h2v-7h-2Zm-3,0h2v-7h-2Zm-3,0h2v-7h-2Zm-3,0h2v-7h-2Zm-1,0v-7H4.59A.59.59,0,0,1,4,9.18a.56.56,0,0,1,.28-.48l7.09-4.28a1.24,1.24,0,0,1,1.26,0L19.72,8.7a.55.55,0,0,1,.19.78.6.6,0,0,1-.5.27H18.5v7h.41a1.5,1.5,0,1,1,0,3H5.09a1.5,1.5,0,1,1,0-3Z" />
  </svg>
);
const Memo = memo(SvgIcoOrganization);
export default Memo;
