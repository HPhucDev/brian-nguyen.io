import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_checkbox_checked'}</title>
    <path d="M13,6.5a.5.5,0,0,1-.5.5H7V17H17V12.5a.5.5,0,0,1,1,0V17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6h5.5A.5.5,0,0,1,13,6.5ZM11.61,14,9.38,12.09a.5.5,0,0,1,.65-.77L12,13l5-5.58a.5.5,0,0,1,.7,0,.5.5,0,0,1,0,.71l-5.35,6a.5.5,0,0,1-.71,0Z" />
  </svg>
);
const Memo = memo(SvgIcoCheckboxChecked);
export default Memo;
