import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoChevronNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="ed983b4a-4156-4fe0-936a-02a8ab046215"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <title>{'ico_chevron_next'}</title>
    <path d="M9.65,8.35a.49.49,0,0,1,.7-.7l4,4a.48.48,0,0,1,0,.7l-4,4a.49.49,0,0,1-.7-.7L13.29,12Z" />
  </svg>
);
const Memo = memo(SvgIcoChevronNext);
export default Memo;
