import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_download'}</title>
    <path d="M6,14.18v2.5a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1v-2.5a.5.5,0,0,1,1,0v2.5a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2v-2.5a.5.5,0,0,1,1,0Zm5.5-.32.85.85a.5.5,0,0,1,0,.71.51.51,0,0,1-.71,0L8.11,11.88a.48.48,0,0,1,0-.7.5.5,0,0,1,.71,0l2.68,2.68v-8a.5.5,0,0,1,.5-.5.51.51,0,0,1,.5.5v8l2.68-2.68a.5.5,0,0,1,.71,0,.5.5,0,0,1,0,.7l-3.54,3.54a.51.51,0,0,1-.71,0,.54.54,0,0,1-.14-.35Z" />
  </svg>
);
const Memo = memo(SvgIcoDownload);
export default Memo;
