import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoPressrelease = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <defs>
      <style>{'.cls-1{fill-rule:evenodd;}'}</style>
    </defs>
    <title>{'ico_pressrelease'}</title>
    <path
      id="pressrelease"
      className="cls-1"
      d="M17.87,10.57h-.05v2.2h.05a1,1,0,0,0,1.06-1V11.6A1,1,0,0,0,17.87,10.57ZM16.75,16V7.38L11.85,10v3.29Zm-6-2.86V10.25H7.1a.35.35,0,0,0-.35.34v2.17a.35.35,0,0,0,.35.34ZM9.47,16.56V14.12H8.28v2.44a.59.59,0,0,0,.59.48A.6.6,0,0,0,9.47,16.56ZM4.9,11.67a.48.48,0,0,0,.48.46h.3v-.91h-.3A.47.47,0,0,0,4.9,11.67Zm12.65-5.6h0a.51.51,0,0,1,.26.44v3h.06a2.09,2.09,0,0,1,2.13,2v.15a2.09,2.09,0,0,1-2.13,2.05h-.06v3.05a.51.51,0,0,1-.26.44.53.53,0,0,1-.53,0l-5.9-3.18h-.61v2.44a1.68,1.68,0,0,1-3.32,0V14.12H7.1a1.41,1.41,0,0,1-1.35-1H5.38a1.48,1.48,0,0,1,0-3h.37a1.42,1.42,0,0,1,1.35-1h4L17,6.07A.55.55,0,0,1,17.55,6.07Z"
    />
  </svg>
);
const Memo = memo(SvgIcoPressrelease);
export default Memo;
