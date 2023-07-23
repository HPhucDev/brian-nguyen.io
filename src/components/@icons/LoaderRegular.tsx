import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLoaderRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 226 37" role="img" {...props}>
    <title>{'loader_regular'}</title>
    <desc>{'Created with Sketch.'}</desc>
    <defs>
      <linearGradient x1="0%" y1="50.000006%" x2="100%" y2="50.000006%" id="linearGradient-1">
        <stop stopColor="#EEF0F0" offset="0%" />
        <stop stopColor="#EEF0F0" offset="20%" />
        <stop stopColor="#F7F7F7" offset="30%" />
        <stop stopColor="#EEF0F0" offset="40%" />
        <stop stopColor="#EEF0F0" offset="100%" />
      </linearGradient>
    </defs>
    <g id="slices" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="svg" transform="translate(-62.000000, -347.000000)" fill="url(#linearGradient-1)">
        <g id="loader_regular" transform="translate(62.000000, 347.000000)">
          <path
            d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M40,2 L226,2 L226,18 L40,18 L40,2 Z M40,27 L118,27 L118,37 L40,37 L40,27 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgLoaderRegular);
export default Memo;
