import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCheckboxIndeterminate = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_checkbox_indeterminate'}</title>
    <path d="M9.5,11.5h5a.5.5,0,0,1,0,1h-5a.5.5,0,0,1,0-1ZM18,7H7V17H17V7h1V17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H17A1,1,0,0,1,18,7Z" />
  </svg>
);
const Memo = memo(SvgIcoCheckboxIndeterminate);
export default Memo;
