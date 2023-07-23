import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoChevronPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="e54ccd60-b9c1-4e9d-8d06-7eafe9666d7f"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <title>{'ico_chevron_previous'}</title>
    <path d="M14.35,15.65a.49.49,0,0,1-.7.7l-4-4a.48.48,0,0,1,0-.7l4-4a.49.49,0,0,1,.7.7L10.71,12Z" />
  </svg>
);
const Memo = memo(SvgIcoChevronPrevious);
export default Memo;
