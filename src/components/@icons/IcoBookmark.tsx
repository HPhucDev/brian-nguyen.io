import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0769 21V4.38462C17.0769 4.01739 16.931 3.66521 16.6714 3.40554C16.4117 3.14588 16.0595 3 15.6923 3H7.38462C7.01739 3 6.66521 3.14588 6.40554 3.40554C6.14588 3.66521 6 4.01739 6 4.38462V21L11.5385 15.4615L17.0769 21ZM7 18.5858L10.8314 14.7544C11.0189 14.5669 11.2732 14.4615 11.5385 14.4615C11.8037 14.4615 12.058 14.5669 12.2456 14.7544L16.0769 18.5858V4.38462C16.0769 4.28261 16.0364 4.18478 15.9643 4.11265C15.8921 4.04052 15.7943 4 15.6923 4H7.38462C7.28261 4 7.18478 4.04052 7.11265 4.11265C7.04052 4.18478 7 4.28261 7 4.38462V18.5858Z"
    />
  </svg>
);
const Memo = memo(SvgIcoBookmark);
export default Memo;
