import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoNotifications = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_notifications'}</title>
    <path
      className="cls-1"
      d="M6.4,15.4h0a.77.77,0,0,0,.29,1.47h10.6a.77.77,0,0,0,.31-1.47l-1.11-.49a.4.4,0,0,1-.23-.37V11.23a4.35,4.35,0,0,0-4.1-4.36H12a4.27,4.27,0,0,0-4.25,4.25v3.42a.4.4,0,0,1-.24.37ZM12,5.06h0a1.15,1.15,0,0,0-1.15,1.13,5,5,0,0,1,1.33-.12,4.53,4.53,0,0,1,1,.13A1.15,1.15,0,0,0,12,5.06Zm0,13.88h0a1.67,1.67,0,0,0,1.62-1.27H10.38A1.67,1.67,0,0,0,12,18.94ZM6.7,17.67h0a1.57,1.57,0,0,1-.63-3h0l.87-.39V11.12a5.09,5.09,0,0,1,.85-2.8,5,5,0,0,1,2.26-1.86V6.21a1.95,1.95,0,1,1,3.9,0v.27A5.21,5.21,0,0,1,16.21,8.4a5.28,5.28,0,0,1,.85,2.84v3l.87.39a1.57,1.57,0,0,1-.63,3H14.43a2.46,2.46,0,0,1-4.86,0Z"
    />
  </svg>
);
const Memo = memo(SvgIcoNotifications);
export default Memo;
