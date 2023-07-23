import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_video'}</title>
    <path
      id="video"
      className="cls-1"
      d="M11,10v4l3-2ZM10,8.93a.54.54,0,0,1,.08-.28.51.51,0,0,1,.7-.14l4.6,3.07a.4.4,0,0,1,.13.13.5.5,0,0,1-.13.7l-4.6,3.07a.54.54,0,0,1-.28.08.5.5,0,0,1-.5-.5ZM6,7A1,1,0,0,0,5,8v8a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V8a1,1,0,0,0-1-1ZM4,8H4A2,2,0,0,1,6,6l12,.06a2,2,0,0,1,2,2V16a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z"
    />
  </svg>
);
const Memo = memo(SvgIcoVideo);
export default Memo;
