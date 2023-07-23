import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoComments = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_comments'}</title>
    <path d="M8.5,16.5l2.4-1.8a1,1,0,0,1,.6-.2h6a1,1,0,0,0,1-1v-6a1,1,0,0,0-1-1H6.5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h1a1,1,0,0,1,1,1Zm3-1-4,3v-3h-1a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2h11a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2Z" />
  </svg>
);
const Memo = memo(SvgIcoComments);
export default Memo;
