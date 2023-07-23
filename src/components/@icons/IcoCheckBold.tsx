import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoCheckBold = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.01187 15.9591C9.03491 16.0035 9.06505 16.0451 9.10229 16.0824L10.0512 17.0313C10.2464 17.2265 10.563 17.2265 10.7583 17.0313L10.7609 17.0286C10.7657 17.0242 10.7704 17.0197 10.775 17.0151L11.7239 16.0662C11.7285 16.0616 11.733 16.0569 11.7374 16.0522L19.9871 7.80244C20.1824 7.60717 20.1824 7.29059 19.9871 7.09533L19.0382 6.14645C18.843 5.95118 18.5264 5.95118 18.3311 6.14645L10.4212 14.0564L6.80244 10.4377C6.60717 10.2424 6.29059 10.2424 6.09533 10.4377L5.14645 11.3866C4.95118 11.5818 4.95118 11.8984 5.14645 12.0937L9.01187 15.9591Z"
    />
  </svg>
);
const Memo = memo(SvgIcoCheckBold);
export default Memo;
