import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFullscreenClose = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_fullscreen_close'}</title>
    <path
      className="cls-1"
      d="M14.69,10.1h0a1,1,0,0,1-1-1V4.49A.49.49,0,0,1,14.17,4a.48.48,0,0,1,.48.48v4l5.51-5.36a.5.5,0,0,1,.7,0h0a.48.48,0,0,1,0,.67L15.33,9.16h4.14a.47.47,0,1,1,0,.94ZM3.84,20.86a.5.5,0,0,1-.7,0h0a.48.48,0,0,1,0-.67l5.53-5.34H4.53a.47.47,0,1,1,0-.94H9.31a1,1,0,0,1,1,1v4.61a.49.49,0,0,1-.48.48.48.48,0,0,1-.48-.48v-4Z"
    />
  </svg>
);
const Memo = memo(SvgIcoFullscreenClose);
export default Memo;
