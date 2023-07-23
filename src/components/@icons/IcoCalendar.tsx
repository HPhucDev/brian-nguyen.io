import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_calendar'}</title>
    <path
      id="agenda"
      d="M9,5.75v2a.5.5,0,0,1-1,0v-3a.5.5,0,0,1,1,0Zm5,0v1H10v-1Zm3,0h.87A2,2,0,0,1,20,7.62V17.88a2,2,0,0,1-2.13,1.87H6.13A2,2,0,0,1,4,17.88V7.62A2,2,0,0,1,6.13,5.75H7v1H6.08A1,1,0,0,0,5,7.67V17.83a1,1,0,0,0,1.08.92H17.92A1,1,0,0,0,19,17.83V7.67a1,1,0,0,0-1.08-.92H17Zm-1,0v2a.5.5,0,0,1-1,0v-3a.5.5,0,0,1,1,0Zm-4.5,10.5v-6h-4v6Zm6,.5a.5.5,0,0,1-.5.5H7a.5.5,0,0,1-.5-.5v-7a.5.5,0,0,1,.5-.5H17a.5.5,0,0,1,.5.5Zm-1-.5v-6h-4v6Z"
    />
  </svg>
);
const Memo = memo(SvgIcoCalendar);
export default Memo;
