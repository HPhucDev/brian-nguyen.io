import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLogoHPhucColored = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="695"
    height="949"
    viewBox="0 0 695 949"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 930.167C0 940.108 8.05888 948.167 18 948.167H106C374 948.167 374 799.921 374 617.27V21.8233C374 11.8822 365.941 3.82336 356 3.82336H255.586C106 3.82336 0 93.2615 0 275.913V930.167Z"
      fill="#000000"
    />
    <path
      d="M406.97 636.359C396.973 637.075 388.762 628.945 388.753 618.924L388.237 21.9997C388.229 12.0569 396.472 3.94384 406.407 4.30907C686.705 14.613 691.118 275.159 691.046 314.091L691.017 329.872C692.997 491.23 567.342 624.879 406.97 636.359Z"
      fill="#000000"
    />
  </svg>
);
const Memo = memo(SvgLogoHPhucColored);
export default Memo;
