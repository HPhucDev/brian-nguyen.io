import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_radio'}</title>
    <path
      id="radio"
      d="M13.5,15.42H17a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H13.5a.5.5,0,0,1-.5-.5A.5.5,0,0,1,13.5,15.42Zm0-4H17a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H13.5a.5.5,0,0,1-.5-.5A.5.5,0,0,1,13.5,11.42Zm0,2H17a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H13.5a.5.5,0,0,1-.5-.5A.5.5,0,0,1,13.5,13.42Zm-4.5,2a1.5,1.5,0,1,0-1.5-1.5A1.5,1.5,0,0,0,9,15.42Zm0,1a2.5,2.5,0,1,1,2.5-2.5A2.49,2.49,0,0,1,9,16.42ZM6,9.92a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1v-6a1,1,0,0,0-1-1Zm8.41-1L7.26,6a.5.5,0,0,1,.38-.93l9.27,3.75.12.06h1a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2Z"
    />
  </svg>
);
const Memo = memo(SvgIcoRadio);
export default Memo;
