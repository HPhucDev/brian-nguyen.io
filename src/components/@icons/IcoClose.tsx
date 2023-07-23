import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoClose = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_close'}</title>
    <path
      id="close"
      className="cls-1"
      d="M12,11.29,17,6.34a.5.5,0,0,1,.71.71l-4.95,5L17.66,17a.5.5,0,0,1-.71.71L12,12.71,7.05,17.66A.5.5,0,0,1,6.34,17L11.29,12,6.34,7.05a.5.5,0,0,1,.71-.71Z"
    />
  </svg>
);
const Memo = memo(SvgIcoClose);
export default Memo;
