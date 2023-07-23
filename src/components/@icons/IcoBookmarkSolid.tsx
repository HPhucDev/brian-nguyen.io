import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoBookmarkSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path d="M15.6429 3H7.92859C7.41709 3 6.92655 3.20319 6.56487 3.56487C6.20319 3.92655 6 4.41709 6 4.92859V20.3573C6.00003 20.4845 6.03779 20.6088 6.10851 20.7145C6.17923 20.8203 6.27973 20.9027 6.39729 20.9512C6.51484 20.9998 6.64417 21.0125 6.76891 20.9875C6.89364 20.9626 7.00818 20.9012 7.09801 20.8111L11.5582 16.351C11.588 16.321 11.6235 16.2973 11.6626 16.2811C11.7016 16.2649 11.7435 16.2565 11.7858 16.2565C11.828 16.2565 11.8699 16.2649 11.909 16.2811C11.948 16.2973 11.9835 16.321 12.0133 16.351L16.4735 20.8111C16.5633 20.9012 16.6779 20.9626 16.8026 20.9875C16.9273 21.0125 17.0567 20.9998 17.1742 20.9512C17.2918 20.9027 17.3923 20.8203 17.463 20.7145C17.5337 20.6088 17.5715 20.4845 17.5715 20.3573V4.92859C17.5715 4.41709 17.3683 3.92655 17.0066 3.56487C16.645 3.20319 16.1544 3 15.6429 3Z" />
  </svg>
);
const Memo = memo(SvgIcoBookmarkSolid);
export default Memo;
