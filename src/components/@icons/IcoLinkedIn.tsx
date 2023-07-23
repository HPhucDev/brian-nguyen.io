import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
    <title>{'LinkedIn'}</title>
    <g clipPath="url(#clip0_767_6578)">
      <path d="M16.6667 4H7.33333C5.49267 4 4 5.49267 4 7.33333V16.6667C4 18.5073 5.49267 20 7.33333 20H16.6667C18.508 20 20 18.5073 20 16.6667V7.33333C20 5.49267 18.508 4 16.6667 4ZM9.33333 16.6667H7.33333V9.33333H9.33333V16.6667ZM8.33333 8.488C7.68933 8.488 7.16667 7.96133 7.16667 7.312C7.16667 6.66267 7.68933 6.136 8.33333 6.136C8.97733 6.136 9.5 6.66267 9.5 7.312C9.5 7.96133 8.978 8.488 8.33333 8.488ZM17.3333 16.6667H15.3333V12.9307C15.3333 10.6853 12.6667 10.8553 12.6667 12.9307V16.6667H10.6667V9.33333H12.6667V10.51C13.5973 8.786 17.3333 8.65867 17.3333 12.1607V16.6667Z" />
    </g>
    <defs>
      <clipPath id="clip0_767_6578">
        <rect width={16} height={16} transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgIcoLinkedIn);
export default Memo;
