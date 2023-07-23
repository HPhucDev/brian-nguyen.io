import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoPaperclip = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <path d="M9.2,19.32a4.7,4.7,0,0,1-3.32-8l5.61-5.61a3.32,3.32,0,0,1,2.31-1,3.31,3.31,0,0,1,2.43,5.6l-.09.08L10.54,16a1.9,1.9,0,0,1-2.69-2.68l5.62-5.61a.49.49,0,0,1,.7.7L8.56,14a.9.9,0,0,0,1.28,1.27l5.61-5.61a2.31,2.31,0,0,0,.7-1.7,2.27,2.27,0,0,0-.7-1.61,2.33,2.33,0,0,0-1.64-.65,2.26,2.26,0,0,0-1.61.71L6.58,12a3.71,3.71,0,0,0,0,5.23,3.79,3.79,0,0,0,5.24,0l6.83-6.83a.5.5,0,0,1,.7,0,.5.5,0,0,1,0,.71l-6.83,6.83A4.63,4.63,0,0,1,9.2,19.32Z" />
  </svg>
);
const Memo = memo(SvgIcoPaperclip);
export default Memo;
