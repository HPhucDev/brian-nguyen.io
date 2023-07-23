import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'Facebook'}</title>
    <path
      id="facebook"
      className="cls-1"
      d="M17.34,6H6.66A.67.67,0,0,0,6,6.66V17.34a.67.67,0,0,0,.66.66h5.75V13.35H10.85V11.54h1.56V10.21a2.19,2.19,0,0,1,2.33-2.4,13.74,13.74,0,0,1,1.4.07V9.5h-1c-.75,0-.9.36-.9.89v1.15h1.79l-.23,1.81H14.28V18h3.06a.67.67,0,0,0,.66-.66V6.66A.67.67,0,0,0,17.34,6"
    />
  </svg>
);
const Memo = memo(SvgIcoFacebook);
export default Memo;
