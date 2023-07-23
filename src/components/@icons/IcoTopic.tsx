import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTopic = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_topic'}</title>
    <path
      className="cls-1"
      d="M9.63,19.16a11.21,11.21,0,0,1-4.71,1.32A.5.5,0,0,1,4.39,20a.63.63,0,0,1,.06-.27,10.82,10.82,0,0,0,1.32-3.2,8,8,0,1,1,6.23,3A8.1,8.1,0,0,1,9.63,19.16Zm-.09-1.09a7,7,0,1,0-2.72-1.84,8.5,8.5,0,0,1-1.07,3.19A8.66,8.66,0,0,0,9.54,18.07Zm1.29-5.8h2l.4-1.5h-2Zm-1,0,.4-1.5H9.3a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.17L10.94,8a.5.5,0,0,1,1,.26L11.5,9.77h2L13.94,8a.5.5,0,0,1,1,.26L14.5,9.77h.8a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H14.23l-.4,1.5h.92a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H13.57L13.1,15a.5.5,0,0,1-1-.26l.4-1.49h-2L10.1,15a.5.5,0,0,1-1-.26l.4-1.49H8.75a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5Z"
    />
  </svg>
);
const Memo = memo(SvgIcoTopic);
export default Memo;
