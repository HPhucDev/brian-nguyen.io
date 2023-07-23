import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoIgnoredresults = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_ignoredresults'}</title>
    <path d="M12,19a7,7,0,1,1,7-7A7,7,0,0,1,12,19ZM7.43,15.88l.07-.09L15.79,7.5l.09-.07a6,6,0,0,0-8.45,8.45Zm.69.69a6,6,0,0,0,8.45-8.45l-.07.09L8.21,16.5Z" />
  </svg>
);
const Memo = memo(SvgIcoIgnoredresults);
export default Memo;
