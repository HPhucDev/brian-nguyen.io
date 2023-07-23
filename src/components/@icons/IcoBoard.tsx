import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#000000" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6.5C4 6.22386 4.22386 6 4.5 6H19.5C19.7761 6 20 6.22386 20 6.5V9.5C20 9.77614 19.7761 10 19.5 10H19V18.5C19 18.7761 18.7761 19 18.5 19H5.5C5.22386 19 5 18.7761 5 18.5V10H4.5C4.22386 10 4 9.77614 4 9.5V6.5ZM6 18H17.9951V10H6V18ZM5 9H19V7H5V9ZM15 11.5C15 11.7761 14.7761 12 14.5 12H9.5C9.22386 12 9 11.7761 9 11.5C9 11.2239 9.22386 11 9.5 11H14.5C14.7761 11 15 11.2239 15 11.5Z"
    />
  </svg>
);
const Memo = memo(SvgIcoBoard);
export default Memo;
