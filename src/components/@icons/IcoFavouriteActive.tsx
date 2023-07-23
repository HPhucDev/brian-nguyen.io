import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoFavouriteActive = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_favourite_active'}</title>
    <path d="M12,16.64,8.32,18.57a.57.57,0,0,1-.77-.24A.56.56,0,0,1,7.49,18l.71-4.09-3-2.9a.57.57,0,0,1,0-.81A.59.59,0,0,1,5.54,10l4.11-.6,1.84-3.72a.57.57,0,0,1,.76-.26.55.55,0,0,1,.26.26L14.35,9.4l4.11.6a.59.59,0,0,1,.49.65.62.62,0,0,1-.17.33l-3,2.9L16.51,18a.58.58,0,0,1-.47.66.57.57,0,0,1-.36-.06Z" />
  </svg>
);
const Memo = memo(SvgIcoFavouriteActive);
export default Memo;
