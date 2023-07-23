import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_trash'}</title>
    <path
      className="cls-1"
      d="M13.5,9a.54.54,0,0,1,.5.57v6.86a.5.5,0,1,1-1,0V9.57A.54.54,0,0,1,13.5,9Zm-3,0a.54.54,0,0,1,.5.57v6.86a.5.5,0,1,1-1,0V9.57A.54.54,0,0,1,10.5,9Zm-2,9h7a.5.5,0,0,0,.5-.5v-8a.5.5,0,0,1,1,0V18a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V9.5a.5.5,0,0,1,1,0v8A.5.5,0,0,0,8.5,18ZM15,6V7h2.5a.5.5,0,0,1,0,1H6.5a.5.5,0,0,1,0-1H9V6a1,1,0,0,1,1-1h4A1,1,0,0,1,15,6ZM10,6V7h4V6Z"
    />
  </svg>
);
const Memo = memo(SvgIcoTrash);
export default Memo;
