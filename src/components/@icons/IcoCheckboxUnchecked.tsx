import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCheckboxUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_checkbox_unchecked'}</title>
    <path d="M7,6H17a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6ZM7,7V17H17V7Z" />
  </svg>
);
const Memo = memo(SvgIcoCheckboxUnchecked);
export default Memo;
